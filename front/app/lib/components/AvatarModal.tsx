import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Avatar } from '@mui/material';

interface Props {
  open: boolean;
  onClose: () => void;
  image: string;
}

export const AvatarModal: FC<Props> = (props) => {
  const [hoverCloseButton, setHoverCloseButton] = useState(false);
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      className='bg-red-300 bg-opacity-70'
    >
      <Box className='text-center absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 outline-none'>
        <p
          className='absolute p-0 m-0 text-white text-2xl cursor-pointer rounded-full w-8 h-8 border-red-700 hover:bg-red-400 hover:bg-opacity-70 hover:opacity-70 hover:border select-none'
          onClick={() => {
            setHoverCloseButton(false);
            props.onClose();
          }}
          onMouseEnter={() => setHoverCloseButton(true)}
          onMouseLeave={() => setHoverCloseButton(false)}
        >
          ×
        </p>
        <p
          className={
            hoverCloseButton
              ? 'transition-opacity absolute top-8 opacity-100 duration-1000 text-white border border-gray-500 bg-gray-500 p-1 rounded'
              : 'absolute top-8 opacity-0'
          }
        >
          閉じる
        </p>
        <Avatar
          sx={{ width: 400, height: 400 }}
          alt='avatar_modal_image'
          src={props.image}
          className='pointer-events-none sm:block hidden'
        />
        <Avatar
          sx={{ width: 200, height: 200 }}
          alt='avatar_modal_image'
          src={props.image}
          className='pointer-events-none sm:hidden'
        />
      </Box>
    </Modal>
  );
};
