import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AppContextProvider from './contexts/AppContextProvider';
import AppRoutes from './routes/app.routes';

const Routes: React.FC = () => {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </AppContextProvider>
  );
};

export default Routes;
