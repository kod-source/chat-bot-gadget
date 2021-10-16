import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { FormEvent, useContext, useState } from 'react';
import { signUpRepository } from '../../lib/api/repository/authRepository';
import { AuthContext } from '../_app';

const SignUp: NextPage = () => {
  const { setUser, setIsSignedIn } = useContext(AuthContext);
  const router = useRouter();
  const [name, setName] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');
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
        avatar
      );
      if (signUpUser.status === 'created') {
        setUser(signUpUser.user);
        setIsSignedIn(true);
        router.push('/');
      } else {
        alert('そのメールアドレスが使用されいる可能性があります。');
      }
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message);
      }
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>新規作成</h2>
        <input
          type='text'
          name='name'
          placeholder='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='email'
          name='email'
          placeholder='メールアドレス'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          name='password'
          placeholder='パスワード'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type='password'
          name='passwordConfirmation'
          placeholder='パスワードを再度入力してください。'
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button type='submit'>新規作成</button>
      </form>
    </div>
  );
};

export default SignUp;
