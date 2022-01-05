import axios from 'axios';
import { Mac } from '../Entity/Mac';
import { Product } from '../Entity/Product';
import { MacFactory, MacResponseObject } from '../Factory/MacFactory';
import {
  ProductFactory,
  ProductResponseObject,
} from '../Factory/ProductFactory';
import { MacsUrl } from '../hostUrl/url';
import { MacService } from '../Service/macService';

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
  minSize?: number;
  maxSize?: number;
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

  static async searchResProduct(param: MacParam): Promise<Product[]> {
    const urlSearchParams = MacService.buildSearchParams(param);
    const res = await axios.get<ProductResponseObject[]>(
      `${MacsUrl}/search?${urlSearchParams.toString()}`,
      { withCredentials: true }
    );
    return res.data.map(ProductFactory.createFromResponse);
  }
}
