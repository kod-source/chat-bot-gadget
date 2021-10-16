import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../_app';

const SignUp: NextPage = () => {
  const { setCurrentUser, setIsSignedIn } = useContext(AuthContext);
  const router = useRouter();
  const [name, setName] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post(
        'http://localhost:3000/signup',
        {
          user: {
            name: name,
            avatar: avatar,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
          },
        },
        { withCredentials: true }
      )
      .then((res: any) => {
        if (res.data.status === 'created') {
          setCurrentUser(res.data.user);
          setIsSignedIn(true);
          router.push('/');
        } else {
          alert(res.data.errors)
        }
      })
      .catch((e) => console.error(e));
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
