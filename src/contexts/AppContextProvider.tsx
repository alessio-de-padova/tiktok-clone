import React from 'react';

import { AuthProvider } from './AuthContext';

const combineComponents = (...components: React.Context<any>[]) => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }) => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => <>{children}</>,
  );
};

const providers = [AuthProvider];

const AppContextProvider = combineComponents(...providers);

export default AppContextProvider;
