import { Avatar, Button } from '@mui/material';
import { Header } from 'lib/components/Header';
import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
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

const Home: NextPage = () => {
  const router = useRouter();
  const { user, isSignedIn } = useContext(AuthContext);

  return (
    <div>
      <Head>
        <title>GadgetBot</title>
      </Head>
      <div className='fixed top-0 w-full'>
        <Header />
      </div>
      <div className='mt-16 py-36 flex justify-center bg-gray-300'>
        <div className='my-2 mr-14 text-center'>
          <h1 className='font-mono text-2xl mb-5'>
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
                  className='static mb-3 p-1 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110'
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
          className='static'
          src={gadgetImage.src}
          sx={{ width: 200, height: 200 }}
        />
      </div>
      <div className='py-12 bg-white'>
        <div className='text-center font-mono'>
          <h1 className='text-2xl'>
            とりあえず最新機種を買おうとしていませんか？
          </h1>
          <h2 className='mt-6 mb-20 text-xl'>
            あなたに最適な機種を教えてくれます。
          </h2>
        </div>
        <div className='mx-16 mb-16 flex static'>
          <Link href='/iphone'>
            <Card className='mx-4 cursor-pointer' sx={{ maxWidth: 400 }}>
              <CardMessage
                image={iphoneImage}
                title='iPhone'
                text='iPhoneは特に最新機種買う人が多いですね。けど、本当にその最新の機種必要ですか？最近のiPhoneの進化はカメラの進化がほとんどで昔の機種でも全然現役で使えまよ。'
              />
            </Card>
          </Link>
          <Link href='/ipad'>
            <Card className='mx-4 cursor-pointer' sx={{ maxWidth: 400 }}>
              <CardMessage
                image={ipadImage}
                title='iPad'
                text='こちらは初めてiPadの購入を検討している方向けになっております。整備品済み製品もこちらでは、対象となっているためもし選ばれたものがすぐに購入ができない可能性もあるのでご了承ください。'
              />
            </Card>
          </Link>
          <Link href='/mac'>
            <Card className='mx-4 cursor-pointer' sx={{ maxWidth: 400 }}>
              <CardMessage
                image={macBookImage}
                title='MacBook'
                text='こちらははMacBookでノート型のPCのみになっております。もしリモートワーク主体でデクストップPCを検討している方は、今後デスクトップ版も用意しますのでしばらくお待ちください。'
              />
            </Card>
          </Link>
        </div>
        <Link href='/signup' passHref>
          <div className='text-center'>
            <Button
              variant='contained'
              className='p-1 h-12 w-1/4 bg-green-500 static transition ease-in-out duration-300 hover:bg-green-400 hover:-translate-y-1 hover:scale-110'
            >
              <AppRegistrationSharpIcon />
              無料ユーザー登録はこちら
            </Button>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
