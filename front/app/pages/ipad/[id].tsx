import { Footer } from 'lib/components/Footer';
import { Header } from 'lib/components/Header';
import { NextPage, GetServerSideProps } from 'next';
import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import { Product } from 'lib/api/Entity/Product';
import { Ipad } from 'lib/api/Entity/Ipad';
import { Loading } from 'lib/components/Loading';
import { IpadRepository } from 'lib/api/repository/ipadRepository';
import { ProductRepository } from 'lib/api/repository/productRepository';
import { Button } from '@mui/material';
import Link from 'next/link';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { LikeRepository } from 'lib/api/repository/likeRepostiroy';
import GppBadIcon from '@mui/icons-material/GppBad';
import { ImageSwiperComponent } from 'lib/components/ImageSwiperComponent';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ImageSwiper } from 'lib/api/Entity/ImageSwiper';
import { ImageSwiperRepository } from 'lib/api/repository/imageSwiperRepository';
import BoltIcon from '@mui/icons-material/Bolt';
import FiveGIcon from '@mui/icons-material/FiveG';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import { AuthContext } from 'pages/_app';
import { AlertState } from 'lib/interfaces';
import { AlertMessage } from 'lib/components/AlertMessage';

interface State {
  product: Product;
  ipad: Ipad;
  likeProductIds: number[];
  imageSwipers: ImageSwiper[];
}

interface Props {
  id: number;
}

const IpadShow: NextPage<Props> = ({ id }) => {
  const { isSignedIn } = useContext(AuthContext);
  const [state, setState] = useState<State>();
  const [show, setShow] = useState(false);
  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    type: 'info',
    message: '',
  });

  const fetchData = async () => {
    const product = await ProductRepository.get(id);
    const ipad = await IpadRepository.get(id);
    const imageSwipers = await ImageSwiperRepository.showIpad(ipad.id);
    if (isSignedIn) {
      const likes = await LikeRepository.my();
      const likeProductIds = likes.map((l) => l.productId);
      setState({ product, ipad, likeProductIds, imageSwipers });
    } else {
      setState({
        product: product,
        ipad: ipad,
        likeProductIds: [],
        imageSwipers: imageSwipers,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!state) return <Loading />;
  const { product, ipad, likeProductIds, imageSwipers } = state;

  const addLikeVButton = async () => {
    if (isSignedIn) {
      await LikeRepository.create(product.id);
      setState({ ...state, likeProductIds: [...likeProductIds, product.id] });
    } else {
      setAlertState({
        open: true,
        type: 'warning',
        message: 'ログインすることで商品をお気に入りに登録することができます',
      });
    }
  };

  const deleteLikeButton = async () => {
    if (isSignedIn) {
      await LikeRepository.delete(product.id);
      setState({
        ...state,
        likeProductIds: likeProductIds.filter(
          (productId) => productId !== product.id
        ),
      });
    }
  };
  return (
    <>
      <Head>
        <title>{product.name}</title>
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href={product.image}
        ></link>
      </Head>
      <div className='fixed top-0 w-full z-10'>
        <Header />
      </div>
      <div className='my-28 lg:flex'>
        <div className='w-full lg:w-1/2'>
          <ImageSwiperComponent imageSwipers={imageSwipers} />
        </div>
        <div className='mx-5 lg:mx-16'>
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
          <div className='mt-8'>
            <h1 className='text-3xl border-b-2 pb-3 font-bold'>主な特徴</h1>
            <div className='text-center w-2/3 lgj:w-1/3'>
              <p className='my-5'>
                <span className='text-4xl font-bold'>
                  {ipad.screenSize}インチ
                </span>
                <br />
                {ipad.cleanDisplay && 'Liquid'} Retina{' '}
                {ipad.chip === 'M1' && 'XDR'}ディスプレイ
                <br />
                {ipad.highRefreshRate && 'ProMotionテクノロジーと'}
                True Tone
              </p>
              <p className='my-5'>
                <BoltIcon fontSize='large' />
                <p>
                  {ipad.typeC
                    ? ipad.thunderbolt
                      ? 'Thunderbolt / USB 4対応のUSB-Cコネクタ'
                      : 'USB-Cコネクタ'
                    : 'Lightningコネクタ'}
                </p>
              </p>
              <p className='my-5'>
                {ipad.fiveG ? (
                  <FiveGIcon fontSize='large' />
                ) : (
                  <ConnectWithoutContactIcon fontSize='large' />
                )}
                <p>
                  {ipad.fiveG
                    ? 'ダウンロードとストリーミングは超高速'
                    : '4G LTE携帯電話通信'}
                </p>
              </p>
              <p className='my-5'>
                <BorderColorIcon fontSize='large' />
                <p>
                  Apple Pencil（{ipad.pencilTwo ? '第2世代' : '第1世代'}
                  ）に対応
                </p>
              </p>
              <p className='my-5'>
                {ipad.smartConnector ? (
                  <KeyboardHideIcon fontSize='large' />
                ) : (
                  <KeyboardIcon fontSize='large' />
                )}
                <p>
                  {ipad.smartConnector
                    ? ipad.cleanDisplay
                      ? 'Magic KeyboardとSmart Keyboard Folioに対応'
                      : 'Smart Keyboardに対応'
                    : 'Bluetoothキーボードに対応'}
                </p>
              </p>
            </div>
          </div>
          <div className='mt-8'>
            <h1 className='text-3xl border-b-2 font-bold'>セキュア認証</h1>
            <div className='mt-4'>
              <p>{ipad.faceId ? 'Face ID' : 'Touch ID'}</p>
              <p>
                {ipad.faceId
                  ? 'TrueDepthカメラによる顔認識の有効化'
                  : ipad.cleanDisplay
                  ? 'トップボタンに内蔵された指紋認証センサー'
                  : 'ホームボタンに内蔵された指紋認証センサー'}
              </p>
            </div>
          </div>
          <div className='mt-8'>
            <h1 className='text-3xl border-b-2 font-bold'>SIMカード</h1>
            <div className='mt-4'>
              <p>
                nano-SIM
                <br />
                （Apple SIMに対応）
              </p>
              <p>eSIM</p>
            </div>
          </div>
          <div className='mt-8'>
            <h1 className='text-3xl border-b-2 font-bold'>コネクタ</h1>
            <div className='mt-4'>
              <p>
                {ipad.typeC
                  ? ipad.thunderbolt
                    ? 'Thunderbolt / USB 4ポート'
                    : 'USB-C'
                  : 'Lightning'}
              </p>
              <p>
                {ipad.smartConnector
                  ? `Smart Connector${ipad.cleanDisplay && '(裏面)'}`
                  : '—'}
              </p>
            </div>
          </div>
          <div className='mt-8'>
            <h1 className='text-3xl border-b-2 font-bold'>センサー</h1>
            <div className='mt-4'>
              <p>{ipad.faceId ? 'Face ID' : 'Touch ID'}</p>
              <p>{ipad.highPerformCamera ? 'LiDARスキャナ' : '—'}</p>
              <p>3軸ジャイロ</p>
              <p>加速度センサー</p>
              <p>気圧計</p>
              <p>環境光センサー</p>
            </div>
          </div>
          <h1 className='mt-6 text-xl font-bold'>この商品について</h1>
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
      <AlertMessage
        open={alertState.open}
        handleClose={() => setAlertState({ ...alertState, open: false })}
        type={alertState.type}
        message={alertState.message}
      />
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
