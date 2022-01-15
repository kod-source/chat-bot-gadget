import {
  Button,
  CardContent,
  Typography,
  CardActions,
  Box,
} from '@mui/material';
import { Header } from 'lib/components/Header';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import Link from 'next/link';
import { AuthContext } from './_app';
import AppRegistrationSharpIcon from '@mui/icons-material/AppRegistrationSharp';
import Card from '@mui/material/Card';
import { Footer } from 'lib/components/Footer';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';

const Home: NextPage = () => {
  const router = useRouter();
  const { isSignedIn } = useContext(AuthContext);

  return (
    <div>
      <Head>
        <title>GadgetBot</title>
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/gadgetImage.jpg'
        ></link>
      </Head>
      <div className='fixed top-0 w-full z-10'>
        <Header />
      </div>
      <div className='mt-16 lg:mt-0'>
        <div className='bg-gradient-home mt-20 h-[150px] sm:h-[300px] lg:h-[600px] w-full bg-cover lg:relative lg:top-14' />
        <div className='lg:flex lg:justify-center m-0 p-0'>
          <div className='relative bottom-20 hidden lg:block'>
            <Image src='/HomeAppleImage.png' width={600} height={750} />
          </div>
          <div className='lg:ml-5 lg:w-1/2 w-11/12 m-auto text-center lg:m-0 lg:text-left lg:pt-20'>
            <h1 className='sm:text-5xl text-2xl font-bold my-5'>
              最適なガジェットを探します
            </h1>
            <h2 className='sm:text-2xl text-lg my-5 font-mono'>
              ガジェット買うのにどの機種買うか迷っていませんか？
            </h2>
            <p className='sm:text-lg font-serif tracking-wide leading-relaxed sm:w-3/4 w-full text-left m-auto lg:m-0'>
              こちらのアプリでは簡単な質問に答えて頂くだけて自分の最適なガジェットを見つけることができるアプリです。
              <br />
              主な対象者としましては、ガジェットにあまり詳しくない方に向けて作成しました。ガジェットに詳しい方は自分に最適なスペックなどわかるかと思うので、どれを買ったら良いか分からないけど、iPadなどが欲しいと思っているような人向けに作っております。
              <br />
              <br />
              対象のガジェットはiPhone、iPad、MacBookが対象となっております（iPhoneはまだ現在作成中です）。
              <br />
              他にも違うガジェットも診断して欲しいとのことでしたら、お問い合わせの方からお問い合わせください。
              <br />
              是非このアプリを使った感想や改善点なども教えてくださいね。
            </p>
          </div>
        </div>
        <div className='sm:mt-10 lg:mt-0 bg-[#e9e6df] py-20'>
          <h1 className='text-center sm:text-5xl text-2xl font-bold sm:mb-10 mb-5'>
            主な機能
          </h1>
          <div className='sm:flex sm:justify-center'>
            <div className='flex mx-5 my-5'>
              <p className='lg:text-3xl text-lg bg-white border rounded-[50%] lg:w-16 lg:h-16 w-9 h-9 lg:leading-[64px] leading-9 text-center text-gray-700 select-none'>
                ✔️
              </p>
              <div className='ml-3'>
                <h2 className='text-2xl mb-1'>チャットボット機能</h2>
                <p>
                  簡単な質問に答えるだけで自分の最適なものをチャットボットが教えてくれます
                  <br />
                  こちらの機能はユーザー登録しなくても使用することがでます。
                </p>
              </div>
            </div>
            <div className='flex mx-5 my-5'>
              <p className='lg:text-3xl text-lg bg-white border rounded-[50%] lg:w-16 lg:h-16 w-9 h-9 lg:leading-[64px] leading-9 text-center text-gray-700 select-none'>
                ✔️
              </p>
              <div className='ml-3'>
                <h2 className='text-2xl mb-1'>お気に入り登録機能</h2>
                <p>
                  診断されたガジェットをお気に入りに登録することができる。
                  <br />
                  お気に入りに登録することでマイページからいつでも確認することができます。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='sm:flex sm:relative sm:justify-center my-10'>
            <div className='mr-[25%] hidden sm:block'>
              <Image src='/ipadImage.jpg' width={700} height={750} />
            </div>
            <Box className='sm:absolute sm:top-[15%] sm:left-1/2 w-[80%] sm:w-[50%] lg:w-[40%] lg:top-[20%]  lg:left-[50%]'>
              <Card className='bg-[#e9e6df] sm:py-5 sm:px-8 p-3'>
                <CardContent>
                  <Typography variant='h4' component='div'>
                    iPad
                  </Typography>
                  <Typography
                    sx={{ fontSize: 20, marginTop: '12px' }}
                    color='text.secondary'
                    gutterBottom
                  >
                    iPadの診断をすることができます
                  </Typography>
                  <Typography sx={{ fontSize: 16 }} variant='body2'>
                    iPadの購入を検討している方は是非一度お試しください。
                    <br />
                    iPadが勉強にも使えPCのように使えるなど様々なところで活躍してますよね。タブレット会では現状iPadが一強になってます。皆さんも一度お試しください。生活に欠かせないアイテムになることになります。
                    <br />
                    <br />
                    整備品済み製品もこちらでは、対象となっているためすぐに購入ができない可能性もあるのでご了承ください。
                    <br />
                    整備品済み製品での在庫がない場合は家電量販店などにも安く手に入ることもあるめチェックして貰えると幸いです。
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    className='text-white bg-gray-700 hover:bg-gray-500'
                    onClick={() => router.push('/ipad')}
                  >
                    診断開始！
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </div>
          <div className='sm:flex sm:relative sm:justify-center my-10'>
            <div className='ml-[15%] hidden sm:block'>
              <Image src='/macBookImage.jpg' width={700} height={750} />
            </div>
            <Box className='sm:absolute lg:top-[20%] sm:top-[15%] sm:right-[50%] lg:w-[40%] sm:w-[50%] w-[80%] ml-auto'>
              <Card className='bg-[#e9e6df] py-5 px-6'>
                <CardContent>
                  <Typography variant='h4' component='div'>
                    MacBook
                  </Typography>
                  <Typography
                    sx={{ fontSize: 20, marginTop: '12px' }}
                    color='text.secondary'
                    gutterBottom
                  >
                    MacBookの診断をすることができます
                  </Typography>
                  <Typography sx={{ fontSize: 16 }} variant='body2'>
                    MavBookの購入を検討している方は是非一度お試しください。
                    <br />
                    MacBookは何といってもオシャレですよね。このシンプルで最高でデザインが私はたまらなく好きです。
                    <br />
                    M1チップの登場でMacBookはコスパ最強のPCとなりました。
                    <br />
                    <br />
                    整備品済み製品もこちらでは、対象となっているためすぐに購入ができない場合は家電量販店などでも安く販売させているかもしれないのでチェックしてみてください。
                    <br />
                    こちらはMacBookでノート型のPCのみ対象となっています。
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    className='text-white bg-gray-700 hover:bg-gray-500'
                    onClick={() => router.push('/mac')}
                  >
                    診断開始！
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </div>
          <div className='sm:flex sm:relative sm:justify-center my-10'>
            <div className='mr-[25%] hidden sm:block'>
              <Image src='/iphoneImage.jpg' width={700} height={750} />
            </div>
            <Box className='sm:absolute sm:top-[15%] sm:left-1/2 w-[80%] sm:w-[50%] lg:w-[40%] lg:top-[20%]  lg:left-[50%]'>
              <Card className='bg-[#e9e6df] py-5 px-8'>
                <CardContent>
                  <Typography variant='h4' component='div'>
                    iPhone
                  </Typography>
                  <Typography
                    sx={{ fontSize: 20, marginTop: '12px' }}
                    color='text.secondary'
                    gutterBottom
                  >
                    iPhoneの診断をすることができます
                  </Typography>
                  <Typography sx={{ fontSize: 16 }} variant='body2'>
                    iPhoneの購入を検討している方は是非一度お試しください。
                    <br />
                    iPhoneは特に最新機種買う人が多いですね。けど、本当にその最新の機種必要ですか？最近のiPhoneの進化はカメラの進化がほとんどで昔の機種でも全然現役で使えまよ。
                    <br />
                    <br />
                    iPhoneはキャリアなどで安く買えるチャンスなどたくさんあるので、その機会を使うと良いかもしれないです。
                    <br />
                    iPhoneの診断ページはまだ未完成のため、完成まで少々お待ちください。
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    className='text-white bg-gray-700 hover:bg-gray-500'
                    onClick={() => router.push('/iphone')}
                  >
                    診断開始！
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </div>
        </div>
        <div className='my-10'>
          {!isSignedIn && (
            <Link href='/signup' passHref>
              <div className='text-center'>
                <Button
                  variant='contained'
                  className='p-1 h-12 lg:w-1/4 sm:w-2/6 w-4/6 bg-gray-500 transition ease-in-out duration-300 hover:bg-gray-400 hover:-translate-y-1 hover:scale-110'
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
    </div>
  );
};

export default Home;
