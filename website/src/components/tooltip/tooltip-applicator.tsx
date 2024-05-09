import React, {
  FC,
  MutableRefObject,
  PropsWithChildren,
  PropsWithRef,
  ReactElement,
  forwardRef,
  useContext,
  useRef,
} from 'react';
import { useWindowSize } from 'usehooks-ts';
import { IsSsrContext } from '../root-contexts/is-ssr-context';
import { TooltipsContainerContext } from '../root-contexts/tooltips-container-context';
import OWClassNames from '@site/src/theme/OverwolfClassNames';

type TooltipApplicatorProps = PropsWithChildren<{
  direction?: string;
}>;

const tooltipSafetyMargin = 14;

const TooltipApplicator = () => {
  // const { direction = 'top', children } = props;
  const rid = Math.random(); // TODO - make this more robust

  const tooltipTargetRef = useRef<HTMLElement>();
  const tooltipsContainer = useContext(TooltipsContainerContext);

  

  const TooltipComponent: FC<TooltipApplicatorProps> = (props) => {
    const { children } = props;

    tooltipsContainer.setRegistryValue(rid.toString(), <div id={`tooltip-${rid}`} className={OWClassNames.themeComponents.tooltips.tooltip}>
      {children}
    </div>)

    return <></>
  }


  /**
   * TODO: Finish up this component. Essentially:
   * - Figure out how to actually render tooltips
   * - Pass rendered tooltips to registry, no need for portals
   * - Use `rid` as key for tooltips in registry
   * - Handle dismounting and unsubscribing (aka cleanup) properly, IDEALLY INTERNALLY
   * 
   * In the end, this should return:
   * - rid (just in case)
   * - TooltipComponent (for use in wrapping up the tooltip's content)
   * - targetRef (for use in "marking" the component to be tooltip'd)
   * 
   * In the end, this should accept (for INITIALIZING):
   * - rid (optional, to hardcode it. THROW ERROR IF DUPLICATE)
   * - literally nothing else
   */

  return { TooltipComponent, tooltipTargetRef };



  const isSsr = useContext(IsSsrContext);
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  const tooltip = document.createElement('div');
  tooltip.className = `tool-tip ${direction} ${size}`;
  tooltip.innerHTML = toolTipParent.getAttribute('data-tooltip') as string;
  document.body.appendChild(tooltip);

  let toolTipCords = toolTipParent.getBoundingClientRect(),
    left,
    top;
  const toolTipRect = tooltip.getBoundingClientRect();
  const triangleSize = 16;
  let tooltipPointerOffsetX = 0;
  let tooltipPointerOffsetY = 0;

  const windowRightEdge = isSsr ? 0 : windowWidth - tooltipSafetyMargin;
  const windowBottomEdge = isSsr ? 0 : windowHeight - tooltipSafetyMargin;

  switch (direction) {
    case 'right':
      left = toolTipCords.right;
      top =
        (Number(toolTipCords.top) + Number(toolTipCords.bottom)) / 2 -
        tooltip.offsetHeight / 2;

      if (
        Number(toolTipCords.right) + tooltip.offsetWidth >
        document.documentElement.clientWidth
      ) {
        left = document.documentElement.clientWidth - tooltip.offsetWidth;
      }

      break;

    case 'left':
      left = toolTipCords.left - tooltip.offsetWidth - triangleSize;
      top =
        (Number(toolTipCords.top) + Number(toolTipCords.bottom)) / 2 -
        tooltip.offsetHeight / 2;

      break;

    case 'bottom':
      left =
        Number(toolTipCords.left) +
        (toolTipCords.width - tooltip.offsetWidth) / 2;
      top = Number(toolTipCords.bottom) + 2;

      break;

    case 'top':
      left =
        Number(toolTipCords.left) +
        (toolTipCords.width - tooltip.offsetWidth) / 2;
      top = Number(toolTipCords.top) - tooltip.offsetHeight;

      break;
  }

  const availableWidth = windowRightEdge - left; // distance from window right edge
  if (availableWidth < toolTipRect.width) {
    // when there isn't enough space for the tooltip
    tooltipPointerOffsetX = toolTipRect.width - availableWidth;
    left = left - tooltipPointerOffsetX;
  }

  const availableHeight = windowBottomEdge - top; // distance from window bottom
  if (direction == 'bottom' && availableHeight < toolTipRect.height) {
    // when there isn't enough space below and the tooltip opens down
    direction = 'top'; // change the tooltip to open above
    top = Number(toolTipCords.top) - tooltip.offsetHeight; // change coords for that
  }

  // when there isn't enough space below and it opens left or right
  if (
    (direction == 'left' || direction == 'right') &&
    availableHeight < toolTipRect.height
  ) {
    tooltipPointerOffsetY = toolTipRect.height - availableHeight;
    top = top - tooltipPointerOffsetY; // change coords for that
  }

  left = left < 0 ? Number(toolTipCords.left) : left;
  top = top < 0 ? Number(toolTipCords.bottom) : top;

  tooltip.className = `tool-tip ${direction} ${size}`; // the className determines where the triangle is pointing

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top + pageYOffset}px`;
  tooltip.style.setProperty(
    '--pointer-offset-x',
    `${tooltipPointerOffsetX - triangleSize / 2}px`,
  ); // if the tooltip is offset to one side, this changes the position of the triangle
  tooltip.style.setProperty(
    '--pointer-offset-y',
    `${tooltipPointerOffsetY - triangleSize / 2}px`,
  ); // if the tooltip is offset to one side, this changes the position of the triangle

  // ---------------------------------------------------------------------------

  return (
    <>
      {children}
      {<Target />}
      <div></div>
      {isMobile && (
        <button
          className="tool-tip-info-icon"
          data-tooltip={text}
          tooltip-position={direction}
          tooltip-size={size}
          onClick={handleMegaToolTip}
        >
          <svg className="tool-tip-icon">
            <use href="/img/sprite.svg#info"></use>
          </svg>
        </button>
      )}
      {!isMobile && (
        <button
          className={className}
          data-tooltip={text}
          tooltip-position={direction}
          tooltip-size={size}
          onMouseOver={handleMegaToolTip}
          onMouseOut={killAllTooltips}
          onFocus={handleMegaToolTip}
          onBlur={killAllTooltips}
        >
          <svg className="tool-tip-icon">
            <use href="/img/sprite.svg#info"></use>
          </svg>
        </button>
      )}
    </>
  );
});

export default TooltipApplicator;
