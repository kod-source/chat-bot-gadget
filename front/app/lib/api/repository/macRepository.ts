import axios from 'axios';
import { Mac } from '../Entity/Mac';
import { MacFactory, MacResponseObject } from '../Factory/MacFactory';
import { MacsUrl } from '../hostUrl/url';

export type MacNextId =
  | 'init'
  | 'chip'
  | 'size'
  | 'fan'
  | 'use'
  | 'maxMemory'
  | 'thunderboltCount'
  | 'sdCardSlot'
  | 'notch'
  | 'wiFiSix'
  | 'end';

export interface MacData {
  answers: MacAnswer[];
  question: string;
}

export interface MacParam {
  price?: number;
  appleSilicon?: boolean;
  size?: number;
  fanExistence?: boolean;
  chips?: string[];
  maxMemory?: number;
  thunderboltCount?: number;
  sdCardSlot?: boolean;
  notch?: boolean;
  wiFiSix?: boolean;
}

export interface MacAnswer {
  content: string;
  nextId: string;
  params: MacParam;
}
export class MacRepository {
  static async all(): Promise<Mac[]> {
    const res = await axios.get<MacResponseObject[]>(MacsUrl, {
      withCredentials: true,
    });
    return res.data.map(MacFactory.createFromResponse);
  }

  static async get(id: number): Promise<Mac> {
    const res = await axios.get<MacResponseObject>(`${MacsUrl}/${id}`, {
      withCredentials: true,
    });
    return MacFactory.createFromResponse(res.data);
  }
}
