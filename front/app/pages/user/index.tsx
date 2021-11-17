import { Avatar, Button } from '@mui/material';
import { Footer } from 'lib/components/Footer';
import { Header } from 'lib/components/Header';
import { NextPage } from 'next';
import Head from 'next/head';
import { AuthContext } from 'pages/_app';
import React, { useContext, useState } from 'react';
import { DateTime } from 'luxon';
import { AvatarModal } from 'lib/components/AvatarModal';
import { EditUserModal } from 'lib/components/EditUserModal';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { NonLoginPage } from 'lib/components/NonLoginPage';

const UserProfile: NextPage = () => {
  const { user, setUser, isSignedIn } = useContext(AuthContext);
  const [showAvatarModal, setShowAvatarModal] = useState<boolean>(false);
  const [showEditUserModal, setShowEditUserModal] = useState<boolean>(false);

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
            <div className='lg:flex lg:justify-center py-16'>
              <Avatar
                className='hover:opacity-70 cursor-pointer m-auto lg:mx-1'
                sx={{ width: 200, height: 200 }}
                alt='user image'
                src={user?.avatar?.url}
                onClick={() => setShowAvatarModal(true)}
              />
              <div className='lg:mx-20 m-auto w-10/12 sm:w-6/12 lg:w-3/12'>
                <p className='my-4'>ニックネーム　：{user?.name}</p>
                <p className='my-4'>メールアドレス：{user?.email}</p>
                <p className='my-4'>
                  メモ：
                  {user?.memo?.split('\n').map((m) => (
                    <p>
                      {m}
                      <br />
                    </p>
                  ))}
                </p>
                <p className='my-4 opacity-70 text-gray-500'>
                  <DateRangeIcon />
                  {user?.createdAt
                    ? DateTime.fromJSDate(user?.createdAt).toFormat(
                        'yyyy年MM月dd日'
                      )
                    : ''}
                  にアカウントを作成しています
                </p>
                <div className='text-center lg:text-left'>
                  <Button
                    variant='contained'
                    className='my-4 p-2 transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110'
                    onClick={() => setShowEditUserModal(true)}
                  >
                    プロフィールの編集
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className='my-8'>
            <h1 className='text-center font-mono my-4 text-3xl'>
              お気に入り一覧
            </h1>
            <p className='text-center mt-28 text-xl'>
              お気に入りしている商品はありません。
            </p>
          </div>
        </>
      ) : (
        <NonLoginPage />
      )}
      {isSignedIn ? (
        <Footer />
      ) : (
        <div className='absolute bottom-0 w-full'>
          <Footer />
        </div>
      )}
      <AvatarModal
        open={showAvatarModal}
        onClose={() => setShowAvatarModal(false)}
        image={user?.avatar?.url || ''}
      />
      {user && (
        <EditUserModal
          open={showEditUserModal}
          onClose={() => setShowEditUserModal(false)}
          user={user}
          setUser={setUser}
          setShowEditUserModal={setShowEditUserModal}
        />
      )}
    </div>
  );
};

export default UserProfile;
