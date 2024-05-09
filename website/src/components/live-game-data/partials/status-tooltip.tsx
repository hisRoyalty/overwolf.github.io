import React from 'react';
import { StateNames, stateLabels } from '../utils/status';
import OWClassNames from '@site/src/theme/OverwolfClassNames';
import clsx from 'clsx';

function StatusToolTip(props: { gameState: StateNames; endOfLife?: string }) {
  const { gameState, endOfLife } = props;

  return (
    <div
      className={clsx(
        OWClassNames.common.fakeTooltip,
        'status-tooltip-trigger',
      )}
    >
      <div className={OWClassNames.common.content}>
        <span>
          {stateLabels[endOfLife ? StateNames.Deprecated : gameState]}
        </span>
      </div>
    </div>
  );
}

export default StatusToolTip;
