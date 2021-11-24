import axios from 'axios';
import { Product } from '../Entity/Product';
import {
  ProductFactory,
  ProductResponseObject,
} from '../Factory/ProductFactory';
import { likeProductsUrl } from '../hostUrl/url';

export class ProductRepository {
  static async getLikeProducts(): Promise<Product[]> {
    const res = await axios.get<ProductResponseObject[]>(likeProductsUrl, {
      withCredentials: true,
    });
    return res.data.map(ProductFactory.createFromResponse);
  }
}
