import React, { Fragment, ReactElement, useState } from 'react';
import TooltipsContainer from '../tooltip/tooltips-container';

export type RegisteredTooltipsType = {
  [key: string]: ReactElement;
};

export const TooltipsContainerContext = React.createContext<{
  getRegistry: () => RegisteredTooltipsType;
  setRegistryValue: (key: string, value?: ReactElement) => void;
}>(null);

export function TooltipsContainerProvider(props: React.PropsWithChildren) {
  const { children } = props;
  const [registry, setRegistry] = useState<RegisteredTooltipsType>({});

  return (
    <TooltipsContainerContext.Provider
      value={{
        getRegistry: () => registry,
        setRegistryValue: (key, value) => {
          const newRegistry = registry;
          newRegistry[key] = value;
          setRegistry(newRegistry);
        },
      }}
    >
      <TooltipsContainer>
        {Object.keys(registry).map((key) => (
          <Fragment key={key}>{registry[key]}</Fragment>
        ))}
      </TooltipsContainer>
      {children}
    </TooltipsContainerContext.Provider>
  );
}
