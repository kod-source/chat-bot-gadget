import { Footer } from 'lib/components/Footer';
import { Header } from 'lib/components/Header';
import { NextPage } from 'next';
import React from 'react';
import { NonImplementation } from 'lib/components/NonImplementation';

const Iphone: NextPage = () => {
  return (
    <div className='bg-[#76dfd6] w-full h-[93vh]'>
      <div className='fixed w-full top-0 z-10'>
        <Header />
      </div>
      <NonImplementation />
      <div className='absolute bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  );
};

export default Iphone;
