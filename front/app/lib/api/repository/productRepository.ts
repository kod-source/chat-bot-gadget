import axios from 'axios';
import { likeProductsUrl } from '../hostUrl/url';

export class ProductRepository {
  static async getLikeProducts(): Promise<any> {
    const res: any = await axios.get(
      likeProductsUrl,
      {
        withCredentials: true,
      }
    );
    console.log('res', res);
    return res.data
  }
}
