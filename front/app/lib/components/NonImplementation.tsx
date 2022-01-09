import React from 'react';
import { FC } from 'react';
import Image from 'next/image';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';

export const NonImplementation: FC = () => {
  return (
    <div className='sm:flex sm:justify-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
      <div className='hidden sm:block'>
        <Image src='/NonImplementation.png' width={500} height={1000} />
      </div>
      <div className='sm:ml-10'>
        <h1 className='text-3xl lg:text-5xl font-bold my-2 sm:my-5'>今度実装予定</h1>
        <p className='text-xl lg:text-2xl my-2 sm:my-5'>
          こちらのページはまだ実装しておりません。大変ご迷惑をおかけいたしますがもうしばらくお待ちください。
        </p>
        <div className='mt-10'>
          <Link href='/' passHref>
            <a className='hover:opacity-70 text-white'>
              <ArrowBackIcon fontSize='large' />
              ホームに戻る
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
