import {
  Avatar,
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
import gadgetImage from '../public/gadgetImage.jpg';
import macBookImage from '../public/macBookImage.jpg';
import iphoneImage from '../public/iphoneImage.jpg';
import ipadImage from '../public/ipadImage.jpg';
import { CardMessage } from 'lib/components/CardMessage';
import { Footer } from 'lib/components/Footer';
import Image from 'next/image';

const Home: NextPage = () => {
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
      <div className='mt-16'>
        <div className='bg-gradient-home h-[600px] w-full bg-cover' />
        {/* <div className='absolute top-[450px] left-[10%]'> */}
        <div className='absolute top-[450px] left-[30%] translate-x-[-50%]'>
          <Image src='/HomeAppleImage.png' width={600} height={750} />
        </div>
        <div className='relative left-[50%] top-5 h-[30rem] w-1/2 pb-10'>
          <h1 className='text-5xl font-bold my-5'>
            最適なガジェットを探します
          </h1>
          <h2 className='text-2xl my-5 font-mono'>
            ガジェット買うのにどの機種買うか迷っていませんか？
          </h2>
          <p className='text-lg font-serif tracking-wide leading-relaxed w-3/4'>
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
        <div className='mt-10 bg-[#e9e6df] py-20'>
          <h1 className='text-center text-5xl font-bold mb-10'>主な機能</h1>
          <div className='flex justify-center'>
            <div className='flex mx-5'>
              <p className='text-3xl bg-white border rounded-[50%] w-16 h-16 leading-[64px] text-center text-gray-700 select-none'>
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
            <div className='flex mx-5'>
              <p className='text-3xl bg-white border rounded-[50%] w-16 h-16 leading-[64px] text-center text-gray-700 select-none'>
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
          <div className='flex justify-center my-10'>
            <div className='mr-[25%]'>
              <Image src='/ipadImage.jpg' width={700} height={750} />
            </div>
            <Box className='absolute mt-44 left-[45%] w-[35%]'>
              <Card className='bg-[#e9e6df] py-5 px-8'>
                <CardContent>
                  <Typography variant='h4' component='div'>
                    iPad
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14, marginTop: '12px' }}
                    color='text.secondary'
                    gutterBottom
                  >
                    iPadの診断をすることができます
                  </Typography>
                  <Typography variant='body2'>
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
                <Link href='/ipad' passHref>
                  <CardActions>
                    <Button className='text-white bg-gray-700 hover:bg-gray-500'>
                      診断開始！
                    </Button>
                  </CardActions>
                </Link>
              </Card>
            </Box>
          </div>
          <div className='flex justify-center my-10'>
            <div className='ml-[15%]'>
              <Image src='/macBookImage.jpg' width={700} height={750} />
            </div>
            <Box className='absolute mt-44 right-[52%] w-[35%] '>
              <Card className='bg-[#e9e6df] py-5 px-6'>
                <CardContent>
                  <Typography variant='h4' component='div'>
                    MacBook
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14, marginTop: '12px' }}
                    color='text.secondary'
                    gutterBottom
                  >
                    MacBookの診断をすることができます
                  </Typography>
                  <Typography variant='body2'>
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
                <Link href='/mac' passHref>
                  <CardActions>
                    <Button className='text-white bg-gray-700 hover:bg-gray-500'>
                      診断開始！
                    </Button>
                  </CardActions>
                </Link>
              </Card>
            </Box>
          </div>
          <div className='flex justify-center my-10'>
            <div className='mr-[25%]'>
              <Image src='/iphoneImage.jpg' width={700} height={750} />
            </div>
            <Box className='absolute mt-44 left-[45%] w-[35%]'>
              <Card className='bg-[#e9e6df] py-5 px-8'>
                <CardContent>
                  <Typography variant='h4' component='div'>
                    iPhone
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14, marginTop: '12px' }}
                    color='text.secondary'
                    gutterBottom
                  >
                    iPhoneの診断をすることができます
                  </Typography>
                  <Typography variant='body2'>
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
                <Link href='/iphone' passHref>
                  <CardActions>
                    <Button className='text-white bg-gray-700 hover:bg-gray-500'>
                      診断開始！
                    </Button>
                  </CardActions>
                </Link>
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
