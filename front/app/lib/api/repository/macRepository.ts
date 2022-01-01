import axios from 'axios';
import { Mac } from '../Entity/Mac';
import { MacFactory, MacResponseObject } from '../Factory/MacFactory';
import { MacsUrl } from '../hostUrl/url';

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
