import { AlertColor } from '@mui/material';

export interface User {
  id: number;
  name: string;
  email: string;
  passwordDigest: string;
  createdAt: Date;
  updatedAt: Date;
  avatar?: { url: string };
}

export interface AlertState {
  open: boolean;
  type: AlertColor;
  message: string;
}
