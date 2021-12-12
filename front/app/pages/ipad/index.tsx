import { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import { Header } from 'lib/components/Header';
import { Footer } from 'lib/components/Footer';
import IpadDate from 'lib/DataSet/ipad_data.json';

const Ipad: NextPage = () => {
  console.log(IpadDate);
  return (
    <>
      <Head>
        <title>iPad</title>
      </Head>
      <div className='fixed top-0 w-full z-10'>
        <Header />
      </div>
      <div className='mt-28'>
        <h1>ipad_page</h1>
      </div>
      <Footer />
    </>
  );
};

export default Ipad;
