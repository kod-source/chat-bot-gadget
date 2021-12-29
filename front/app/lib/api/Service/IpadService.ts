import { IpadNextId, IpadParam, IpadData } from '../repository/ipadRepository';
import IpadChatData from 'lib/DataSet/ipad_chat_data.json';

export class IpadService {
  static buildSearchParams(param: IpadParam): URLSearchParams {
    const urlSearchParams = new URLSearchParams();
    if (param.chips) {
      param.chips.forEach((c) => urlSearchParams.append('chips[]', c));
    }
    if (param.cleanDisplay || param.cleanDisplay === false) {
      urlSearchParams.append(
        'clean_display',
        param.cleanDisplay ? 'true' : 'false'
      );
    }
    if (param.highPerformCamera || param.highPerformCamera === false) {
      urlSearchParams.append(
        'high_perform_camera',
        param.highPerformCamera ? 'true' : 'false'
      );
    }
    if (param.manyColors || param.manyColors === false) {
      urlSearchParams.append(
        'many_colors',
        param.manyColors ? 'true' : 'false'
      );
    }
    if (param.maxSize) {
      urlSearchParams.append('max_size', param.maxSize.toString());
    }
    if (param.minSize) {
      urlSearchParams.append('min_size', param.minSize.toString());
    }
    if (param.price) {
      urlSearchParams.append('price', param.price.toString());
    }
    if (param.typeC || param.typeC === false) {
      urlSearchParams.append('type_c', param.typeC ? 'true' : 'false');
    }
    if (param.fiveG || param.fiveG === false) {
      urlSearchParams.append('five_g', param.fiveG ? 'true' : 'false');
    }
    if (param.speakerCount) {
      urlSearchParams.append('speaker_count', param.speakerCount.toString());
    }
    if (param.faceId || param.faceId === false) {
      urlSearchParams.append('face_id', param.faceId ? 'true' : 'false');
    }
    if (param.centerFrame || param.centerFrame === false) {
      urlSearchParams.append(
        'center_frame',
        param.centerFrame ? 'true' : 'false'
      );
    }
    if (param.dualSpeaker || param.dualSpeaker === false) {
      urlSearchParams.append(
        'dual_speaker',
        param.dualSpeaker ? 'true' : 'false'
      );
    }
    if (param.highRefreshRate || param.highRefreshRate === false) {
      urlSearchParams.append(
        'high_refresh_rate',
        param.highRefreshRate ? 'true' : 'false'
      );
    }
    if (param.thunderbolt || param.thunderbolt === false) {
      urlSearchParams.append(
        'thunderbolt',
        param.thunderbolt ? 'true' : 'false'
      );
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
      case 'fiveG':
        return IpadChatData.fiveG;
      case 'speakerCount':
        return IpadChatData.speakerCount;
      case 'faceId':
        return IpadChatData.faceId;
      case 'centerFrame':
        return IpadChatData.centerFrame;
      case 'dualSpeaker':
        return IpadChatData.dualSpeaker;
      case 'highRefreshRate':
        return IpadChatData.highRefreshRate;
      case 'thunderbolt':
        return IpadChatData.thunderbolt;
      case 'end':
        return null;
    }
  }

  static appendUrlSearchParams(
    param: IpadParam,
    nextId: IpadNextId
  ): URLSearchParams {
    const urlSearchParams = new URLSearchParams();
    if (nextId) {
      urlSearchParams.append('nextId', nextId);
    }
    if (param.chips) {
      urlSearchParams.append('chips', param.chips.toString());
    }
    if (param.cleanDisplay || param.cleanDisplay === false) {
      urlSearchParams.append(
        'cleanDisplay',
        param.cleanDisplay ? 'true' : 'false'
      );
    }
    if (param.highPerformCamera || param.highPerformCamera === false) {
      urlSearchParams.append(
        'highPerformCamera',
        param.highPerformCamera ? 'true' : 'false'
      );
    }
    if (param.manyColors || param.manyColors === false) {
      urlSearchParams.append('manyColors', param.manyColors ? 'true' : 'false');
    }
    if (param.maxSize) {
      urlSearchParams.append('maxSize', param.maxSize.toString());
    }
    if (param.minSize) {
      urlSearchParams.append('minSize', param.minSize.toString());
    }
    if (param.price) {
      urlSearchParams.append('price', param.price.toString());
    }
    if (param.typeC || param.typeC === false) {
      urlSearchParams.append('typeC', param.typeC ? 'true' : 'false');
    }
    if (param.fiveG || param.fiveG === false) {
      urlSearchParams.append('fiveG', param.fiveG ? 'true' : 'false');
    }
    if (param.speakerCount) {
      urlSearchParams.append('speakerCount', param.speakerCount.toString());
    }
    if (param.faceId || param.faceId === false) {
      urlSearchParams.append('faceId', param.faceId ? 'true' : 'false');
    }
    if (param.centerFrame || param.centerFrame === false) {
      urlSearchParams.append(
        'centerFrame',
        param.centerFrame ? 'true' : 'false'
      );
    }
    if (param.dualSpeaker || param.dualSpeaker === false) {
      urlSearchParams.append(
        'dualSpeaker',
        param.dualSpeaker ? 'true' : 'false'
      );
    }
    if (param.highRefreshRate || param.highRefreshRate === false) {
      urlSearchParams.append(
        'highRefreshRate',
        param.highRefreshRate ? 'true' : 'false'
      );
    }
    if (param.thunderbolt || param.thunderbolt === false) {
      urlSearchParams.append(
        'thunderbolt',
        param.thunderbolt ? 'true' : 'false'
      );
    }

    return urlSearchParams;
  }
}
