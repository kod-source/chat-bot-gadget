import { NextPage } from 'next';
import React, { FormEvent, useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import { Header } from 'lib/components/Header';
import { Footer } from 'lib/components/Footer';
import {
  Button,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  TextField,
} from '@mui/material';
import { AuthContext } from 'pages/_app';
import { Checkbox } from '@mui/material';
import { contactSendMailRepository } from 'lib/api/repository/contactRepository';
import { AlertMessage } from 'lib/components/AlertMessage';
import { AlertState } from 'lib/interfaces';
import { ConfirmingModal } from 'lib/components/ConfirmingModal';
import { Loading } from 'lib/components/Loading';

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
  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    type: 'info',
    message: '',
  });
  const [mailSending, setMailSending] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setOpenModal(true);
  };

  const sendContactMail = async () => {
    try {
      setMailSending(true);
      await contactSendMailRepository(selectCategory, name, email, text);
      setSelectCategory('バグや問題報告');
      setName('');
      setEmail('');
      setText('');
      setMailSending(false);
      setAlertState({
        open: true,
        type: 'success',
        message: '送信に成功しました',
      });
    } catch {
      setAlertState({
        open: true,
        type: 'error',
        message: '送信に失敗しました',
      });
    }
    setOpenModal(false);
  };

  if (!user) return <Loading />
  return (
    <div>
      <Head>
        <title>お問い合せ</title>
      </Head>
      <div className='fixed top-0 w-full z-10'>
        <Header />
      </div>
      <h1 className='mt-28 text-center font-mono sm:text-4xl text-2xl'>
        お問い合わせフォーム
      </h1>
      <Grid className='my-12 lg:w-1/2 sm:w-9/12 w-11/12 m-auto'>
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
                      checked={name === user?.name}
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
                      checked={email === user?.email}
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
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Grid>
          <Grid id='SubmitButtonGrid' className='gridItems' item md={12}>
            <div className='text-center'>
              <Button
                type='submit'
                variant='contained'
                disabled={mailSending}
                className='p-1 h-12 w-1/4 static transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110'
              >
                {mailSending ? '送信中' : '送信する'}
              </Button>
            </div>
          </Grid>
        </form>
      </Grid>
      <Footer />
      <ConfirmingModal
        open={openModal}
        title='送信確認'
        text='本当に送信してもよろしいでしょうか？'
        confirm={mailSending ? '送信中' : '送信する '}
        onClose={() => setOpenModal(false)}
        sendContactMail={() => sendContactMail()}
        mailSending={mailSending}
      />
      <AlertMessage
        open={alertState.open}
        handleClose={() => setAlertState({ ...alertState, open: false })}
        type={alertState.type}
        message={alertState.message}
      />
    </div>
  );
};

export default Contact;