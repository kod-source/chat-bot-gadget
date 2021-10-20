import { Avatar } from '@mui/material';
import axios from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useContext } from 'react';
import { logoutUrl } from '../lib/api/hostUrl/url';
import { AuthContext } from './_app';

const Home: NextPage = () => {
  const router = useRouter();
  const { user, setUser, setIsSignedIn } = useContext(AuthContext);

  const logout = () => {
    axios
      .delete(logoutUrl, { withCredentials: true })
      .then(() => {
        setIsSignedIn(false);
        setUser(undefined);
        router.push('/login');
      })
      .catch((error) => console.log('ログアウトエラー', error));
  };

  return (
    <div>
      <Head>
        <title>ガジェットボット</title>
      </Head>
      <h1>こちらはホームページ</h1>
      <Avatar alt='user image' src={user?.avatar?.url} />
      <button onClick={() => logout()}>ログアウト</button>
    </div>
  );
};

export default Home;
