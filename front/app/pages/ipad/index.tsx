import { NextPage } from 'next';
import React, { useState } from 'react';
import Head from 'next/head';
import { Header } from 'lib/components/Header';
import { Footer } from 'lib/components/Footer';
import { Button } from '@mui/material';
import Image from 'next/image';
import { Answer, ChatState } from 'lib/interfaces';
import { Chats } from 'lib/components/Chats';
import ipadIconImage from 'public/ipadIcon.jpg';
import { useEffect } from 'react';
import { IpadNextId, selectIpadData } from 'lib/api/repository/ipadRepository';

const Ipad: NextPage = () => {
  const [startIpadBot, setStartIpadBot] = useState(false);
  const [chats, setChats] = useState<ChatState[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [nextId, setNextId] = useState<IpadNextId>('init');

  useEffect(() => {
    const ipadSelectData = selectIpadData(nextId);
    console.log(ipadSelectData);
    if (nextId === 'end') {
      alert('終了');
    } else {
      setChats((prevState) => [
        ...prevState,
        {
          question: ipadSelectData?.question,
          isQuestion: true,
        },
      ]);
      setAnswers(ipadSelectData?.answers || []);
    }
  }, [nextId]);
  const onSelectAnswer = (answer: Answer) => {
    setChats((prevState) => [
      ...prevState,
      { selectAnswer: answer.content, isQuestion: false },
    ]);
    setNextId(answer.nextId as IpadNextId);
  };

  return (
    <>
      <Head>
        <title>iPad</title>
      </Head>
      <div className='fixed top-0 w-full z-10'>
        <Header />
      </div>
      {startIpadBot ? (
        <Chats
          chats={chats}
          answers={answers}
          avatar={ipadIconImage.src}
          onSelectAnswer={(answer) => onSelectAnswer(answer)}
        />
      ) : (
        <div className='mt-40 text-center'>
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
          <div className='mt-3 mb-16'>
            <Button
              className='mx-2 my-1 sm:my-0 w-56 bg-yellow-600 text-white hover:bg-yellow-700 static p-4 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110'
              onClick={() => setStartIpadBot(true)}
            >
              [ はい ]
            </Button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Ipad;
