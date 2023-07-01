import React, { createContext, useEffect, useReducer, ReactNode } from 'react';

interface User {
  id: number;
  name: string;
  surname: string;
}

interface AuthState {
  user: User | null;
  isInitialized: boolean;
}

interface AuthAction {
  type: string;
  payload: any;
}

const initialAuthState: AuthState = {
  user: null,
  isInitialized: false,
};

const reducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'INITIALISE': {
      const { user } = action.payload;
      return {
        ...state,
        user,
        isInitialized: true,
      };
    }
    case 'SETUSER': {
      const { user } = action.payload;

      return {
        ...state,
        user,
      };
    }
    default: {
      return { ...state };
    }
  }
};

const AuthContext = createContext<AuthState>(initialAuthState);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  useEffect(() => {
    const initialise = async () => {
      try {
        const response = {
          data: {
            id: 12,
            name: 'Alessio',
            surname: 'De Padova',
          },
        };
        const user: User = response.data;
        console.log('user', user);

        dispatch({
          type: 'INITIALISE',
          payload: {
            user,
          },
        });
      } catch (err) {
        dispatch({
          type: 'INITIALISE',
          payload: {
            user: null,
          },
        });
      }
    };

    initialise();
  }, []);

  if (!state.isInitialized) {
    // return <LoadingScreen />;
  }

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export default AuthContext;
