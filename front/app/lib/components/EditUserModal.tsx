import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {
  Avatar,
  Button,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
} from '@mui/material';
import { User } from 'lib/interfaces';

interface Props {
  open: boolean;
  onClose: () => void;
  user: User;
}

export const EditUserModal: FC<Props> = (props) => {
  const [hoverCloseButton, setHoverCloseButton] = useState<boolean>(false);

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box className='text-center absolute top-1/2 left-1/2 w-3/5 bg-white p-4 shadow -translate-x-2/4 -translate-y-2/4'>
        <p
          className='absolute p-0 m-0 text-black text-2xl cursor-pointer rounded-full w-8 h-8 hover:opacity-70 hover:bg-gray-200'
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
              ? 'absolute top-12 transition-opacity opacity-100 duration-1000 text-white text-xs border-gray-500 bg-gray-500 p-1 rounded'
              : 'absolute top-12 opacity-0'
          }
        >
          閉じる
        </p>
        <h1 className='pt-2 font-mono text-2xl'>プロフィールの編集</h1>
        <Grid className='my-12 lg:w-1/2 sm:w-9/12 w-11/12 m-auto'>
          <form>
            {/* <form onSubmit={onSubmit}> */}
            <Grid className='gridItems my-4' item md={12}>
              <TextField
                required
                fullWidth
                label='お名前'
                variant='outlined'
                color='secondary'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid className='gridItems my-4' item md={12}>
              <TextField
                required
                fullWidth
                label='メールアドレス'
                variant='outlined'
                color='secondary'
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid className='gridItems my-4' item md={12}>
              <TextField
                required
                fullWidth
                rows={15}
                multiline
                label='お問合せ内容'
                variant='outlined'
                // value={text}
                // onChange={(e) => setText(e.target.value)}
              />
            </Grid>
            <Grid id='SubmitButtonGrid' className='gridItems' item md={12}>
              <div className='text-center'>
                <Button
                  type='submit'
                  variant='contained'
                  className='p-1 h-12 w-1/4 static transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110'
                >
                  登録
                </Button>
              </div>
            </Grid>
          </form>
        </Grid>
      </Box>
    </Modal>
  );
};
