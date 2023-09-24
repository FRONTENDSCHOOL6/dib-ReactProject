import { createContext, useEffect, useState, useContext } from 'react';
import { string, node } from 'prop-types';
import { pb } from '@/api/pocketbase';

const AuthContext = createContext();

const initialAuthState = {
  isAuth: false,
  user: null,
  token: '',
};

function AuthProvider({ displayName = 'AuthProvider', children }) {
  const [authState, setAuthState] = useState(initialAuthState);

  useEffect(() => {
    if (pb.authStore.isValid) {
      const { token, model } = pb.authStore;
      setAuthState({
        isAuth: !!model,
        user: model,
        token,
      });
    }
  }, []);

  useEffect(() => {
    const unsub = pb.authStore.onChange((token, model) => {
      setAuthState((state) => ({
        ...state,
        isAuth: !!model,
        user: model,
        token,
      }));
    });

    return () => {
      unsub?.();
    };
  }, []);

  const join = async (registerUser) => {
    return await pb.collection('users').create(registerUser);
  };

  const logIn = async (usernameOrEmail, password) => {
    return await pb
      .collection('users')
      .authWithPassword(usernameOrEmail, password);
  };

  const logOut = async () => {
    return await pb.authStore.clear();
  };

  const authValue = {
    ...authState,
    join,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authValue} displayName={displayName}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  displayName: string,
  children: node.isRequired, // React.ReactNode
};
export default AuthProvider;

export const useAuth = () => {
  const authValue = useContext(AuthContext);
  if (!authValue) {
    throw new Error('useAuth 훅은 AuthProvider 내부에서만 사용할 수 있습니다.');
  }
  return authValue;
};