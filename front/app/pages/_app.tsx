import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect, createContext } from 'react';
import { User } from '../lib/interfaces';
import { loggedRepository } from '../lib/api/repository/authRepository';
import 'tailwindcss/tailwind.css';

export const AuthContext = createContext(
  {} as {
    isSignedIn: boolean;
    setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
    user: User | undefined;
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  }
);

function MyApp({ Component, pageProps }: AppProps) {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | undefined>();

  const handleGetCurrentUser = async () => {
    const getLoggedUser = await loggedRepository();
    console.log(getLoggedUser);
    if (getLoggedUser.logged_in) {
      setIsSignedIn(true);
      setUser(getLoggedUser.user);
    } else {
      setIsSignedIn(false);
      setUser(undefined);
    }
  };

  useEffect(() => {
    handleGetCurrentUser();
  }, []);

  return (
    <>
      <div className='bg-gray-200'>
        <AuthContext.Provider
          value={{
            isSignedIn,
            setIsSignedIn,
            user,
            setUser,
          }}
        >
          <Component {...pageProps} />
        </AuthContext.Provider>
      </div>
    </>
  );
}
export default MyApp;
