import { Product } from 'lib/api/Entity/Product';
import { LikeRepository } from 'lib/api/repository/likeRepostiroy';
import { MacParam, MacRepository } from 'lib/api/repository/macRepository';
import { Footer } from 'lib/components/Footer';
import { Header } from 'lib/components/Header';
import { Loading } from 'lib/components/Loading';
import { ProductResultPage } from 'lib/components/ProductResultPage';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import { useEffect } from 'react';

interface Props {
  nextId: string;
  chips: string[];
  price: number;
  minSize: number;
  maxSize: number;
  maxMemory: number;
  thunderboltCount: number;
  appleSilicon: boolean | null;
  fanExistence: boolean | null;
  sdCardSlot: boolean | null;
  notch: boolean | null;
  wiFiSix: boolean | null;
}

const ChatResult: NextPage<Props> = (props) => {
  const [products, setProducts] = useState<Product[]>();
  const [likeProductIds, setLikeProductIds] = useState<number[]>([]);

  const fetchData = async () => {
    const macParam: MacParam = {
      price: props.price,
      appleSilicon:
        props.appleSilicon === null ? undefined : props.appleSilicon,
      minSize: props.minSize,
      maxSize: props.maxSize,
      fanExistence:
        props.fanExistence === null ? undefined : props.fanExistence,
      chips: props.chips,
      maxMemory: props.maxMemory,
      thunderboltCount: props.thunderboltCount,
      sdCardSlot: props.sdCardSlot === null ? undefined : props.sdCardSlot,
      notch: props.notch === null ? undefined : props.notch,
      wiFiSix: props.wiFiSix === null ? undefined : props.wiFiSix,
    };
    const products = await MacRepository.searchResProduct(macParam);
    const mostLowPriceProduct = products.reduce((previousValue, currentValue) =>
      previousValue.mostLowPrice < currentValue.mostLowPrice
        ? previousValue
        : currentValue
    );
    const likes = await LikeRepository.my();
    setLikeProductIds(likes.map((l) => l.productId));
    setProducts(props.nextId === 'end' ? [mostLowPriceProduct] : products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onClickLikeButton = async (id: number) => {
    if (likeProductIds.includes(id)) {
      await LikeRepository.delete(id);
      setLikeProductIds(likeProductIds.filter((productId) => productId !== id));
    } else {
      await LikeRepository.create(id);
      setLikeProductIds([...likeProductIds, id]);
    }
  };

  if (!products) return <Loading />;
  const mostLowPriceProduct = products.reduce((previousValue, currentValue) =>
    previousValue.mostLowPrice < currentValue.mostLowPrice
      ? previousValue
      : currentValue
  );
  return (
    <>
      <Head>
        <title>
          あなたのおすすめのMacBookは
          {props.nextId === 'end'
            ? mostLowPriceProduct.name
            : products.map((p) => p.name)}
          です
        </title>
      </Head>
      <div className='fixed top-0 w-full z-10'>
        <Header />
      </div>
      <ProductResultPage
        products={products}
        linkPath='/mac'
        likeProductIds={likeProductIds}
        onClickLikeButton={onClickLikeButton}
      />
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const nextId = query.nextId ? String(query.nextId) : '';
  const chips = query.chips ? String(query.chips).split(',') : [];
  const price = query.price ? Number(query.price) : 0;
  const minSize = query.minSize ? Number(query.minSize) : 0;
  const maxSize = query.maxSize ? Number(query.maxSize) : 0;
  const maxMemory = query.maxMemory ? Number(query.maxMemory) : 0;
  const thunderboltCount = query.thunderboltCount
    ? Number(query.thunderboltCount)
    : 0;
  const appleSilicon = query.appleSilicon
    ? String(query.appleSilicon).toLocaleLowerCase() === 'true'
    : null;
  const fanExistence = query.fanExistence
    ? String(query.fanExistence).toLocaleLowerCase() === 'true'
    : null;
  const sdCardSlot = query.sdCardSlot
    ? String(query.sdCardSlot).toLocaleLowerCase() === 'true'
    : null;
  const notch = query.notch
    ? String(query.notch).toLocaleLowerCase() === 'true'
    : null;
  const wiFiSix = query.wiFiSix
    ? String(query.wiFiSix).toLocaleLowerCase() === 'true'
    : null;

  return {
    props: {
      nextId,
      chips,
      price,
      minSize,
      maxSize,
      maxMemory,
      thunderboltCount,
      appleSilicon,
      fanExistence,
      sdCardSlot,
      notch,
      wiFiSix,
    },
  };
};

export default ChatResult;
