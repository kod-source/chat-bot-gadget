import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  Typography,
} from '@mui/material';
import { Footer } from 'lib/components/Footer';
import { Header } from 'lib/components/Header';
import { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { AuthContext } from 'pages/_app';
import React, { FC, useContext, useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { AvatarModal } from 'lib/components/AvatarModal';
import { EditUserModal } from 'lib/components/EditUserModal';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { NonLoginPage } from 'lib/components/NonLoginPage';
import { ProductRepository } from 'lib/api/repository/productRepository';
import { Product } from 'lib/api/Entity/Product';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { LikeRepository } from 'lib/api/repository/likeRepostiroy';
import LabelIcon from '@mui/icons-material/Label';
import { detailUrl } from 'lib/Function/DerailUrl';
import Image from 'next/image';

const ProductComponent: FC<{ product: Product }> = ({ product }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(true);

  const onClickLikeButton = async (product: Product) => {
    if (like) {
      await LikeRepository.delete(product.id);
    } else {
      await LikeRepository.create(product.id);
    }
    setLike((prevState) => !prevState);
  };
  return (
    <Card
      sx={{ maxWidth: 345 }}
      key={product.id}
      className='m-auto lg:mx-8 my-10 sm:my-16 lg:my-0 h-2/3'
    >
      <Link href={detailUrl(product)}>
        <CardHeader
          className='h-20 cursor-pointer hover:opacity-70'
          title={product.name}
        />
      </Link>
      <Link href={detailUrl(product)}>
        <Image
          src={product.image}
          width={400}
          height={400}
          className='cursor-pointer hover:opacity-70'
          alt='Product Image'
        />
      </Link>
      <CardContent>
        <Typography variant='body2' className='text-lg font-semibold'>
          {product.mostLowPrice.toLocaleString()}円 〜{' '}
          {product.highestPrice.toLocaleString()}円
        </Typography>
        <Link href={product.url}>
          <a target='_blank'>
            <div className='text-left my-2'>
              <Button
                variant='contained'
                className='static p-2 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110'
              >
                商品購入ページはこちら
              </Button>
            </div>
          </a>
        </Link>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label='add to favorites'
          onClick={() => onClickLikeButton(product)}
        >
          <FavoriteIcon className={like ? 'text-red-500' : ''} />
        </IconButton>
        <IconButton
          aria-label='show expand'
          className='ml-auto'
          onClick={() => setExpanded((prevState) => !prevState)}
        >
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>商品説明:</Typography>
          <Typography paragraph>
            {product.memo.split(`\n`).map((m) => (
              <p>
                {m}
                <br />
              </p>
            ))}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const UserProfile: NextPage = () => {
  const { user, setUser, isSignedIn } = useContext(AuthContext);
  const [showAvatarModal, setShowAvatarModal] = useState<boolean>(false);
  const [showEditUserModal, setShowEditUserModal] = useState<boolean>(false);
  const [likeProducts, setLikeProducts] = useState<Product[]>([]);

  const fetchData = async () => {
    const likeProducts = await ProductRepository.getLikeProducts();
    setLikeProducts(likeProducts);
  };
  const sliceLikeProducts: Product[][] = [];
  for (let index = 0; index < (likeProducts?.length as number) / 3; index++) {
    if (!likeProducts) return null;
    sliceLikeProducts.push(likeProducts?.slice(index * 3, (index + 1) * 3));
  }

  useEffect(() => {
    if (isSignedIn) fetchData();
  }, [isSignedIn]);

  return (
    <div>
      <Head>
        <title>マイページ</title>
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href={user ? user.avatar?.url : '/gadgetImage.jpg'}
        ></link>
      </Head>
      <div className='fixed top-0 w-full z-10'>
        <Header />
      </div>
      {isSignedIn ? (
        <>
          <div className='bg-gray-200'>
            <h1 className='mt-16 text-center font-bold font-mono text-4xl pt-10'>
              マイページ
            </h1>
            <div className='lg:flex lg:justify-center py-16'>
              <Avatar
                className='hover:opacity-70 cursor-pointer m-auto lg:mx-1'
                sx={{ width: 200, height: 200 }}
                alt='user image'
                src={user?.avatar?.url}
                onClick={() => setShowAvatarModal(true)}
              />
              <div className='lg:mx-20 m-auto w-10/12 sm:w-6/12 lg:w-3/12'>
                <p className='my-4'>ニックネーム　：{user?.name}</p>
                <p className='my-4'>メールアドレス：{user?.email}</p>
                <p className='my-4'>
                  メモ：
                  {user?.memo?.split('\n').map((m) => (
                    <p>
                      {m}
                      <br />
                    </p>
                  ))}
                </p>
                <p className='my-4 opacity-70 text-gray-500'>
                  <DateRangeIcon />
                  {user?.createdAt
                    ? DateTime.fromJSDate(user?.createdAt).toFormat(
                        'yyyy年MM月dd日'
                      )
                    : ''}
                  にアカウントを作成しています
                </p>
                <div className='text-center lg:text-left'>
                  <Button
                    variant='contained'
                    className='my-4 p-2 transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110'
                    onClick={() => setShowEditUserModal(true)}
                  >
                    プロフィールの編集
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className='my-8'>
            <div className='flex justify-center text-center my-8 text-3xl font-mono'>
              <h1>お気に入り一覧</h1>
              <LabelIcon className='pt-1' fontSize='large' color='primary' />
            </div>
            {likeProducts.length === 0 ? (
              <div className='text-center my-28 text-xl text-gray-600'>
                <p className='my-1'>お気に入りしている商品はありません</p>
                <p className='my-1'>商品を診断し、お気に入り登録しよう！</p>
                <p className='my-1'>
                  いつでもマイページからお気に入り商品を確認することができます！
                </p>
              </div>
            ) : (
              <div className='m-auto'>
                {sliceLikeProducts.map((Products) => (
                  <div className='lg:mb-16 lg:flex lg:justify-center'>
                    {Products?.map((p) => (
                      <ProductComponent product={p} />
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        <NonLoginPage />
      )}
      {isSignedIn ? (
        <Footer />
      ) : (
        <div className='absolute bottom-0 w-full'>
          <Footer />
        </div>
      )}
      <AvatarModal
        open={showAvatarModal}
        onClose={() => setShowAvatarModal(false)}
        image={user?.avatar?.url || ''}
      />
      {user && (
        <EditUserModal
          open={showEditUserModal}
          onClose={() => setShowEditUserModal(false)}
          user={user}
          setUser={setUser}
          setShowEditUserModal={setShowEditUserModal}
        />
      )}
    </div>
  );
};

export default UserProfile;
