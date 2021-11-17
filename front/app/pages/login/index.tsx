import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../_app';
import Link from 'next/link';
import { AuthRepository } from '../../lib/api/repository/authRepository';
import { AlertState } from '../../lib/interfaces';
import { AlertMessage } from '../../lib/components/AlertMessage';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import homeImage from '../../public/homeImage.png';

const theme = createTheme();

const Login: NextPage = () => {
  const { setUser, setIsSignedIn } = useContext(AuthContext);
  const router = useRouter();
  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    type: 'info',
    message: '',
  });
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setAlertState({
        open: true,
        type: 'error',
        message: '全ての項目を入力してください。',
      });
      return;
    }
    const loggedUser = await AuthRepository.login(email, password);
    if (loggedUser.loggedIn) {
      setUser(loggedUser.user);
      setIsSignedIn(true);
      router.push('/');
    } else {
      setAlertState({
        open: true,
        type: 'error',
        message:
          '認証に失敗しました。\n正しいメールアドレス・パスワードを入力し直すか、新規登録を行ってください。',
      });
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component='main' sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${homeImage.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              新規登録
            </Typography>
            <Box component='form' noValidate onSubmit={onSubmit} sx={{ mt: 1 }}>
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='メールアドレス'
                name='email'
                autoComplete='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='パスワード'
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete='current-password'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                ログイン
              </Button>
              <hr className='text-gray-200 my-4' />
              <h2 className='text-center font-bold mb-2'>
                はじめての方はこちら
              </h2>
              <Link href='/signup' passHref>
                <Button fullWidth variant='outlined'>
                  <p>新規登録</p>
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <AlertMessage
        open={alertState.open}
        handleClose={() => setAlertState({ ...alertState, open: false })}
        type={alertState.type}
        message={alertState.message}
      />
    </ThemeProvider>
  );
};

export default Login;
