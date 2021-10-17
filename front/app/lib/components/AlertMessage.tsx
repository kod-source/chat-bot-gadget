import React, { FC } from 'react';
import Alert from '@mui/material/Alert';
import { Snackbar, AlertColor } from '@mui/material';

interface Props {
  open: boolean;
  handleClose: () => void;
  type: AlertColor;
  message: string;
}

export const AlertMessage: FC<Props> = (props) => {
  const { open, handleClose, type, message } = props;

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert
        className='bg-white'
        onClose={handleClose}
        severity={type}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
