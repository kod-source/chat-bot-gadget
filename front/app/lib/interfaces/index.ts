import { AlertColor } from '@mui/material';
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

interface IpadParam {
  price?: number;
  name?: number;
  minSize?: number;
  maxSize?: number;
  chip?: string[];
  highPerformCamera?: boolean;
  cleanDisplay?: boolean;
  manyColors?: boolean;
  typeC?: boolean;
}

export interface ChatState {
  text: string;
  isQuestion: boolean;
}
