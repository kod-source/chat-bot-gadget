export class Like {
  constructor(
    public id: number,
    public userId: number,
    public productId: number,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
