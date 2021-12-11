import { Footer } from 'lib/components/Footer';
import { Header } from 'lib/components/Header';
import { NextPage, GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Product } from 'lib/api/Entity/Product';
import { Ipad } from 'lib/api/Entity/Ipad';
import { Loading } from 'lib/components/Loading';
import { IpadRepository } from 'lib/api/repository/ipadRepository';
import { ProductRepository } from 'lib/api/repository/productRepository';
import { Button, CardMedia } from '@mui/material';
import Link from 'next/link';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { LikeRepository } from 'lib/api/repository/likeRepostiroy';
import GppBadIcon from '@mui/icons-material/GppBad';

interface State {
  product: Product;
  ipad: Ipad;
}

interface Props {
  id: number;
}

const IpadShow: NextPage<Props> = ({ id }) => {
  const [state, setState] = useState<State>();
  const [show, setShow] = useState(false);
  const [likeProductIds, setLikeProductIds] = useState<number[]>([]);

  const fetchData = async () => {
    const product = await ProductRepository.get(id);
    const ipad = await IpadRepository.get(id);
    const likes = await LikeRepository.my();
    setState({ product, ipad });
    setLikeProductIds(likes.map((like) => like.productId));
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!state) return <Loading />;
  const { product, ipad } = state;

  const addLikeVButton = async () => {
    await LikeRepository.create(product.id);
    fetchData();
  };

  const deleteLikeButton = async () => {
    await LikeRepository.delete(product.id);
    fetchData();
  };
  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <div className='fixed top-0 w-full z-10'>
        <Header />
      </div>
      <div className='my-28 lg:flex'>
        <CardMedia
          component='img'
          className='lg:h-[500px] lg:w-[500px] lg:ml-[5%]'
          image={product.image}
          alt='product_image'
        />
        <div className='ml-3'>
          <h1 className='font-bold mt-3 lg:m-0 text-lg sm:text-2xl lg:text-4xl border-b-4 pb-3'>
            {product.name}
          </h1>
          <div className='mt-3 border-b-4 pb-3'>
            {product.memo.split(`\n`).map((m) => (
              <p>
                {m}
                <br />
              </p>
            ))}
          </div>
          <p className='text-lg sm:text-xl lg:text-2xl font-bold my-5 lg:my-10 ml-5 lg:ml-10'>
            <span className='text-red-600'>価格：</span>
            {product.mostLowPrice.toLocaleString()}円 〜
            {product.highestPrice.toLocaleString()}円　税込
          </p>
          <div className='sm:flex'>
            <Link href={product.url}>
              <a target='_blank'>
                <Button
                  variant='contained'
                  className='mx-2 my-1 sm:my-0 w-56 static p-4 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110'
                >
                  <ShoppingCartIcon />
                  商品購入ページはこちら
                </Button>
              </a>
            </Link>
            {likeProductIds.includes(product.id) ? (
              <Button
                className='mx-2 my-1 sm:my-0 w-56 bg-red-600 text-white hover:bg-red-700 static p-4 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110'
                onClick={() => deleteLikeButton()}
              >
                <GppBadIcon />
                お気に入りから削除
              </Button>
            ) : (
              <Button
                className='mx-2 my-1 sm:my-0 w-56 bg-red-500 text-white hover:bg-red-600 static p-4 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110'
                onClick={() => addLikeVButton()}
              >
                <FavoriteIcon />
                お気に入りに追加
              </Button>
            )}
          </div>
          <div className='mt-7 border-b-4 pb-3'>
            <div className='flex my-1'>
              <p className='w-32'>ブランド</p>
              <p>Apple(アップル)</p>
            </div>
            <div className='flex my-1'>
              <p className='w-32'>画面サイズ</p>
              <p>{ipad.screenSize} インチ</p>
            </div>
            <div className='flex my-1'>
              <p className='w-32'>重量</p>
              <p>{ipad.weight} g</p>
            </div>
          </div>
          <h1 className='mt-3 text-xl font-bold'>この商品について</h1>
          <ul className='list-disc ml-6'>
            <li>{ipad.chip}チップ</li>
            <li>
              セキュア認証とApple Pay のための
              {ipad.faceId ? 'Face Id' : 'Touch Id'}
            </li>
            <li>Apple Pencil(第2世代)に{ipad.pencilTwo ? '対応' : '非対応'}</li>
            <li>デュアルスピーカに{ipad.dualSpeaker ? '対応' : '非対応'}</li>
            <li>{ipad.typeC ? 'USB Type-C' : 'Lightning端子'}搭載</li>
            <li>
              {ipad.cleanDisplay
                ? '美しいLiquid Retinaディスプレイ搭載'
                : 'Retinaディスプレイ搭載'}
            </li>
            {show && (
              <>
                {ipad.smartConnector && (
                  <li>アクセサリのためのSmart Keyboardなどに対応</li>
                )}
                {ipad.thunderbolt && (
                  <li>
                    高速な外付けストレージ、ディスプレイ、ドックに接続できるThunderbolt
                  </li>
                )}
                <li>
                  リフレッシュレート{ipad.highRefreshRate ? '120Hz' : '60Hz'}
                </li>
                <li>スピーカ数:{ipad.speakerCount}つ</li>
                <li>
                  センターフレームに{ipad.centerFrame ? '対応' : '非対応'}
                </li>
                <li>高速通信できる5Gに{ipad.fiveG ? '対応' : '非対応'}</li>
                {ipad.highPerformCamera && (
                  <li>超広角カメラやLiDARスキャナ搭載</li>
                )}
                <li>原産国:中国</li>
              </>
            )}
          </ul>
          <p onClick={() => setShow((prevState) => !prevState)}>
            {show ? (
              <div className='flex cursor-pointer'>
                <ExpandLessIcon className='hover:opacity-70' />
                <div className='text-blue-500 hover:text-red-400 hover:border-b-2 border-red-400 p-0 m-0'>
                  表示件数の減らす
                </div>
              </div>
            ) : (
              <div className='flex cursor-pointer hover:opacity-70'>
                <ExpandMoreIcon />
                <div className='text-blue-500 hover:text-red-400 hover:border-b-2 border-red-400 p-0 m-0'>
                  表示件数の増やす
                </div>
              </div>
            )}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
  return {
    props: {
      id: Number(params?.id),
    },
  };
};

export default IpadShow;
