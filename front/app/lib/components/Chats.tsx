import { Avatar, Button } from '@mui/material';
import { Answer, ChatState } from 'lib/interfaces';
import { AuthContext } from 'pages/_app';
import React, { FC, useContext } from 'react';

interface Props {
  chats: ChatState[];
  answers: Answer[];
  avatar: string;
  onSelectAnswer: (answer: Answer) => void;
}

export const Chats: FC<Props> = (props) => {
  const { user, isSignedIn } = useContext(AuthContext);
  const { chats, answers, avatar, onSelectAnswer } = props;

  return (
    <section className='w-full h-[100vh]'>
      <div className='border-2 rounded-md h-[750px] max-w-3xl w-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-blue-300'>
        {chats.map((chat) => (
          <>
            {chat.isQuestion ? (
              <div className='ml-5 mt-5 flex'>
                <Avatar
                  alt='question_image'
                  src={avatar}
                  className='w-16 h-16'
                />
                <p className='my-1 ml-4 text-xl bg-white border rounded-md h-14 tracking-widest pt-3 px-2'>
                  {chat.question}
                </p>
              </div>
            ) : (
              <div className='flex justify-end mr-5'>
                <p className='my-1 mr-4 text-xl bg-white border rounded-md h-14 tracking-widest pt-3 px-2'>
                  {chat.selectAnswer}
                </p>
                <Avatar
                  alt='question_image'
                  src={user?.avatar?.url}
                  className='w-16 h-16'
                />
              </div>
            )}
          </>
        ))}
        <div className='absolute top-[73%] w-full'>
          {answers.map((a) => (
            <Button
              className='block font-bold w-11/12 mt-2 h-14 bg-white text-yellow-600 m-auto text-xl hover:text-white hover:bg-yellow-500'
              onClick={() => onSelectAnswer(a)}
            >
              {a.content}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};
