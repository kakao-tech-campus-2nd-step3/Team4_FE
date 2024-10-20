import { useEffect, useState } from 'react';

import { AuthContext } from '@/contexts/AuthContext';
import { AuthContextType } from '@/types';

const initialAuthState: AuthContextType = {
  isAuthenticated: false,
  type: null,
  setAuth: () => {},
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuthState] = useState<AuthContextType>({
    ...initialAuthState,
    setAuth: (newAuth) => {
      setAuthState((prev) => ({
        ...prev,
        isAuthenticated: newAuth.isAuthenticated,
        type: newAuth.type,
      }));
    },
  });

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const storedType = localStorage.getItem('type');

    if (token && (storedType === 'user' || storedType === 'trainer')) {
      setAuthState((prev) => ({
        ...prev,
        isAuthenticated: true,
        type: storedType as 'user' | 'trainer',
      }));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...auth }}>{children}</AuthContext.Provider>
  );
};
