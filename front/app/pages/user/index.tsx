import { Header } from 'lib/components/Header';
import { NextPage } from 'next';
import React from 'react';

const User: NextPage = () => {
  return (
    <div>
      <Header />
      <h1>こちらはマイページです</h1>
    </div>
  );
};

export default User;
