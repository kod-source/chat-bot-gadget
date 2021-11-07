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
import MenuIcon from '@mui/icons-material/Menu';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

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
      <AppBar position='static' className='sm:block hidden'>
        <Toolbar className='bg-gray-50'>
          <Link href='/' passHref>
            <IconButton
              edge='start'
              className='mr-1 hover:opacity-70'
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
              className='lg:p-2 border-transparent rounded-md mr-1 lg:mr-3 text-green-500 cursor-pointer hover:opacity-70 hover:border hover:bg-gray-300 font-serif'
            >
              GadgetBot
            </Typography>
          </Link>
          <div className='flex-grow flex justify-start'>
            <Link href='/user' passHref>
              <div className='flex hover:opacity-70 cursor-pointer'>
                <p className='p-2 mr-1 hidden lg:block text-gray-800 border-transparent rounded-md hover:border hover:bg-gray-300 font-serif'>
                  マイページ
                </p>
                {isSignedIn ? (
                  <Avatar
                    alt='user image'
                    src={user?.avatar?.url}
                    className='lg:mr-28 mr-4'
                  />
                ) : (
                  <AccountCircleRoundedIcon
                    fontSize='large'
                    color='action'
                    className='lg:mr-28 mr-4'
                  />
                )}
              </div>
            </Link>
            <Link href='/iphone'>
              <p className='p-2 mr-10 text-gray-800 border-transparent underline cursor-pointer rounded-md hover:opacity-70 hover:border hover:bg-gray-300 hover:no-underline font-serif'>
                iPhone
              </p>
            </Link>
            <Link href='/ipad'>
              <p className='p-2 mr-10 text-gray-800 border-transparent underline cursor-pointer rounded-md hover:opacity-70 hover:border hover:bg-gray-300 hover:no-underline font-serif'>
                iPad
              </p>
            </Link>
            <Link href='mac'>
              <p className='p-2 mr-10 text-gray-800 border-transparent underline cursor-pointer rounded-md hover:opacity-70 hover:border hover:bg-gray-300 hover:no-underline font-serif'>
                MacBook
              </p>
            </Link>
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
      <AppBar position='static' className='sm:hidden'>
        <Accordion className='bg-gray-50'>
          <AccordionSummary
            expandIcon={<MenuIcon />}
            className='bg-gray-50'
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <IconButton edge='start' className='mr-1'>
              <AppleIcon color='disabled' sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton edge='start' className='mr-1'>
              <Typography
                variant='h6'
                component='div'
                className='text-green-500 font-serif'
              >
                GadgetBot
              </Typography>
            </IconButton>
          </AccordionSummary>
          <AccordionDetails>
            <Link href='/'>
              <Typography className='text-black my-1 font-bold hover:opacity-70'>
                ホーム
              </Typography>
            </Link>
            <Link href='/user'>
              <Typography className='text-black my-1 font-bold hover:opacity-70'>
                マイページ
              </Typography>
            </Link>
            <Link href='/iphone'>
              <Typography className='p-2 w-16 text-gray-800 border-transparent underline cursor-pointer rounded-md hover:opacity-70 hover:border hover:bg-gray-300 hover:no-underline font-serif'>
                iPhone
              </Typography>
            </Link>
            <Link href='/ipad'>
              <Typography className='p-2 w-16 text-gray-800 border-transparent underline cursor-pointer rounded-md hover:opacity-70 hover:border hover:bg-gray-300 hover:no-underline font-serif'>
                iPad
              </Typography>
            </Link>
            <Link href='/mac'>
              <Typography className='p-2 w-16 text-gray-800 border-transparent underline cursor-pointer rounded-md hover:opacity-70 hover:border hover:bg-gray-300 hover:no-underline font-serif'>
                MacBook
              </Typography>
            </Link>
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
          </AccordionDetails>
        </Accordion>
      </AppBar>
    </header>
  );
};
