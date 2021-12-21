import { AlertColor } from '@mui/material';
import { IpadParam } from 'lib/api/repository/ipadRepository';
export interface AlertState {
  open: boolean;
  type: AlertColor;
  message: string;
}

export interface Answer {
  content: string;
  nextId: string;
  params: IpadParam;
}

export interface ChatState {
  text: string;
  isQuestion: boolean;
}
