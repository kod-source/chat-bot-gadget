import { Avatar, Button, Skeleton } from '@mui/material';
import { Answer, ChatState } from 'lib/interfaces';
import { AuthContext } from 'pages/_app';
import React, { FC, useContext, useEffect, useRef } from 'react';
import { IpadParam } from 'lib/api/repository/ipadRepository';

interface Props {
  chats: ChatState[];
  answers: Answer[];
  avatar: string;
  onSelectAnswer: (answer: Answer) => void;
  isChatLoading: boolean;
}

export const Chats: FC<Props> = (props) => {
  const scrollBottomRef = useRef<HTMLDivElement>(null);
  const { user } = useContext(AuthContext);
  const { chats, answers, avatar, onSelectAnswer, isChatLoading } = props;

  useEffect(() => {
    scrollBottomRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, [chats, isChatLoading]);

  return (
    <section className='w-full h-[93vh]'>
      <div className='border-2 rounded-md h-[750px] max-w-3xl w-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-blue-300'>
        <div className='h-[500px] overflow-x-auto'>
          {chats.map((chat) => (
            <div key={chat.text} className='mt-5'>
              {chat.isQuestion ? (
                <div className='ml-5 flex'>
                  <Avatar
                    alt='question_image'
                    src={avatar}
                    className='w-16 h-16'
                  />
                  <p className='my-1 ml-4 text-xl bg-white border rounded-md max-w-lg text-left tracking-widest py-3 px-2'>
                    {chat.text.split('\n').map((t) => (
                      <p key={t}>
                        {t}
                        <br />
                      </p>
                    ))}
                  </p>
                </div>
              ) : (
                <div className='flex justify-end mr-5'>
                  <p className='my-1 mr-4 text-xl bg-white border rounded-md max-w-lg text-right tracking-widest py-3 px-2'>
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
                    className='w-16 h-16'
                  />
                </div>
              )}
            </div>
          ))}
          {isChatLoading && (
            <div className='flex ml-5 mt-5'>
              <Skeleton variant='circular' width={64} height={64} />
              <Skeleton
                variant='text'
                className='ml-4'
                width={250}
                height={70}
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
                  className='mx-8 m-0 p-0'
                  width={700}
                  height={70}
                />
              ) : (
                <Button
                  key={a.content}
                  className='px-5 py-2 block font-bold w-11/12 mt-2 h-16 bg-white text-yellow-600 m-auto text-xl hover:text-white hover:bg-yellow-500'
                  disabled={isChatLoading}
                  onClick={() => onSelectAnswer(a)}
                >
                  {a.content}
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
