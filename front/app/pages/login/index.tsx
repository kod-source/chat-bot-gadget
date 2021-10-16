import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../_app';
import Link from 'next/link';
import { loginRepository } from '../../lib/api/repository/authRepository';

const Login: NextPage = () => {
  const { setUser, setIsSignedIn } = useContext(AuthContext);
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const loggedUser = await loginRepository(email, password);
    if (loggedUser.logged_in) {
      setUser(loggedUser.user);
      setIsSignedIn(true);
      router.push('/');
    } else {
      alert(
        '認証に失敗しました。\n正しいメールアドレス・パスワードを入力し直すか、新規登録を行ってください。'
      );
    }
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
