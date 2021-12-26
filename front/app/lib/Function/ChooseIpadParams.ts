import { IpadParam } from 'lib/api/repository/ipadRepository';
import { Answer } from 'lib/interfaces';

export const ChooseIpadParams = (
  answer: Answer,
  ipadSearchParams: IpadParam | null,
  setIpadSearchParams: React.Dispatch<React.SetStateAction<IpadParam | null>>
) => {
  if (answer.nextId === 'init') {
    setIpadSearchParams(null);
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
  } else if (params.fiveG || params.fiveG === false) {
    setIpadSearchParams({ ...ipadSearchParams, fiveG: params.fiveG });
  } else if (params.speakerCount) {
    setIpadSearchParams({
      ...ipadSearchParams,
      speakerCount: params.speakerCount,
    });
  } else if (params.faceId || params.faceId === false) {
    setIpadSearchParams({
      ...ipadSearchParams,
      faceId: params.faceId,
    });
  } else if (params.centerFrame || params.centerFrame === false) {
    setIpadSearchParams({
      ...ipadSearchParams,
      centerFrame: params.centerFrame,
    });
  } else if (params.highRefreshRate || params.highRefreshRate === false) {
    setIpadSearchParams({
      ...ipadSearchParams,
      highRefreshRate: params.highRefreshRate,
    });
  } else if (params.thunderbolt || params.thunderbolt === false) {
    setIpadSearchParams({
      ...ipadSearchParams,
      thunderbolt: params.thunderbolt,
    });
  } else if (params.dualSpeaker || params.dualSpeaker === false) {
    setIpadSearchParams({
      ...ipadSearchParams,
      dualSpeaker: params.dualSpeaker,
    });
  } else {
    setIpadSearchParams(ipadSearchParams);
  }
};
