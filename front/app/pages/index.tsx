import { Avatar } from '@mui/material';
import axios from 'axios';
import { Header } from 'lib/components/Header';
import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useContext } from 'react';
import { logoutUrl } from '../lib/api/hostUrl/url';
import { AuthContext } from './_app';

const Home: NextPage = () => {
  const router = useRouter();
  const { user, setUser, setIsSignedIn } = useContext(AuthContext);

  return (
    <div>
      <Head>
        <title>ガジェットボット</title>
      </Head>
      <div className='fixed top-0 w-full'>
        <Header />
      </div>
      <div className='static'>
        <h1 className='my-40 mt-16'>こちらはホームページ</h1>
        <Avatar alt='user image' className='static' src={user?.avatar?.url} />
        <h1 className='my-40'>こちらはホームページ</h1>
        <Avatar alt='user image' className='static' src={user?.avatar?.url} />
        <h1 className='my-40'>こちらはホームページ</h1>
        <Avatar alt='user image' className='static' src={user?.avatar?.url} />
        <h1 className='my-40'>こちらはホームページ</h1>
        <Avatar alt='user image' className='static' src={user?.avatar?.url} />
      </div>
    </div>
  );
};

export default Home;
