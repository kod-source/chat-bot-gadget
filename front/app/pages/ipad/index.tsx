import { NextPage } from 'next';
import React, { useState } from 'react';
import Head from 'next/head';
import { Header } from 'lib/components/Header';
import { Footer } from 'lib/components/Footer';
import { Button } from '@mui/material';
import Image from 'next/image';
import { Answer, ChatState } from 'lib/interfaces';
import { Chats } from 'lib/components/Chats';
import { useEffect } from 'react';
import {
  IpadData,
  IpadNextId,
  IpadParam,
  IpadRepository,
} from 'lib/api/repository/ipadRepository';
import ipadIconImage from 'public/ipadIcon.jpg';
import { ChooseIpadParams } from 'lib/Function/ChooseIpadParams';
import { IpadService } from 'lib/api/Service/IpadService';
import { Product } from 'lib/api/Entity/Product';

const IpadPage: NextPage = () => {
  const [startIpadBot, setStartIpadBot] = useState(false);
  const [chats, setChats] = useState<ChatState[]>([
    {
      text: 'ご利用ありがとうございます。\nこんにちは。iPad君です。\n\nこれからいくつかの質問をし、あなたに最適はiPadをお探しします。',
      isQuestion: true,
    },
  ]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [nextId, setNextId] = useState<IpadNextId>('init');
  const [isChatLoading, setIsChatLoading] = useState<boolean>(true);
  const [ipadSearchParams, setIpadSearchParams] = useState<IpadParam | null>(
    null
  );
  const [searchProducts, setSearchProducts] = useState<Product[]>([]);

  const getSearchIpad = async (ipadSelectData: IpadData | null) => {
    if (ipadSearchParams) {
      const products = await IpadRepository.searchResProduct(ipadSearchParams);
      if (products.length === 0) {
        noneProductsSelectChats();
        setTimeout(() => {
          restartChats();
        }, 500);
        return;
      }
      setSearchProducts(products);
      if (products.length === 1) {
        endChats();
        return;
      }
      selectChatsWithAnswers(ipadSelectData);
    } else {
      selectChatsWithAnswers(ipadSelectData);
    }
  };

  useEffect(() => {
    if (!startIpadBot) return;
    const ipadSelectData = IpadService.selectData(nextId);
    getSearchIpad(ipadSelectData);
  }, [nextId, startIpadBot]);

  const selectChatsWithAnswers = (ipadSelectData: IpadData | null) => {
    setTimeout(() => {
      setChats((prevState) => [
        ...prevState,
        {
          text: ipadSelectData?.question || '',
          isQuestion: true,
        },
      ]);
      setAnswers(ipadSelectData?.answers || []);
      setIsChatLoading(false);
    }, 500);
  };

  const noneProductsSelectChats = () => {
    setTimeout(() => {
      setChats((prevState) => [
        ...prevState,
        {
          text: '申し訳ございません。\n相当のiPadは見つかりませんでした🥺\n\nお手数ですが、もう一度最初からやり直してください🙏',
          isQuestion: true,
        },
      ]);
    }, 500);
  };

  const restartChats = () => {
    setIsChatLoading(true);
    setTimeout(() => {
      setIpadSearchParams(null);
      setNextId('init');
    }, 500);
  };

  const onSelectAnswer = (answer: Answer) => {
    setIsChatLoading(true);
    setChats((prevState) => [
      ...prevState,
      { text: answer.content, isQuestion: false },
    ]);
    setNextId(answer.nextId as IpadNextId);
    ChooseIpadParams(answer, ipadSearchParams, setIpadSearchParams);
  };

  const endChats = () => {
    alert('終了');
  };

  return (
    <div className='min-h-[100vh] relative box-border'>
      <Head>
        <title>iPad</title>
      </Head>
      <div className='fixed top-0 w-full z-10'>
        <Header />
      </div>
      {startIpadBot ? (
        <>
          <Chats
            chats={chats}
            answers={answers}
            avatar={ipadIconImage.src}
            onSelectAnswer={(answer) => onSelectAnswer(answer)}
            isChatLoading={isChatLoading}
            ipadSearchParams={ipadSearchParams}
            restartChats={restartChats}
            endChats={endChats}
          />
        </>
      ) : (
        <div className='pt-24 text-center'>
          <h1 className='text-2xl sm:text-4xl font-bold text-center text-gray-500'>
            最適なiPadページへようこそ！
          </h1>
          <hr className='p-0 w-1/2 m-auto text-gray-500 mt-1 mb-3' />
          <Image
            src='/IpadPageImage.jpg'
            width={500}
            height={500}
            className='pointer-events-none'
          />
          <h3 className='text-lg sm:text-xl font-bold'>iPad</h3>
          <p className='text-yellow-700 my-3'>
            こちらはiPadを診断してくれるページになります
          </p>
          <p className='my-3'>早速スタートしますか？</p>
          <div className='mt-3'>
            <Button
              className='mx-2 my-1 sm:my-0 w-56 bg-yellow-600 text-white hover:bg-yellow-700 static p-4 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110'
              onClick={() => setStartIpadBot(true)}
            >
              [ はい ]
            </Button>
          </div>
        </div>
      )}
      <div className='absolute bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  );
};

export default IpadPage;
