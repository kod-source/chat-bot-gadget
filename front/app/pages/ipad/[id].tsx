import { Footer } from 'lib/components/Footer';
import { Header } from 'lib/components/Header';
import { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';

const IpadShow: NextPage = () => {
  return (
    <>
      <Head>
        <title>syousai</title>
      </Head>
      <div className='fixed top-0 w-full z-10'>
        <Header />
      </div>
      <h1 className='mt-36'>詳細画面です。</h1>
      <Footer />
    </>
  );
};

export default IpadShow;
