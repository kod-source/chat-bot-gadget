import { Button } from '@mui/material';
import { Footer } from 'lib/components/Footer';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { ChatState } from 'lib/interfaces';
import {
  MacAnswer,
  MacData,
  MacNextId,
  MacParam,
  MacRepository,
} from 'lib/api/repository/macRepository';
import { useEffect } from 'react';
import { MacService } from 'lib/api/Service/macService';
import { useRouter } from 'next/dist/client/router';
import { Chats } from 'lib/components/Chats';
import MacIconImage from 'public/MacIconImage.jpg';
import { ChooseMacParams } from 'lib/Function/ChooseMacParams';

interface State {
  chats: ChatState[];
  answers: MacAnswer[];
  nextId: MacNextId;
  isChatLoading: boolean;
}

const Mac: NextPage = () => {
  const router = useRouter();
  const [startMacBot, setStartMacBot] = useState(false);
  const [state, setState] = useState<State>({
    chats: [
      {
        text: 'ご利用ありがとうございます。\nこんにちは。Mac君です。\n\nこれからいくつかの質問をし、あなたに最適なMacBookをお探しします。',
        isQuestion: true,
      },
    ],
    answers: [],
    nextId: 'init',
    isChatLoading: true,
  });
  const [macSearchParam, setMacSearchParam] = useState<MacParam | null>(null);

  const getSearchMac = async (macSelectData: MacData | null) => {
    if (macSearchParam) {
      // ここは次に実装する
      const products = []
      if (products.length === 0) {
        noneProductsSelectChats();
        setTimeout(() => {
          restartChats();
        }, 500);
        return;
      }
      if (products.length === 1 || state.nextId === 'end') {
        endChats();
        return;
      }
      selectChatsWithAnswers(macSelectData);
    } else {
      selectChatsWithAnswers(macSelectData);
    }
  };

  useEffect(() => {
    if (!startMacBot) return;
    const macSelectData = MacService.selectData(state.nextId);
    getSearchMac(macSelectData);
  }, [state.nextId, startMacBot]);

  const selectChatsWithAnswers = (macSelectData: MacData | null) => {
    setTimeout(() => {
      setState({
        ...state,
        chats: [
          ...state.chats,
          { text: macSelectData?.question || '', isQuestion: true },
        ],
        answers: macSelectData?.answers || [],
        isChatLoading: false,
      });
    }, 500);
  };

  const noneProductsSelectChats = () => {
    setTimeout(() => {
      setState({
        ...state,
        chats: [
          ...state.chats,
          {
            text: '申し訳ございません。\n相当のiPadは見つかりませんでした🥺\n\nお手数ですが、もう一度最初からやり直してください🙏',
            isQuestion: true,
          },
        ],
      });
    }, 500);
  };

  const restartChats = () => {
    setTimeout(() => {
      setState({ ...state, isChatLoading: true, nextId: 'init' });
      setMacSearchParam(null);
    }, 500);
  };

  const onSelectAnswer = (answer: MacAnswer) => {
    setState({
      ...state,
      isChatLoading: true,
      chats: [...state.chats, { text: answer.content, isQuestion: false }],
      nextId: answer.nextId as MacNextId,
    });
    ChooseMacParams(answer, macSearchParam, setMacSearchParam);
  };

  const endChats = () => {
    if (!macSearchParam) return null;
    const urlSearchParams = MacService.appendUrlSearchParams(
      macSearchParam,
      state.nextId
    );
    router.push(`/mac/chat_result?${urlSearchParams?.toString()}`);
  };

  const { chats, answers, isChatLoading } = state;

  return (
    <div>
      <Head>
        <title>MacBook</title>
      </Head>
      {startMacBot ? (
        <Chats
          chats={chats}
          answers={answers}
          avatar={MacIconImage.src}
          onSelectAnswer={(answer) => onSelectAnswer(answer)}
          isChatLoading={isChatLoading}
          searchParam={macSearchParam}
          restartChats={restartChats}
          endChats={endChats}
        />
      ) : (
        <div className='pt-24 text-center mb-5'>
          <h1 className='text-2xl sm:text-4xl font-bold text-center text-gray-500'>
            最適なMacBookページへようこそ！
          </h1>
          <hr className='p-0 w-1/2 m-auto text-gray-500 mt-1 mb-3' />
          <Image
            src='/MacBookPageImage.jpg'
            width={500}
            height={500}
            className='pointer-events-none'
          />
          <h3 className='text-lg sm:text-xl font-bold'>MacBook</h3>
          <p className='text-yellow-700 my-3'>
            こちらはiPadを診断してくれるページになります
          </p>
          <p className='my-3'>早速スタートしますか？</p>
          <div className='mt-3'>
            <Button
              className='mx-2 my-1 sm:my-0 w-56 bg-yellow-600 text-white hover:bg-yellow-700 static p-4 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110'
              onClick={() => setStartMacBot(true)}
            >
              [ はい ]
            </Button>
          </div>
        </div>
      )}
      <div className='sm:absolute sm:bottom-0 sm:w-full'>
        <Footer />
      </div>
    </div>
  );
};

export default Mac;
