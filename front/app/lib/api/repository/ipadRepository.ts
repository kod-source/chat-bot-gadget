import axios from 'axios';
import { Ipad } from '../Entity/Ipad';
import { IpadFactory, IpadResponseObject } from '../Factory/IpadFactory';
import { IpadsUrl } from 'lib/api/hostUrl/url';
import { Answer } from 'lib/interfaces';
import { IpadService } from '../Service/IpadService';
import { Product } from '../Entity/Product';
import {
  ProductFactory,
  ProductResponseObject,
} from '../Factory/ProductFactory';

export type IpadNextId =
  | 'init'
  | 'size'
  | 'screen'
  | 'spec'
  | 'camera'
  | 'camera'
  | 'color'
  | 'typeC'
  | 'use'
  | 'fiveG'
  | 'speakerCount'
  | 'faceId'
  | 'centerFrame'
  | 'highRefreshRate'
  | 'thunderbolt'
  | 'dualSpeaker'
  | 'end';

export interface IpadData {
  answers: Answer[];
  question: string;
}

export interface IpadParam {
  price?: number;
  minSize?: number;
  maxSize?: number;
  chips?: string[];
  highPerformCamera?: boolean;
  cleanDisplay?: boolean;
  manyColors?: boolean;
  typeC?: boolean;
  speakerCount?: number;
  faceId?: boolean;
  centerFrame?: boolean;
  dualSpeaker?: boolean;
  highRefreshRate?: boolean;
  thunderbolt?: boolean;
  fiveG?: boolean;
}

export class IpadRepository {
  static async all(): Promise<Ipad[]> {
    const res = await axios.get<IpadResponseObject[]>(IpadsUrl, {
      withCredentials: true,
    });
    return res.data.map(IpadFactory.createFromResponse);
  }
  static async get(id: number): Promise<Ipad> {
    const res = await axios.get<IpadResponseObject>(`${IpadsUrl}/${id}`, {
      withCredentials: true,
    });
    return IpadFactory.createFromResponse(res.data);
  }

  static async searchResProduct(params: IpadParam): Promise<Product[]> {
    const urlSearchParams = IpadService.buildSearchParams(params);
    const res = await axios.get<ProductResponseObject[]>(
      `${IpadsUrl}/search?${urlSearchParams.toString()}`,
      {
        withCredentials: true,
      }
    );
    return res.data.map(ProductFactory.createFromResponse);
  }
}
