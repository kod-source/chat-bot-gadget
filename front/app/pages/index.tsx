import { Avatar, Button } from '@mui/material';
import { Header } from 'lib/components/Header';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import Link from 'next/link';
import { AuthContext } from './_app';
import AppRegistrationSharpIcon from '@mui/icons-material/AppRegistrationSharp';
import Card from '@mui/material/Card';
import gadgetImage from '../public/gadgetImage.jpg';
import macBookImage from '../public/macBookImage.jpg';
import iphoneImage from '../public/iphoneImage.jpg';
import ipadImage from '../public/ipadImage.jpg';
import { CardMessage } from 'lib/components/CardMessage';
import { Footer } from 'lib/components/Footer';
import { Loading } from 'lib/components/Loading';

const Home: NextPage = () => {
  const { user, isSignedIn } = useContext(AuthContext);

  // if (!user) return <Loading />;
  return (
    <div>
      <Head>
        <title>GadgetBot</title>
      </Head>
      <div className='fixed top-0 w-full z-10'>
        <Header />
      </div>
      <div className='mt-16 py-36 sm:flex sm:justify-center bg-gray-300'>
        <div className='sm:my-2 sm:mr-14 mx-4 text-center'>
          <h1 className='font-mono sm:text-2xl text-xl mb-5'>
            おすすめのガジェット商品を教えてくれる
            <br />
            <span className='font-bold text-3xl'>GadgetBot</span>
          </h1>
          <p className='font-mono text-lg mb-3'>
            チャットボットが教えてくれます。
          </p>
          {!isSignedIn && (
            <>
              <Link href='/signup' passHref>
                <Button
                  variant='contained'
                  className='mb-3 p-1 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110'
                >
                  <AppRegistrationSharpIcon />
                  新規登録
                </Button>
              </Link>
              <p className='text-gray-500'>
                ※ログインしない場合は、お気に入り登録などできません。
              </p>
            </>
          )}
        </div>
        <Avatar
          alt='gadget_image'
          src={gadgetImage.src}
          sx={{ width: 200, height: 200 }}
          className='m-auto sm:m-0'
        />
      </div>
      <div className='py-12'>
        <div className='text-center font-mono'>
          <h1 className='text-2xl'>
            とりあえず最新機種を買おうとしていませんか？
          </h1>
          <h2 className='mt-6 mb-20 text-xl'>
            あなたに最適な機種を教えてくれます。
          </h2>
        </div>
        <div className='mb-16 lg:flex lg:justify-center'>
          <Link href='/iphone'>
            <Card
              className='lg:mx-4 sm:m-auto sm:my-10 m-8 lg:my-0 cursor-pointer hover:opacity-70'
              sx={{ maxWidth: 500 }}
            >
              <CardMessage
                image={iphoneImage}
                title='iPhone'
                text='iPhoneは特に最新機種買う人が多いですね。けど、本当にその最新の機種必要ですか？最近のiPhoneの進化はカメラの進化がほとんどで昔の機種でも全然現役で使えまよ。'
              />
            </Card>
          </Link>
          <Link href='/ipad'>
            <Card
              className='lg:mx-4 sm:m-auto sm:my-10 m-8 lg:my-0 cursor-pointer hover:opacity-70'
              sx={{ maxWidth: 500 }}
            >
              <CardMessage
                image={ipadImage}
                title='iPad'
                text='こちらは初めてiPadの購入を検討している方向けになっております。整備品済み製品もこちらでは、対象となっているためすぐに購入ができない可能性もあるのでご了承ください。'
              />
            </Card>
          </Link>
          <Link href='/mac'>
            <Card
              className='lg:mx-4 sm:m-auto sm:my-10 m-8 lg:my-0 cursor-pointer hover:opacity-70'
              sx={{ maxWidth: 500 }}
            >
              <CardMessage
                image={macBookImage}
                title='MacBook'
                text='こちらははMacBookでノート型のPCのみになっております。もしリモートワーク主体でデクストップPCを検討している方は、今後デスクトップ版も用意しますのでしばらくお待ちください。'
              />
            </Card>
          </Link>
        </div>
        {!isSignedIn && (
          <Link href='/signup' passHref>
            <div className='text-center'>
              <Button
                variant='contained'
                className='p-1 h-12 lg:w-1/4 sm:w-2/6 w-4/6 bg-green-500 transition ease-in-out duration-300 hover:bg-green-400 hover:-translate-y-1 hover:scale-110'
              >
                <AppRegistrationSharpIcon />
                無料ユーザー登録はこちら
              </Button>
            </div>
          </Link>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
