import React from 'react';
import { useWindowSize } from '@docusaurus/theme-common';

export const IsSsrContext = React.createContext(false);

export function IsSsrProvider(props: React.PropsWithChildren) {
  const { children } = props;
  const isMobile = useWindowSize();

  return (
    <IsSsrContext.Provider value={isMobile === 'ssr'}>
      {children}
    </IsSsrContext.Provider>
  );
}
