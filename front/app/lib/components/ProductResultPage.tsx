import { Product } from 'lib/api/Entity/Product';
import React from 'react';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AppRegistrationSharpIcon from '@mui/icons-material/AppRegistrationSharp';

interface Props {
  products: Product[];
  linkPath: string;
  likeProductIds: number[];
  isSignIn: boolean;
  onClickLikeButton: (id: number) => void;
}

export const ProductResultPage: FC<Props> = ({
  products,
  linkPath,
  likeProductIds,
  isSignIn,
  onClickLikeButton,
}) => {
  const singularProduct = products.length === 1;

  return (
    <div className='bg-blue-300 pt-36 pb-20'>
      <div className='bg-white border-2 border-black w-11/12 sm:w-5/6 lg:w-3/4 m-auto'>
        <div className='p-10 sm:p-14'>
          <div className='text-center text-xl sm:text-2xl lg:text-3xl'>
            <h1>結果がでました！</h1>
            <h1>
              {singularProduct
                ? 'あなたにおすすめの商品はこちらです！'
                : 'あなたのおすすめはこれらの商品です！'}
            </h1>
          </div>
          <div className='mt-5 lg:mt-10'>
            {products.map((product) => (
              <div key={product.id.toLocaleString()} className='my-5 lg:my-10'>
                <div className='lg:flex justify-center text-center'>
                  <Image
                    src={product.image}
                    width={400}
                    height={400}
                    alt='Product Image'
                  />
                  <div>
                    <h2 className='pt-5 text-center text-xl sm:text-3xl font-bold text-green-200 text-shadow-md'>
                      {product.name}
                    </h2>
                    <h3 className='text-center text-2xl sm:text-4xl my-5 sm:my-10 font-bold'>
                      価格
                    </h3>
                    <p className='text-center text-xl sm:text-3xl text-blue-500 font-bold'>
                      {product.mostLowPrice.toLocaleString()}円〜
                      {product.highestPrice.toLocaleString()}円　税込
                    </p>
                    <div className='flex justify-center my-2 sm:my-4'>
                      {isSignIn ? (
                        <p className='text-sm sm:text-xl'>
                          {likeProductIds.includes(product.id)
                            ? 'お気に入りから削除しますか？'
                            : 'お気に入りに追加しますか？'}
                          <IconButton
                            aria-label='add to favorites'
                            onClick={() => onClickLikeButton(product.id)}
                          >
                            <FavoriteIcon
                              fontSize='large'
                              className={
                                likeProductIds.includes(product.id)
                                  ? 'text-red-500'
                                  : ''
                              }
                            />
                          </IconButton>
                        </p>
                      ) : (
                        <div>
                          <p className='text-sm sm:text-xl my-2'>
                            ログインすることで商品をお気に入りに登録することができます
                          </p>
                          <Link href='/signup' passHref>
                            <Button
                              variant='contained'
                              className='p-1 h-12 w-56 bg-green-500 transition ease-in-out duration-300 hover:bg-green-400 hover:-translate-y-1 hover:scale-110'
                            >
                              <AppRegistrationSharpIcon />
                              無料ユーザー登録はこちら
                            </Button>
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className='mt-4 sm:mt-8 sm:flex sm:justify-center'>
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
                      <Link href={`${linkPath}/${product.id}`}>
                        <Button
                          variant='contained'
                          className='mx-2 my-1 sm:my-0 w-56 bg-green-200 text-white hover:bg-green-300 static p-4 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110'
                        >
                          商品の詳細はこちら
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='mt-2 sm:mt-5 sm:px-14 tracking-widest w-full lg:w-11/12 xl:w-/4 2xl:w-2/3 m-auto'>
                  {product.memo.split('\n').map((m) => (
                    <p key={m}>
                      {m}
                      <br />
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
