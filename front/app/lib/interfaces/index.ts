import { AlertColor } from '@mui/material';
export interface AlertState {
  open: boolean;
  type: AlertColor;
  message: string;
}