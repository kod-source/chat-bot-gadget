import axios from 'axios';
import { Ipad } from '../Entity/Ipad';
import { IpadFactory, IpadResponseObject } from '../Factory/IpadFactory';
import { IpadsUrl } from 'lib/api/hostUrl/url';

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
