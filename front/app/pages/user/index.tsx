import { Avatar, Button } from '@mui/material';
import { Footer } from 'lib/components/Footer';
import { Header } from 'lib/components/Header';
import { NextPage } from 'next';
import Head from 'next/head';
import { AuthContext } from 'pages/_app';
import React, { useContext, useState } from 'react';
import { DateTime } from 'luxon';
import { AvatarModal } from 'lib/components/AvatarModal';

const User: NextPage = () => {
  const { user, isSignedIn } = useContext(AuthContext);
  const [showAvatarModal, setShowAvatarModal] = useState<boolean>(false);
  console.log(user);
  if (!user) return null;
  return (
    <div>
      <Head>
        <title>マイページ</title>
      </Head>
      <div className='fixed top-0 w-full z-10'>
        <Header />
      </div>
      {isSignedIn ? (
        <>
          <div className='bg-gray-200'>
            <h1 className='mt-16 text-center font-bold font-mono text-4xl pt-10'>
              マイページ
            </h1>
            <div className='flex justify-center py-16'>
              <Avatar
                className='hover:opacity-70 cursor-pointer'
                sx={{ width: 200, height: 200 }}
                alt='user image'
                src={user?.avatar?.url}
                onClick={() => setShowAvatarModal(true)}
              />
              <div className='mx-20'>
                <p className='my-4'>ニックネーム　：{user?.name}</p>
                <p className='my-4'>メールアドレス：{user?.email}</p>
                <p className='my-4 opacity-70 text-gray-500'>
                  {user?.createdAt
                    ? DateTime.fromJSDate(new Date(user?.createdAt)).toFormat(
                        'yyyy年MM月dd日'
                      )
                    : ''}
                  にアカウントを作成しています
                </p>
                <Button
                  variant='contained'
                  className='my-4 p-2 transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110'
                >
                  プロフィールの編集
                </Button>
              </div>
            </div>
          </div>
          <h1>いいね一覧</h1>
        </>
      ) : (
        <h1>ログインしてね</h1>
      )}
      <Footer />
      <AvatarModal
        open={showAvatarModal}
        onClose={() => setShowAvatarModal(false)}
        image={user.avatar?.url || ''}
      />
    </div>
  );
};

export default User;
