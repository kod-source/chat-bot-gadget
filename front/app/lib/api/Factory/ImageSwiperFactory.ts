import { ImageSwiper } from '../Entity/ImageSwiper';

export interface ImageSwiperResponseObject {
  id: number;
  ipad_id: number;
  iphone_id: number;
  mac_id: number;
  title: string;
  url: string;
  created_at: Date;
  updated_at: Date;
}

export class ImageSwiperFactory {
  static createFormResponse(res: ImageSwiperResponseObject): ImageSwiper {
    return new ImageSwiper(
      res.id,
      res.ipad_id,
      res.iphone_id,
      res.mac_id,
      res.title,
      res.url,
      res.updated_at,
      res.updated_at
    );
  }
}
