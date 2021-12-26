import { IpadNextId, IpadParam, IpadData } from '../repository/ipadRepository';
import IpadChatData from 'lib/DataSet/ipad_chat_data.json';

export class IpadService {
  static buildSearchParams(params: IpadParam): URLSearchParams {
    const urlSearchParams = new URLSearchParams();
    if (params.chips) {
      params.chips.forEach((c) => urlSearchParams.append('chips[]', c));
    }
    if (params.cleanDisplay || params.cleanDisplay === false) {
      urlSearchParams.append(
        'clean_display',
        params.cleanDisplay ? 'true' : 'false'
      );
    }
    if (params.highPerformCamera || params.highPerformCamera === false) {
      urlSearchParams.append(
        'high_perform_camera',
        params.highPerformCamera ? 'true' : 'false'
      );
    }
    if (params.manyColors || params.manyColors === false) {
      urlSearchParams.append(
        'many_colors',
        params.manyColors ? 'true' : 'false'
      );
    }
    if (params.maxSize) {
      urlSearchParams.append('max_size', params.maxSize.toString());
    }
    if (params.minSize) {
      urlSearchParams.append('min_size', params.minSize.toString());
    }
    if (params.price) {
      urlSearchParams.append('price', params.price.toString());
    }
    if (params.typeC || params.typeC === false) {
      urlSearchParams.append('type_c', params.typeC ? 'true' : 'false');
    }

    return urlSearchParams;
  }

  static selectData(nextId: IpadNextId): IpadData | null {
    switch (nextId) {
      case 'init':
        return IpadChatData.init;
      case 'size':
        return IpadChatData.size;
      case 'screen':
        return IpadChatData.screen;
      case 'spec':
        return IpadChatData.spec;
      case 'camera':
        return IpadChatData.camera;
      case 'color':
        return IpadChatData.color;
      case 'typeC':
        return IpadChatData.typeC;
      case 'use':
        return IpadChatData.use;
      case 'end':
        return null;
    }
  }
}
