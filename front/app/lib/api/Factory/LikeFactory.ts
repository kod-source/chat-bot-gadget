import { Like } from '../Entity/Like';

export interface LikeResponseObject {
  id: number;
  user_id: number;
  product_id: number;
  created_at: Date;
  updated_at: Date;
}

export class LikeFactory {
  static createFromResponse(res: LikeResponseObject): Like {
    return new Like(
      res.id,
      res.user_id,
      res.product_id,
      new Date(res.created_at),
      new Date(res.updated_at)
    );
  }
}
