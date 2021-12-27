import { Avatar, Button, Skeleton } from '@mui/material';
import { IpadParam } from 'lib/api/repository/ipadRepository';
import { Answer, ChatState } from 'lib/interfaces';
import { AuthContext } from 'pages/_app';
import React, { FC, useContext, useEffect, useRef } from 'react';
import { SpeedDialTooltipOpen } from './SpeedDialTooltipOpen';

interface Props {
  chats: ChatState[];
  answers: Answer[];
  avatar: string;
  onSelectAnswer: (answer: Answer) => void;
  isChatLoading: boolean;
  ipadSearchParams: IpadParam | null;
  restartChats: () => void;
  endChats: () => void;
}

export const Chats: FC<Props> = (props) => {
  const scrollBottomRef = useRef<HTMLDivElement>(null);
  const { user } = useContext(AuthContext);
  const {
    chats,
    answers,
    avatar,
    onSelectAnswer,
    isChatLoading,
    ipadSearchParams,
    restartChats,
    endChats,
  } = props;

  useEffect(() => {
    scrollBottomRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, [chats, isChatLoading]);

  return (
    <section className='w-full h-[93vh]'>
      <div className='border-2 rounded-md h-[650px] sm:h-[750px] max-w-xl sm:max-w-3xl w-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-blue-300'>
        <div className='h-[400px] sm:h-[500px] overflow-x-auto'>
          {chats.map((chat) => (
            <div key={chat.text} className='mt-3 sm:mt-5'>
              {chat.isQuestion ? (
                <div className='ml-2 sm:ml-5 flex'>
                  <Avatar
                    alt='question_image'
                    src={avatar}
                    className='w-12 sm:w-16 h-12 sm:h-16'
                  />
                  <p className='my-1 ml-2 sm:ml-4 text-base sm:text-xl bg-white border rounded-md max-w-[200px] sm:max-w-lg text-left tracking-widest py-1 sm:py-3 px-2'>
                    {chat.text.split('\n').map((t) => (
                      <p key={t}>
                        {t}
                        <br />
                      </p>
                    ))}
                  </p>
                </div>
              ) : (
                <div className='flex justify-end mr-2 sm:mr-5'>
                  <p className='my-1 mr-2 sm:mr-4 text-base sm:text-xl bg-white border rounded-md max-w-[200px] sm:max-w-lg text-left tracking-widest py-1 sm:py-3 px-2'>
                    {chat.text.split('\n').map((t) => (
                      <p key={t}>
                        {t}
                        <br />
                      </p>
                    ))}
                  </p>
                  <Avatar
                    alt='question_image'
                    src={user?.avatar?.url}
                    className='w-12 sm:w-16 h-12 sm:h-16'
                  />
                </div>
              )}
            </div>
          ))}
          {isChatLoading && (
            <div className='flex ml-2 sm:ml-5 mt-3 sm:mt-5'>
              <Skeleton
                variant='circular'
                className='w-12 sm:w-16 h-12 sm:h-16'
              />
              <Skeleton
                variant='text'
                className='ml-4 w-48 sm:w-64 h-14 sm:h-[70px]'
              />
            </div>
          )}
          <div ref={scrollBottomRef} />
        </div>
        <div className='mt-8'>
          {answers.map((a) => (
            <div className='m-0 p-0'>
              {isChatLoading ? (
                <Skeleton
                  key={a.content}
                  variant='text'
                  className='m-auto w-[95%] sm:w-11/12 h-16 sm:h-[70px]'
                />
              ) : (
                <Button
                  key={a.content}
                  className='px-2 sm:px-5 py-1 sm:py-2 block font-bold w-[95%] sm:w-11/12 mt-2 h-16 bg-white text-yellow-600 m-auto text-sm sm:text-xl hover:text-white hover:bg-yellow-500'
                  disabled={isChatLoading}
                  onClick={() => onSelectAnswer(a)}
                >
                  {a.content.split('\n').map((c) => (
                      <p key={c}>
                        {c}
                        <br />
                      </p>
                    ))}
                </Button>
              )}
            </div>
          ))}
          {ipadSearchParams && (
            <SpeedDialTooltipOpen
              restartChats={restartChats}
              endChats={endChats}
            />
          )}
        </div>
      </div>
    </section>
  );
};
