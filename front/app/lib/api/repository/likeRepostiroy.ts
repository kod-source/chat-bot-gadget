import axios from 'axios';
import { Like } from '../Entity/Like';
import { LikeFactory, LikeResponseObject } from '../Factory/LikeFactory';
import { LikesUrl } from '../hostUrl/url';

export class LikeRepository {
  static async my(): Promise<Like[]> {
    const res = await axios.get<LikeResponseObject[]>(LikesUrl, {
      withCredentials: true,
    });

    return res.data.map(LikeFactory.createFromResponse);
  }

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
