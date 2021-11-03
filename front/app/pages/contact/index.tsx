import { NextPage } from 'next';
import React, { FormEvent, useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import { Header } from 'lib/components/Header';
import { Footer } from 'lib/components/Footer';
import {
  Button,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Input,
  MenuItem,
  TextField,
} from '@mui/material';
import { AuthContext } from 'pages/_app';
import { Checkbox } from '@mui/material';

const Contact: NextPage = () => {
  const { user, isSignedIn } = useContext(AuthContext);
  const categorys = [
    'バグや問題報告',
    '機能追加リクエスト',
    'その他のお問い合わせ',
  ];
  const [selectCategory, setSelectCategory] =
    useState<string>('バグや問題報告');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [text, setText] = useState<string>('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(selectCategory);
    console.log(name);
    console.log(email);
    console.log(text);
  };

  return (
    <div>
      <Head>
        <title>お問い合せ</title>
      </Head>
      <div className='fixed top-0 w-full z-10'>
        <Header />
      </div>
      <h1 className='mt-28 text-center font-mono text-4xl'>
        お問い合わせフォーム
      </h1>
      <Grid className='my-12 w-1/2 m-auto'>
        <form onSubmit={onSubmit}>
          <TextField
            select
            label='カテゴリー'
            className='text-left my-1'
            value={selectCategory}
            onChange={(e) => setSelectCategory(e.target.value)}
            helperText='こちらから内容に相当するものをお選びください'
          >
            {categorys.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
          <Grid className='gridItems my-4' item md={12}>
            {isSignedIn && (
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) =>
                        e.target.checked
                          ? setName(user?.name || '')
                          : setName('')
                      }
                    />
                  }
                  label='ログイン中の名前を使用する'
                />
              </FormGroup>
            )}
            <TextField
              required
              fullWidth
              label='お名前'
              variant='outlined'
              color='secondary'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid className='gridItems my-4' item md={12}>
            {isSignedIn && (
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) =>
                        e.target.checked
                          ? setEmail(user?.email || '')
                          : setEmail('')
                      }
                    />
                  }
                  label='ログイン中のメールアドレスを使用する'
                />
              </FormGroup>
            )}
            <TextField
              required
              fullWidth
              label='メールアドレス'
              variant='outlined'
              color='secondary'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid className='gridItems my-4' item md={12}>
            <TextField
              required
              fullWidth
              rows={15}
              multiline
              label='お問合せ内容'
              variant='outlined'
              onChange={(e) => setText(e.target.value)}
            />
          </Grid>
          <Grid id='SubmitButtonGrid' className='gridItems' item md={12}>
            <div className='text-center'>
              <Button
                variant='contained'
                className='p-1 h-12 w-1/4 static transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110'
              >
                送信する
              </Button>
            </div>
          </Grid>
        </form>
      </Grid>
      <Footer />
    </div>
  );
};

export default Contact;
