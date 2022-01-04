import { MacAnswer, MacParam } from 'lib/api/repository/macRepository';

export const ChooseMacParams = (
  answer: MacAnswer,
  macSearchParam: MacParam | null,
  setMacSearchParam: React.Dispatch<React.SetStateAction<MacParam | null>>
) => {
  const params = answer.params;
  if (params.chips) {
    setMacSearchParam({ ...macSearchParam, chips: params.chips });
  } else if (params.appleSilicon != null) {
    setMacSearchParam({
      ...macSearchParam,
      appleSilicon: params.appleSilicon,
    });
  } else if (params.fanExistence != null) {
    setMacSearchParam({ ...macSearchParam, fanExistence: params.fanExistence });
  } else if (params.maxMemory) {
    setMacSearchParam({ ...macSearchParam, maxMemory: params.maxMemory });
  } else if (params.notch != null) {
    setMacSearchParam({ ...macSearchParam, notch: params.notch });
  } else if (params.price) {
    setMacSearchParam({ ...macSearchParam, price: params.price });
  } else if (params.sdCardSlot != null) {
    setMacSearchParam({ ...macSearchParam, sdCardSlot: params.sdCardSlot });
  } else if (params.size) {
    setMacSearchParam({ ...macSearchParam, size: params.size });
  } else if (params.thunderboltCount) {
    setMacSearchParam({
      ...macSearchParam,
      thunderboltCount: params.thunderboltCount,
    });
  } else if (params.wiFiSix != null) {
    setMacSearchParam({ ...macSearchParam, wiFiSix: params.wiFiSix });
  } else {
    setMacSearchParam(macSearchParam);
  }
};
