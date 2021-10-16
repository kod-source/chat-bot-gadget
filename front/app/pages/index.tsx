import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useContext } from 'react';
import { logoutUrl } from '../lib/api/hostUrl/url';
import styles from '../styles/Home.module.css';
import { AuthContext } from './_app';

const Home: NextPage = () => {
  const { setUser, setIsSignedIn } = useContext(AuthContext);

  const logout = () => {
    axios
      .delete(logoutUrl, { withCredentials: true })
      .then(() => {
        setIsSignedIn(false);
        setUser(undefined);
        location.reload();
      })
      .catch((error) => console.log('ログアウトエラー', error));
  };

  return (
    <div>
      <Head>
        <title>ガジェットボット</title>
      </Head>
      <h1>こちらはホームページ</h1>
      <button onClick={() => logout()}>ログアウト</button>
    </div>
  );
};

export default Home;
