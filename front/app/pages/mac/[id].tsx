import { GetServerSideProps, NextPage } from 'next';
import React, { useContext } from 'react';
import Head from 'next/head';
import { Header } from 'lib/components/Header';
import { Footer } from 'lib/components/Footer';
import { Product } from 'lib/api/Entity/Product';
import { Mac } from 'lib/api/Entity/Mac';
import { ImageSwiper } from 'lib/api/Entity/ImageSwiper';
import { useState } from 'react';
import { useEffect } from 'react';
import { ProductRepository } from 'lib/api/repository/productRepository';
import { MacRepository } from 'lib/api/repository/macRepository';
import { LikeRepository } from 'lib/api/repository/likeRepostiroy';
import { ImageSwiperRepository } from 'lib/api/repository/imageSwiperRepository';
import { Loading } from 'lib/components/Loading';
import { Button } from '@mui/material';
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { ImageSwiperComponent } from 'lib/components/ImageSwiperComponent';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GppBadIcon from '@mui/icons-material/GppBad';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { AuthContext } from 'pages/_app';
import { AlertState } from 'lib/interfaces';
import { AlertMessage } from 'lib/components/AlertMessage';

interface Props {
  id: number;
}

interface State {
  product: Product;
  mac: Mac;
  likeProductIds: number[];
  imageSwipers: ImageSwiper[];
}

const MacShow: NextPage<Props> = ({ id }) => {
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
    const mac = await MacRepository.get(product.id);
    const imageSwipers = await ImageSwiperRepository.showMac(mac.Id);
    if (isSignedIn) {
      const likes = await LikeRepository.my();
      const likeProductIds = likes.map((l) => l.productId);
      setState({ product, mac, likeProductIds, imageSwipers });
    }
    setState({
      product: product,
      mac: mac,
      likeProductIds: [],
      imageSwipers: imageSwipers,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!state) return <Loading />;
  const { product, mac, likeProductIds, imageSwipers } = state;

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
              <p>{mac.size} インチ</p>
            </div>
            <div className='flex my-1'>
              <p className='w-32'>重量</p>
              <p>{mac.weight} kg</p>
            </div>
          </div>
          <div className='mt-8'>
            <h1 className='text-3xl border-b-2 pb-3 font-bold'>主な特徴</h1>
            <div className='text-center w-1/2 lg:w-1/4'>
              <p className='my-5'>
                最大
                <br />
                <span className='text-4xl font-bold'>{mac.maxCpuCore}コア</span>
                <br />
                のCPU
              </p>
              <p className='my-5'>
                最大
                <br />
                <span className='text-4xl font-bold'>{mac.maxGpuCore}コア</span>
                <br />
                のGPU
              </p>
              <p className='my-5'>
                最大
                <br />
                <span className='text-4xl font-bold'>{mac.maxMemory}GB</span>
                <br />の{mac.appleSilicon && 'ユニファイド'}メモリ
              </p>
              <p className='my-5'>
                最大
                <br />
                <span className='text-4xl font-bold'>{mac.maxStorage}GB</span>
                <br />
                のストレージ
              </p>
              <p className='my-5'>
                最大
                <br />
                <span className='text-4xl font-bold'>
                  {mac.batteryDrivenTime}時間
                </span>
                <br />
                駆動するバッテリー
              </p>
              <p className='my-5'>
                <FingerprintIcon fontSize='large' />
                <p>TouchId</p>
              </p>
            </div>
          </div>
          <div className='mt-8'>
            <h1 className='text-3xl border-b-2 pb-3 font-bold'>メモリ</h1>
            <div className='mt-4'>
              {mac.memorys.map((m) => (
                <p key={m}>{m}</p>
              ))}
            </div>
          </div>
          <div className='mt-8'>
            <h1 className='text-3xl border-b-2 pb-3 font-bold'>ストレージ</h1>
            <div className='mt-4'>
              {mac.storages.map((s) => (
                <p key={s}>{s}</p>
              ))}
            </div>
          </div>
          <div className='mt-8'>
            <h1 className='text-3xl border-b-2 pb-2 font-bold'>カメラ</h1>
            <div className='mt-4'>
              <p>{mac.inCameraPixel}p FaceTime HDカメラ</p>
              {mac.appleSilicon && (
                <p>
                  コンピュテーショナルビデオを活用した
                  <br />
                  先進的な画像信号プロセッサ
                </p>
              )}
            </div>
          </div>
          <div className='mt-8'>
            <h1 className='text-3xl border-b-2 pb-2 font-bold'>ポート</h1>
            <div className='mt-4'>
              <p>Thunderbolt / USB 4ポート x {mac.thunderboltCount}</p>
              <p>{mac.hdmiPort ? 'HDMIポート' : '—'}</p>
              <p>{mac.sdCardSlot ? 'SDXCカードスロット' : '—'}</p>
            </div>
          </div>
          <div className='mt-8'>
            <h1 className='text-3xl border-b-2 font-bold'>ワイヤレス</h1>
            <div className='mt-4'>
              <p>802.11ax Wi-Fi {mac.wiFiSix && '6'}</p>
              <p>Bluetooth 5.0ワイヤレステクノロジー</p>
            </div>
          </div>
          <div className='mt-8'>
            <h1 className='text-xl mt-3 font-bold'>この商品について</h1>
            <div>
              <ul className='list-disc ml-6'>
                <li>
                  {mac.appleSilicon ? 'AppleSiliconチップ' : 'Intelチップ'}
                </li>
                <li>{mac.fanExistence ? 'ファン搭載' : 'ファンレスモデル'}</li>
                <li>TouchBar{mac.touchBar ? '搭載' : '非搭載'}</li>
                <li>
                  MiniLEDディスプレイ{mac.miniLedDisplay ? '搭載' : '非搭載'}
                </li>
                <li>
                  リフレッシュレート{mac.proMotionDisplay ? '120Hz' : '60Hz'}
                </li>
                <li>{mac.powerAdapter}W USB-C電源アダプタ</li>
                {show && (
                  <>
                    {mac.notch && <li>ノッチあり</li>}
                    <li>{mac.wiFiSix ? 'WiFi 6対応' : 'WiFi 6非対応'}</li>
                    <li>
                      SDカードスロット{mac.sdCardSlot ? '搭載' : '非搭載'}
                    </li>
                    <li>HDMIポート{mac.hdmiPort ? '搭載' : '非搭載'}</li>
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

export default MacShow;
