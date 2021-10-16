import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../_app';
import Link from 'next/link';

const Login: NextPage = () => {
  const { setCurrentUser, setIsSignedIn } = useContext(AuthContext);
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post(
        'http://localhost:3000/login',
        {
          user: {
            email: email,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((res: any) => {
        if (res.data.logged_in) {
          setCurrentUser(res.data.user);
          setIsSignedIn(true);
          console.log(res.data);
          // router.push('/');
        } else {
          alert(res.data.errors);
        }
      })
      .catch((e) => console.error(e));
  };
  return (
    <div>
      <p>ログイン</p>

      <form onSubmit={onSubmit}>
        <input
          type='email'
          name='email'
          placeholder='メールアドレス'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type='password'
          name='password'
          placeholder='パスワード'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type='submit'>ログイン</button>
      </form>
      <Link href='/signup'>アカウントがない方はこちら</Link>
    </div>
  );
};

export default Login;
