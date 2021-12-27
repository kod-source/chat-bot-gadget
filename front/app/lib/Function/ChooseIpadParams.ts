import { IpadParam } from 'lib/api/repository/ipadRepository';
import { Answer } from 'lib/interfaces';

export const ChooseIpadParams = (
  answer: Answer,
  ipadSearchParam: IpadParam | null,
  setIpadSearchParam: React.Dispatch<React.SetStateAction<IpadParam | null>>
) => {
  if (answer.nextId === 'init') {
    setIpadSearchParam(null);
    return;
  }
  const params = answer.params;
  if (params.price) {
    setIpadSearchParam({ ...ipadSearchParam, price: params.price });
  } else if (params.maxSize) {
    setIpadSearchParam({
      ...ipadSearchParam,
      minSize: params.minSize,
      maxSize: params.maxSize,
    });
  } else if (params.chips) {
    setIpadSearchParam({ ...ipadSearchParam, chips: params.chips });
  } else if (params.cleanDisplay || params.cleanDisplay === false) {
    setIpadSearchParam({
      ...ipadSearchParam,
      cleanDisplay: params.cleanDisplay,
    });
  } else if (params.highPerformCamera || params.highPerformCamera === false) {
    setIpadSearchParam({
      ...ipadSearchParam,
      highPerformCamera: params.highPerformCamera,
    });
  } else if (params.manyColors || params.manyColors === false) {
    setIpadSearchParam({ ...ipadSearchParam, manyColors: params.manyColors });
  } else if (params.typeC || params.typeC === false) {
    setIpadSearchParam({ ...ipadSearchParam, typeC: params.typeC });
  } else if (params.fiveG || params.fiveG === false) {
    setIpadSearchParam({ ...ipadSearchParam, fiveG: params.fiveG });
  } else if (params.speakerCount) {
    setIpadSearchParam({
      ...ipadSearchParam,
      speakerCount: params.speakerCount,
    });
  } else if (params.faceId || params.faceId === false) {
    setIpadSearchParam({
      ...ipadSearchParam,
      faceId: params.faceId,
    });
  } else if (params.centerFrame || params.centerFrame === false) {
    setIpadSearchParam({
      ...ipadSearchParam,
      centerFrame: params.centerFrame,
    });
  } else if (params.highRefreshRate || params.highRefreshRate === false) {
    setIpadSearchParam({
      ...ipadSearchParam,
      highRefreshRate: params.highRefreshRate,
    });
  } else if (params.thunderbolt || params.thunderbolt === false) {
    setIpadSearchParam({
      ...ipadSearchParam,
      thunderbolt: params.thunderbolt,
    });
  } else if (params.dualSpeaker || params.dualSpeaker === false) {
    setIpadSearchParam({
      ...ipadSearchParam,
      dualSpeaker: params.dualSpeaker,
    });
  } else {
    setIpadSearchParam(ipadSearchParam);
  }
};
