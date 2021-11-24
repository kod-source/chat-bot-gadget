export class Product {
  constructor(
    public id: number,
    public name: string,
    public memo: string,
    public image: string,
    public mostLowPrice: number,
    public highestPrice: number,
    public url: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}
