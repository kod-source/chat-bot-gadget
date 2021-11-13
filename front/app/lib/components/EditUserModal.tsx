import React, { FC, FormEvent, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {
  Avatar,
  Badge,
  Button,
  Grid,
  IconButton,
  TextField,
} from '@mui/material';
import { EditUserProfile, User } from 'lib/interfaces';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { updateRepository } from 'lib/api/repository/userRepository';
import { AlertMessage } from './AlertMessage';
import { AlertState } from 'lib/interfaces';

interface Props {
  open: boolean;
  onClose: () => void;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  setShowEditUserModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditUserModal: FC<Props> = (props) => {
  const [hoverCloseButton, setHoverCloseButton] = useState<boolean>(false);
  const [state, setState] = useState<EditUserProfile>({
    id: props.user.id,
    name: props.user.name,
    email: props.user.email,
    memo: props.user.memo || '',
    avatar: null,
  });
  const [avatarValue, setAvatarValue] = useState<string>(
    props.user.avatar?.url || ''
  );
  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    type: 'info',
    message: '',
  });

  const onChangeInputFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setState({ ...state, avatar: file });
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (!e.target) return null;
        setAvatarValue(e.target.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (state.memo.length > 500) {
        setAlertState({
          open: true,
          type: 'error',
          message: '文字数は500文字までにしてください。',
        });
        return;
      }
      const user = await updateRepository(state);
      props.setUser(user);
      props.setShowEditUserModal(false);
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      className='overflow-auto my-4'
    >
      <Box className='text-center absolute top-1/2 left-1/2 w-3/5 bg-white p-4 shadow -translate-x-2/4 -translate-y-2/4'>
        <p
          className='absolute top-40 p-0 m-0 text-black text-2xl cursor-pointer rounded-full w-8 h-8 hover:opacity-70 hover:bg-gray-200'
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
              ? 'absolute top-48 transition-opacity opacity-100 duration-1000 text-white text-xs border-gray-500 bg-gray-500 p-1 rounded'
              : 'absolute top-48 opacity-0'
          }
        >
          閉じる
        </p>
        <h1 className='mt-36 font-mono text-2xl'>プロフィールの編集</h1>
        <Grid className='w-11/12 m-auto'>
          <form onSubmit={onSubmit}>
            <Grid className='gridItems my-4' item md={12}>
              <Box textAlign='center'>
                <IconButton>
                  <label className='cursor-pointer'>
                    {avatarValue ? (
                      <Avatar
                        sx={{ width: 150, height: 150 }}
                        alt='profile image'
                        src={avatarValue}
                      />
                    ) : (
                      <AccountCircleRoundedIcon
                        sx={{ width: 150, height: 150 }}
                      />
                    )}
                    <input
                      type='file'
                      className='hidden'
                      accept='image/*'
                      onChange={onChangeInputFile}
                    />
                  </label>
                </IconButton>
              </Box>
              <TextField
                required
                fullWidth
                label='お名前'
                variant='outlined'
                color='secondary'
                value={state.name}
                onChange={(e) => setState({ ...state, name: e.target.value })}
              />
            </Grid>
            <Grid className='gridItems my-4' item md={12}>
              <TextField
                required
                fullWidth
                label='メールアドレス'
                variant='outlined'
                color='secondary'
                value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
              />
            </Grid>
            <Grid className='gridItems my-4' item md={12}>
              <Badge
                badgeContent={`${state.memo.length}/500`}
                max={500}
                color='secondary'
                className='w-full'
              >
                <textarea
                  className='form-control w-full border-2 p-2 rounded border-gray-300'
                  value={state.memo}
                  onChange={(e) => setState({ ...state, memo: e.target.value })}
                  placeholder='メモを入力してください。'
                  rows={15}
                />
              </Badge>
            </Grid>
            <Grid id='SubmitButtonGrid' className='gridItems' item md={12}>
              <div className='text-center'>
                <Button
                  type='submit'
                  variant='contained'
                  className='p-1 h-12 w-1/4 static transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110'
                >
                  保存する
                </Button>
              </div>
            </Grid>
          </form>
        </Grid>
        <AlertMessage
          open={alertState.open}
          handleClose={() => setAlertState({ ...alertState, open: false })}
          type={alertState.type}
          message={alertState.message}
        />
      </Box>
    </Modal>
  );
};
