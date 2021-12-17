import { AlertColor } from '@mui/material';
import { IpadNextId } from 'lib/api/repository/ipadRepository';
export interface AlertState {
  open: boolean;
  type: AlertColor;
  message: string;
}

export interface Answer {
  content: string;
  nextId: IpadNextId;
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
