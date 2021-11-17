export class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public passwordDigest: string,
    public memo: string,
    public createdAt: Date,
    public updatedAt: Date,
    public avatar?: { url: string }
  ) {}
}
