import axios from 'axios';
import { Product } from '../Entity/Product';
import {
  ProductFactory,
  ProductResponseObject,
} from '../Factory/ProductFactory';
import { likeProductsUrl, ProductsUrl } from '../hostUrl/url';

export class ProductRepository {
  static async getLikeProducts(): Promise<Product[]> {
    const res = await axios.get<ProductResponseObject[]>(likeProductsUrl, {
      withCredentials: true,
    });
    return res.data.map(ProductFactory.createFromResponse);
  }

  static async get(id: number): Promise<Product> {
    const res = await axios.get<ProductResponseObject>(`${ProductsUrl}/${id}`, {
      withCredentials: true,
    });
    return ProductFactory.createFromResponse(res.data);
  }
}
