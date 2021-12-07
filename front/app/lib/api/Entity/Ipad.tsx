export class Ipad {
  constructor(
    public id: number,
    public productId: number,
    public screenSize: number,
    public chip: string,
    public highPerformCamera: boolean,
    public typeC: boolean,
    public fiveG: boolean,
    public pencilTwo: boolean,
    public faceId: boolean,
    public cleanDisplay: boolean,
    public centerFrame: boolean,
    public speakerCount: number,
    public dualSpeaker: boolean,
    public thunderbolt: boolean,
    public weight: number,
    public highRefreshRate: boolean,
    public smartConnector: boolean,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
