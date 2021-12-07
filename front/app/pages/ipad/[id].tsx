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

interface State {
  product: Product;
  ipad: Ipad;
}

interface Props {
  id: number;
}

const IpadShow: NextPage<Props> = ({ id }) => {
  const [state, setState] = useState<State>();

  const fetchData = async () => {
    const product = await ProductRepository.get(id);
    const ipad = await IpadRepository.get(id);
    setState({ product, ipad });
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!state) return <Loading />;
  const { product, ipad } = state;
  return (
    <>
      <Head>
        <title>syousai</title>
      </Head>
      <div className='fixed top-0 w-full z-10'>
        <Header />
      </div>
      <h1 className='mt-36'>詳細画面です。</h1>
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
