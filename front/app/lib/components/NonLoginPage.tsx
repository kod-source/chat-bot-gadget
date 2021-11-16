import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React from 'react';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Link from 'next/link';
import AppRegistrationSharpIcon from '@mui/icons-material/AppRegistrationSharp';
import LoginIcon from '@mui/icons-material/Login';

export const NonLoginPage = () => {
  return (
    <Card sx={{ minWidth: 275 }} className='mt-60 mb-24 m-auto w-2/5 p-4'>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          ログインしてからご利用ください
        </Typography>
        <Typography variant='h5' component='div' className='flex'>
          <p>
            <ReportProblemIcon />
          </p>
          <p className='mt-1'>こちらのコンテンツはご利用できません。</p>
        </Typography>
        <hr className='my-2 font-bold' />
        <Typography variant='body2'>
          こちらのページはログインもしくは新規登録してご利用ください。
          <br />
          ログインすることで商品をいいねしたりすることができます。
        </Typography>
      </CardContent>
      <CardActions>
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
      </CardActions>
    </Card>
  );
};
