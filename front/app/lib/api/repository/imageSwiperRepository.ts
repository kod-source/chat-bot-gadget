import axios from 'axios';
import { ImageSwiper } from '../Entity/ImageSwiper';
import {
  ImageSwiperFactory,
  ImageSwiperResponseObject,
} from '../Factory/ImageSwiperFactory';
import { ImageSwiperUrl } from '../hostUrl/url';

export class ImageSwiperRepository {
  static async showIpad(ipadId: number): Promise<ImageSwiper[]> {
    const res = await axios.get<ImageSwiperResponseObject[]>(
      `${ImageSwiperUrl}?ipad_id=${ipadId}`,
      {
        withCredentials: true,
      }
    );
    return res.data.map(ImageSwiperFactory.createFormResponse);
  }
}
