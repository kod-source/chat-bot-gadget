import axios from 'axios';
import { LikesUrl } from '../hostUrl/url';

export class LikeRepository {
  static async create(productId: number): Promise<void> {
    await axios.post(
      LikesUrl,
      { id: productId },
      {
        withCredentials: true,
      }
    );
    return;
  }

  static async delete(productId: number): Promise<void> {
    await axios.delete(`${LikesUrl}/${productId}`, {
      withCredentials: true,
    });
    return;
  }
}
