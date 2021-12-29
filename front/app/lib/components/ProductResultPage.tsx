import { Product } from 'lib/api/Entity/Product';
import React from 'react';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface Props {
  products: Product[];
  linkPath: string;
  likeProductIds: number[];
  onClickLikeButton: (id: number) => void
}

export const ProductResultPage: FC<Props> = ({
  products,
  linkPath,
  likeProductIds,
  onClickLikeButton
}) => {
  const singularProduct = products.length === 1;

  return (
    <div className='bg-blue-300 pt-36 pb-20'>
      <div className='bg-white border-2 border-black w-3/4 m-auto'>
        <div className='p-14'>
          <div className='text-center text-3xl'>
            <h1>結果がでました！</h1>
            <h1>
              {singularProduct
                ? 'あなたにおすすめの商品はこちらです！'
                : 'あなたのおすすめはこれらの商品です！'}
            </h1>
          </div>
          <div className='mt-10'>
            {products.map((product) => (
              <div key={product.id.toLocaleString()} className='my-10'>
                <div className='flex'>
                  <Image
                    src={product.image}
                    width={400}
                    height={400}
                    alt='Product Image'
                  />
                  <div>
                    <h2 className='pt-5 text-center text-3xl font-bold text-green-200 text-shadow-md'>
                      {product.name}
                    </h2>
                    <h3 className='text-center text-4xl my-10 font-bold'>
                      価格
                    </h3>
                    <p className='text-center text-3xl text-blue-500 font-bold'>
                      {product.mostLowPrice.toLocaleString()}円〜
                      {product.highestPrice.toLocaleString()}円　税込
                    </p>
                    <div className='flex justify-center my-4'>
                      <p className='text-xl'>
                        {likeProductIds.includes(product.id) ? 'お気に入りから削除しますか？' : 'お気に入りに追加しますか？'}
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
                    </div>
                    <div className='mt-8 flex justify-center'>
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
                <div className='mt-5 px-14 tracking-widest'>
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
