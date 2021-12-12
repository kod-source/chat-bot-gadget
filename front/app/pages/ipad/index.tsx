import { NextPage } from 'next';
import React, { useState } from 'react';
import Head from 'next/head';
import { Header } from 'lib/components/Header';
import { Footer } from 'lib/components/Footer';
import IpadDate from 'lib/DataSet/ipad_data.json';
import { Button } from '@mui/material';
import Image from 'next/image';

const Ipad: NextPage = () => {
  const [startIpadBot, setStartIpadBot] = useState(false);
  return (
    <>
      <Head>
        <title>iPad</title>
      </Head>
      <div className='fixed top-0 w-full z-10'>
        <Header />
      </div>
      {startIpadBot ? (
        <div className='mt-40'>
          <h1>診断スタート</h1>
        </div>
      ) : (
        <div className='mt-40 text-center'>
          <h1 className='text-4xl font-bold text-center text-gray-500'>
            最適なiPadページへようこそ！
          </h1>
          <hr className='p-0 w-1/2 m-auto text-gray-500 mt-1 mb-3' />
          <Image
            src='/IpadPageImage.jpg'
            width={500}
            height={500}
            className='pointer-events-none'
          />
          <h3 className='text-xl font-bold'>iPad</h3>
          <p className='text-yellow-700 my-3'>
            こちらはiPadを診断してくれるページになります
          </p>
          <p className='my-3'>早速スタートしますか？</p>
          <div className='mt-3 mb-16'>
            <Button
              className='mx-2 my-1 sm:my-0 w-56 bg-yellow-600 text-white hover:bg-yellow-700 static p-4 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110'
              onClick={() => setStartIpadBot(true)}
            >
              [ はい ]
            </Button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Ipad;
