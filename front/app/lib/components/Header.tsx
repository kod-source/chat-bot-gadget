import React, { FC, useContext } from 'react';
import AppleIcon from '@mui/icons-material/Apple';
import Link from 'next/link';
import { AuthContext } from 'pages/_app';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import { logoutUrl } from 'lib/api/hostUrl/url';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationSharpIcon from '@mui/icons-material/AppRegistrationSharp';
import { Avatar } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

export const Header: FC = () => {
  const { isSignedIn, setIsSignedIn, user, setUser } = useContext(AuthContext);
  const router = useRouter();

  const logout = () => {
    axios
      .delete(logoutUrl, { withCredentials: true })
      .then(() => {
        setIsSignedIn(false);
        setUser(undefined);
        router.push('/login');
      })
      .catch((e) => alert(e.message));
  };

  return (
    <header className='flex-grow'>
      <AppBar position='static'>
        <Toolbar className='bg-gray-50'>
          <Link href='/' passHref>
            <IconButton
              edge='start'
              className='mr-1 ml-28 hover:opacity-70'
              color='inherit'
              aria-label='menu'
            >
              <AppleIcon color='disabled' sx={{ fontSize: 40 }} />
            </IconButton>
          </Link>
          <Link href='/' passHref>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{ display: { xs: 'none', sm: 'block' } }}
              className='p-2 border-transparent rounded-md mr-5 text-green-500 cursor-pointer hover:opacity-70 hover:border hover:bg-gray-300 font-serif'
            >
              GadgetBot
            </Typography>
          </Link>
          <div className='flex-grow flex justify-start'>
            <Link href='/user' passHref>
              <div className='flex hover:opacity-70 cursor-pointer'>
                <p className='p-2 mr-1 text-gray-800 border-transparent rounded-md hover:border hover:bg-gray-300 font-serif'>
                  マイページ
                </p>
                {isSignedIn ? (
                  <Avatar
                    alt='user image'
                    className='mr-44'
                    src={user?.avatar?.url}
                  />
                ) : (
                  <AccountCircleRoundedIcon
                    className='mr-44'
                    fontSize='large'
                    color='action'
                  />
                )}
              </div>
            </Link>
            <p className='p-2 mr-10 text-gray-800 border-transparent underline cursor-pointer rounded-md hover:opacity-70 hover:border hover:bg-gray-300 hover:no-underline font-serif'>
              iPad
            </p>
            <p className='p-2 text-gray-800 border-transparent underline cursor-pointer rounded-md hover:opacity-70 hover:border hover:bg-gray-300 hover:no-underline font-serif'>
              GadgetBot
            </p>
          </div>
          {isSignedIn ? (
            <>
              <Button
                className='p-1 transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110'
                variant='contained'
                onClick={() => logout()}
              >
                <LogoutIcon />
                ログアウト
              </Button>
            </>
          ) : (
            <>
              <Link href='/signup' passHref>
                <Button
                  variant='contained'
                  className='mr-3 p-1 transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110'
                >
                  <AppRegistrationSharpIcon />
                  新規登録
                </Button>
              </Link>
              <Link href='/login' passHref>
                <Button
                  variant='outlined'
                  className='p-1 transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110'
                >
                  <LoginIcon />
                  ログイン
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </header>
  );
};
