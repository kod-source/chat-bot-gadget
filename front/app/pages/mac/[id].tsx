import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
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
  const [state, setState] = useState<State>();

  const fetchData = async () => {
    const product = await ProductRepository.get(id);
    const mac = await MacRepository.get(product.id);
    const likes = await LikeRepository.my();
    const imageSwipers = await ImageSwiperRepository.showMac(mac.Id);
    const likeProductIds = likes.map((l) => l.productId);
    setState({ product, mac, likeProductIds, imageSwipers });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className='fixed top-0 w-full z-10'>
        <Header />
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

export default MacShow;
