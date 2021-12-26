import { IpadParam } from 'lib/api/repository/ipadRepository';
import { Answer } from 'lib/interfaces';

export const ChooseIpadParams = (
  answer: Answer,
  ipadSearchParams: IpadParam | undefined,
  setIpadSearchParams: React.Dispatch<
    React.SetStateAction<IpadParam | undefined>
  >
) => {
  if (answer.nextId === 'init') {
    setIpadSearchParams({});
    return;
  }
  const params = answer.params;
  if (params.price) {
    setIpadSearchParams({ ...ipadSearchParams, price: params.price });
  } else if (params.maxSize) {
    setIpadSearchParams({
      ...ipadSearchParams,
      minSize: params.minSize,
      maxSize: params.maxSize,
    });
  } else if (params.chips) {
    setIpadSearchParams({ ...ipadSearchParams, chips: params.chips });
  } else if (params.cleanDisplay || params.cleanDisplay === false) {
    setIpadSearchParams({
      ...ipadSearchParams,
      cleanDisplay: params.cleanDisplay,
    });
  } else if (params.highPerformCamera || params.highPerformCamera === false) {
    setIpadSearchParams({
      ...ipadSearchParams,
      highPerformCamera: params.highPerformCamera,
    });
  } else if (params.manyColors || params.manyColors === false) {
    setIpadSearchParams({ ...ipadSearchParams, manyColors: params.manyColors });
  } else if (params.typeC || params.typeC === false) {
    setIpadSearchParams({ ...ipadSearchParams, typeC: params.typeC });
  } else {
    return;
  }
};
