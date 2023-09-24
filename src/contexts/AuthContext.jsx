import { createContext, useEffect, useState, useContext } from 'react';
import { string, node } from 'prop-types';
import { pb } from '@/api/pocketbase';

// createContext얘로 AuthContext 상태를 담아주는 아이를 만듦
const AuthContext = createContext();

// 스테이트의 초깃값
const initialAuthState = {
  isAuth: false,
  user: null,
  token: '',
};
// Context.Provider 래퍼 컴포넌트 작성
function AuthProvider({ displayName = 'AuthProvider', children }) {
  // 인증 상태를 담아두는 스테이트
  const [authState, setAuthState] = useState(initialAuthState);

  // 로컬스토리지의 값이 있으면 넣어주고 없으면 안넣어줌
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
    // 이건 자세히 모르겠지만 처음에 랜더링 될때 한번 실행되는데 상태값이 변하면 다시 넣어주는 아이인듯
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

  // 회원가입, 로그인, 로그아웃의 값을 데이터베이스에서 가지고와서 사용
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

  // 가져온 값을 전체 prop에 넣어서 뿌려준다
  const authValue = {
    ...authState,
    join,
    logIn,
    logOut,
  };

  // children이 이 값을 뿌려줄 페이지, 근데 전체에 로그인 넣을 꺼니까 app에 넣자
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

// 인증 정보를 앱 어디서나 받아 쓸 수 있도록 하는 함수
export const useAuth = () => {
  const authValue = useContext(AuthContext);
  if (!authValue) {
    throw new Error('useAuth 훅은 AuthProvider 내부에서만 사용할 수 있습니다.');
  }

  return authValue;
};
