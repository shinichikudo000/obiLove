import { useAuthStore } from '../store/authStore';
import React, { PropsWithChildren } from 'react';

export const AuthContext = React.createContext<ReturnType<typeof useAuthStore> | undefined>(undefined)

export type AuthProviderProps = PropsWithChildren;

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const auth = useAuthStore();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
