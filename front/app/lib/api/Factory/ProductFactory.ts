import { Product } from '../Entity/Product';

export interface ProductResponseObject {
  id: number;
  name: string;
  memo: string;
  image: string;
  most_low_price: number;
  highest_price: number;
  url: string;
  created_at: Date;
  updated_at: Date;
}

export class ProductFactory {
  static createFromResponse(res: ProductResponseObject): Product {
    return new Product(
      res.id,
      res.name,
      res.memo,
      res.image,
      res.most_low_price,
      res.highest_price,
      res.url,
      new Date(res.created_at),
      new Date(res.updated_at)
    );
  }
}
