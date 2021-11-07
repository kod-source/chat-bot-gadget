import React, { FC } from 'react';
import Link from 'next/link';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer: FC = () => {
  return (
    <footer>
      <div className='py-3 sm:flex sm:justify-center bg-gray-100 text-center'>
        <Link href='terms'>
          <p className='mx-3 p-2 text-gray-800 border-transparent cursor-pointer rounded-md hover:opacity-70 hover:border hover:bg-gray-300 font-serif'>
            利用規約
          </p>
        </Link>
        <Link href='privacy'>
          <p className='mx-3 p-2 text-gray-800 border-transparent cursor-pointer rounded-md hover:opacity-70 hover:border hover:bg-gray-300 font-serif'>
            プライバシーポリシー
          </p>
        </Link>
        <Link href='contact'>
          <p className='mx-3 p-2 text-gray-800 border-transparent cursor-pointer rounded-md hover:opacity-70 hover:border hover:bg-gray-300 font-serif'>
            お問い合せ
          </p>
        </Link>
        <div className='mx-3 p-2 text-gray-800 border-transparent cursor-pointer rounded-md hover:opacity-70 hover:border hover:bg-gray-300 font-serif'>
          <Link href='https://twitter.com/kd11188454' passHref>
            <a target='_blank'>
              <TwitterIcon />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};
