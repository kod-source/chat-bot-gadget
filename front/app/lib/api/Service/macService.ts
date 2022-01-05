import { MacData, MacNextId, MacParam } from '../repository/macRepository';
import MacChatData from 'lib/DataSet/mac_chat_data.json';

export class MacService {
  static buildSearchParams(param: MacParam): URLSearchParams {
    const urlSearchParams = new URLSearchParams();
    if (param.appleSilicon != null) {
      urlSearchParams.append(
        'apple_silicon',
        param.appleSilicon ? 'true' : 'false'
      );
    }
    if (param.chips) {
      param.chips.forEach((c) => urlSearchParams.append('chips[]', c));
    }
    if (param.fanExistence != null) {
      urlSearchParams.append(
        'fan_existence',
        param.fanExistence ? 'true' : 'false'
      );
    }
    if (param.maxMemory) {
      urlSearchParams.append('max_memory', param.maxMemory.toString());
    }
    if (param.notch != null) {
      urlSearchParams.append('notch', param.notch ? 'true' : 'false');
    }
    if (param.price) {
      urlSearchParams.append('price', param.price.toString());
    }
    if (param.sdCardSlot != null) {
      urlSearchParams.append(
        'sd_card_slot',
        param.sdCardSlot ? 'true' : 'false'
      );
    }
    if (param.maxSize) {
      urlSearchParams.append('max_size', param.maxSize.toString());
    }
    if (param.minSize) {
      urlSearchParams.append('min_size', param.minSize.toString());
    }
    if (param.thunderboltCount) {
      urlSearchParams.append(
        'thunderbolt_count',
        param.thunderboltCount.toString()
      );
    }
    if (param.wiFiSix != null) {
      urlSearchParams.append('wi_fi_six', param.wiFiSix ? 'true' : 'false');
    }

    return urlSearchParams;
  }

  static selectData(nextId: MacNextId): MacData | null {
    switch (nextId) {
      case 'init':
        return MacChatData.init;
      case 'chip':
        return MacChatData.chip;
      case 'size':
        return MacChatData.size;
      case 'fan':
        return MacChatData.fan;
      case 'use':
        return MacChatData.use;
      case 'maxMemory':
        return MacChatData.maxMemory;
      case 'thunderboltCount':
        return MacChatData.thunderboltCount;
      case 'sdCardSlot':
        return MacChatData.sdCardSlot;
      case 'notch':
        return MacChatData.notch;
      case 'wiFiSix':
        return MacChatData.wiFiSix;
      case 'end':
        return null;
    }
  }

  static appendUrlSearchParams(
    param: MacParam,
    nextId: MacNextId
  ): URLSearchParams {
    const urlSearchParams = new URLSearchParams();
    if (nextId) {
      urlSearchParams.append('nextId', nextId);
    }
    if (param.appleSilicon != null) {
      urlSearchParams.append(
        'appleSilicon',
        param.appleSilicon ? 'true' : 'false'
      );
    }
    if (param.chips) {
      urlSearchParams.append('chips', param.chips.toString());
    }
    if (param.fanExistence != null) {
      urlSearchParams.append(
        'fanExistence',
        param.fanExistence ? 'true' : 'false'
      );
    }
    if (param.maxMemory) {
      urlSearchParams.append('maxMemory', param.maxMemory.toString());
    }
    if (param.notch != null) {
      urlSearchParams.append('notch', param.notch ? 'true' : 'false');
    }
    if (param.price) {
      urlSearchParams.append('price', param.price.toString());
    }
    if (param.sdCardSlot != null) {
      urlSearchParams.append('sdCardSlot', param.sdCardSlot ? 'true' : 'false');
    }
    if (param.maxSize) {
      urlSearchParams.append('maxSize', param.maxSize.toString());
    }
    if (param.minSize) {
      urlSearchParams.append('miniSize', param.minSize.toString());
    }
    if (param.thunderboltCount) {
      urlSearchParams.append(
        'thunderboltCount',
        param.thunderboltCount.toString()
      );
    }
    if (param.wiFiSix != null) {
      urlSearchParams.append('wiFiSix', param.wiFiSix ? 'true' : 'false');
    }

    return urlSearchParams;
  }
}
