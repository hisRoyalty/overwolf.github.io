import OWClassNames from '@site/src/theme/OverwolfClassNames';
import React, { FC, PropsWithChildren } from 'react';

type TooltipsContainerProps = PropsWithChildren<object>;

const TooltipsContainer: FC<TooltipsContainerProps> = (props) => {
  const { children } = props;

  return (
    <div className={OWClassNames.themeComponents.tooltips.container}>
      {children}
    </div>
  );
};

export default TooltipsContainer;
