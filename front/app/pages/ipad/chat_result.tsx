import { Product } from 'lib/api/Entity/Product';
import Head from 'next/head';
import { IpadParam, IpadRepository } from 'lib/api/repository/ipadRepository';
import { Footer } from 'lib/components/Footer';
import { Header } from 'lib/components/Header';
import { ProductResultPage } from 'lib/components/ProductResultPage';
import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { LikeRepository } from 'lib/api/repository/likeRepostiroy';

interface Props {
  nextId: string;
  price: number;
  minSize: number;
  maxSize: number;
  chips: string[];
  highPerformCamera: boolean | null;
  cleanDisplay: boolean | null;
  manyColors: boolean | null;
  typeC: boolean | null;
  speakerCount: number;
  faceId: boolean | null;
  centerFrame: boolean | null;
  dualSpeaker: boolean | null;
  highRefreshRate: boolean | null;
  thunderbolt: boolean | null;
  fiveG: boolean | null;
}

const chatResult: NextPage<Props> = (props) => {
  const [products, setProducts] = useState<Product[]>();
  const [likeProductIds, setLikeProductIds] = useState<number[]>([]);

  const fetchData = async () => {
    const ipadParam: IpadParam = {
      price: props.price,
      minSize: props.minSize,
      maxSize: props.maxSize,
      chips: props.chips,
      highPerformCamera:
        props.highPerformCamera === null ? undefined : props.highPerformCamera,
      cleanDisplay:
        props.cleanDisplay === null ? undefined : props.cleanDisplay,
      manyColors: props.manyColors === null ? undefined : props.manyColors,
      typeC: props.typeC === null ? undefined : props.typeC,
      speakerCount: props.speakerCount,
      faceId: props.faceId === null ? undefined : props.faceId,
      centerFrame: props.centerFrame === null ? undefined : props.centerFrame,
      dualSpeaker: props.dualSpeaker === null ? undefined : props.dualSpeaker,
      highRefreshRate:
        props.highRefreshRate === null ? undefined : props.highRefreshRate,
      thunderbolt: props.thunderbolt === null ? undefined : props.thunderbolt,
      fiveG: props.fiveG === null ? undefined : props.fiveG,
    };
    const products = await IpadRepository.searchResProduct(ipadParam);
    const mostLowPriceProduct = products.reduce((a, b) =>
      a.mostLowPrice < b.mostLowPrice ? a : b
    );
    const likes = await LikeRepository.my();
    setProducts(props.nextId === 'end' ? [mostLowPriceProduct] : products);
    setLikeProductIds(likes.map((l) => l.productId));
  };

  useEffect(() => {
    fetchData();
  }, [props]);

  const onClickLikeButton = async (id: number) => {
    if (likeProductIds.includes(id)) {
      await LikeRepository.delete(id);
      setLikeProductIds(likeProductIds.filter((productId) => productId !== id));
    } else {
      await LikeRepository.create(id);
      setLikeProductIds([...likeProductIds, id]);
    }
  };

  if (!products) return null;

  return (
    <>
      <Head>
        <title>あなたのおすすめのiPadは{products[0].name}</title>
      </Head>
      <div className='fixed top-0 w-full z-10'>
        <Header />
      </div>
      <ProductResultPage
        products={products}
        linkPath='/ipad'
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
  const price = query.price ? Number(query.price) : 0;
  const chips = query.chips ? String(query.chips).split(',') : [];
  const minSize = query.minSize ? Number(query.minSize) : 0;
  const maxSize = query.maxSize ? Number(query.maxSize) : 0;
  const cleanDisplay = query.cleanDisplay
    ? String(query.cleanDisplay).toLowerCase() === 'true'
    : null;
  const manyColors = query.manyColors
    ? String(query.manyColors).toLowerCase() === 'true'
    : null;
  const speakerCount = query.speakerCount ? Number(query.speakerCount) : 0;
  const highPerformCamera = query.highPerformCamera
    ? String(query.highPerformCamera).toLowerCase() === 'true'
    : null;
  const typeC = query.typeC
    ? String(query.typeC).toLowerCase() === 'true'
    : null;
  const faceId = query.faceId
    ? String(query.faceId).toLowerCase() === 'true'
    : null;
  const centerFrame = query.centerFrame
    ? String(query.centerFrame).toLowerCase() === 'true'
    : null;
  const dualSpeaker = query.dualSpeaker
    ? String(query.dualSpeaker).toLowerCase() === 'true'
    : null;
  const highRefreshRate = query.highRefreshRate
    ? String(query.highRefreshRate).toLowerCase() === 'true'
    : null;
  const thunderbolt = query.thunderbolt
    ? String(query.thunderbolt).toLowerCase() === 'true'
    : null;
  const fiveG = query.fiveG
    ? String(query.fiveG).toLowerCase() === 'true'
    : null;

  return {
    props: {
      nextId,
      price,
      chips,
      minSize,
      maxSize,
      cleanDisplay,
      manyColors,
      speakerCount,
      highPerformCamera,
      typeC,
      faceId,
      centerFrame,
      dualSpeaker,
      highRefreshRate,
      thunderbolt,
      fiveG,
    },
  };
};

export default chatResult;
