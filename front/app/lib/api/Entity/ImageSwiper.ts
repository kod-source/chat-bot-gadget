export class ImageSwiper {
  constructor(
    public id: number,
    public ipadId: number,
    public iphoneId: number,
    public macId: number,
    public title: string,
    public url: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}