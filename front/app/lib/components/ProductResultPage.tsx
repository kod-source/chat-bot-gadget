import { Product } from 'lib/api/Entity/Product';
import React from 'react';
import { FC } from 'react';

interface Props {
  products: Product[];
}

export const ProductResultPage: FC<Props> = ({ products }) => {
  const singularProduct = products.length === 1;

  return (
    <div className='bg-blue-300 pt-36 pb-20'>
      <div className='bg-white border-2 border-black w-2/3 m-auto'>
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
              <div key={product.id.toLocaleString()} className='my-5'>
                <p>{product.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
