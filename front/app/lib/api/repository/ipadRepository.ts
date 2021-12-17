import axios from 'axios';
import { Ipad } from '../Entity/Ipad';
import { IpadFactory, IpadResponseObject } from '../Factory/IpadFactory';
import { IpadsUrl } from 'lib/api/hostUrl/url';
import IpadData from 'lib/DataSet/ipad_data.json';
import { Answer } from 'lib/interfaces';

export type IpadNextId =
  | 'init'
  | 'size'
  | 'screen'
  | 'spec'
  | 'camera'
  | 'camera'
  | 'color'
  | 'typeC'
  | 'end';

interface IpadData {
  answers: Answer[];
  question: string;
}

export const selectIpadData = (nextId: IpadNextId): IpadData | null => {
  switch (nextId) {
    case 'init':
      return IpadData.init;
    case 'size':
      return IpadData.size;
    case 'screen':
      return IpadData.screen;
    case 'spec':
      return IpadData.spec;
    case 'camera':
      return IpadData.camera;
    case 'color':
      return IpadData.color;
    case 'typeC':
      return IpadData.typeC;
    case 'end':
      return null;
  }
};

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
}
