import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import React, { FormEvent, useContext, useState } from 'react';
import { signUpRepository } from '../../lib/api/repository/authRepository';
import { AuthContext } from '../_app';
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
import { IconButton } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const theme = createTheme();

const SignUp: NextPage = () => {
  const { setUser, setIsSignedIn } = useContext(AuthContext);
  const router = useRouter();
  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    type: 'info',
    message: '',
  });
  const [name, setName] = useState<string>('');
  const [avatarImage, setAvatarImage] = useState<File | null>(null);
  const [avatarValue, setAvatarValue] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const signUpUser = await signUpRepository(
        name,
        email,
        password,
        passwordConfirmation,
        avatarImage
      );
      if (signUpUser.status === 'created') {
        setUser(signUpUser.user);
        setIsSignedIn(true);
        router.push('/');
      } else {
        setAlertState({
          ...alertState,
          open: true,
          type: 'error',
          message: 'そのメールアドレスが使用されいる可能性があります。',
        });
      }
    } catch (e) {
      if (e instanceof Error) {
        setAlertState({
          open: true,
          type: 'error',
          message: e.message,
        });
      }
    }
  };
  const onChangeInputFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatarImage(file);
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (!e.target) return null;
        setAvatarValue(e.target.result as string);
      };
      reader.readAsDataURL(file);
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
                id='name'
                label='ニックネーム'
                name='name'
                autoComplete='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
              <Box textAlign='center'>
                <IconButton>
                  <label className='cursor-pointer'>
                    {avatarImage ? (
                      <Avatar alt='profile image' src={avatarValue} />
                    ) : (
                      <AccountCircleRoundedIcon fontSize='large' />
                    )}
                    <input
                      type='file'
                      className='hidden'
                      accept='image/*'
                      onChange={onChangeInputFile}
                    />
                  </label>
                </IconButton>
              </Box>
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
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='もう一度入力してください。'
                type='password'
                id='password'
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                autoComplete='current-password'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                新規登録
              </Button>
              <hr className='text-gray-200 my-4' />
              <Link href='/login' passHref>
                <Button variant='text'>ログインに戻る</Button>
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

export default SignUp;
