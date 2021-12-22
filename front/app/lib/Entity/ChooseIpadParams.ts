import { IpadParam } from 'lib/api/repository/ipadRepository';
import { Answer } from 'lib/interfaces';

interface SetIpadSearchParams {
  setIpadSearchParams: React.SetStateAction<IpadParam | undefined>;
}

export const ChooseIpadParams = (
  answer: Answer,
  ipadSearchParams: IpadParam | undefined,
  setIpadSearchParams: React.Dispatch<
    React.SetStateAction<IpadParam | undefined>
  >
) => {
  const params = answer.params;
  if (params.price) {
    setIpadSearchParams({ ...ipadSearchParams, price: params.price });
    return;
  } else if (params.maxSize) {
    setIpadSearchParams({
      ...ipadSearchParams,
      minSize: params.minSize,
      maxSize: params.maxSize,
    });
    return;
  } else if (params.chip) {
    setIpadSearchParams({ ...ipadSearchParams, chip: params.chip });
    return;
  } else if (params.cleanDisplay) {
    setIpadSearchParams({
      ...ipadSearchParams,
      cleanDisplay: params.cleanDisplay,
    });
    return;
  } else if (params.highPerformCamera) {
    setIpadSearchParams({
      ...ipadSearchParams,
      highPerformCamera: params.highPerformCamera,
    });
    return;
  } else if (params.manyColors) {
    setIpadSearchParams({ ...ipadSearchParams, manyColors: params.manyColors });
    return;
  } else if (params.name) {
    setIpadSearchParams({ ...ipadSearchParams, name: params.name });
    return;
  } else if (params.typeC) {
    setIpadSearchParams({ ...ipadSearchParams, typeC: params.typeC });
    return;
  } else {
    return;
  }
};
