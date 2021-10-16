import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/dist/client/router';
import axios from 'axios';

export const AuthContext = createContext(
  {} as {
    isSignedIn: boolean;
    setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
    currentUser: any;
    setCurrentUser: any;
  }
);

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState({});

  // 認証済みのユーザーがいるかどうかチェック
  // 確認できた場合はそのユーザーの情報を取得
  const handleGetCurrentUser = () => {
    axios
      .get('http://localhost:3000/logged_in', { withCredentials: true })
      .then((response: any) => {
        console.log('ログイン状況', response);
        if (response.data.logged_in && isSignedIn === false) {
          setIsSignedIn(true);
          setCurrentUser(response.data.user);
        } else {
          setIsSignedIn(false);
          setCurrentUser([]);
        }
      })
      .catch((error) => {
        console.log('ログインエラー', error);
      });
  };

  useEffect(() => {
    handleGetCurrentUser();
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{
          isSignedIn,
          setIsSignedIn,
          currentUser,
          setCurrentUser,
        }}
      >
        <Component {...pageProps} />
      </AuthContext.Provider>
    </>
  );
}
export default MyApp;
