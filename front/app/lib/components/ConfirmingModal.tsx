import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

interface Props {
  open: boolean;
  title: string;
  text: string;
  confirm: string;
  onClose: () => void;
  sendContactMail: () => void;
  mailSending: boolean;
}

export const ConfirmingModal: FC<Props> = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box className='text-center absolute top-1/2 left-1/2 w-96 bg-white p-4 shadow -translate-x-2/4 -translate-y-2/4'>
        <Typography id='modal-modal-title' variant='h6' component='h1'>
          {props.title}
        </Typography>
        <Typography id='modal-modal-description' className='my-4'>
          {props.text}
        </Typography>
        <Button
          variant='outlined'
          className='mx-2 bg-gray-100 border-gray-400 text-black hover:opacity-70 hover:bg-gray-300 hover:border-gray-600'
          disabled={props.mailSending}
          onClick={props.onClose}
        >
          キャンセル
        </Button>
        <Button
          variant='contained'
          className='mx-2 hover:opacity-70'
          disabled={props.mailSending}
          onClick={props.sendContactMail}
        >
          {props.confirm}
        </Button>
      </Box>
    </Modal>
  );
};
