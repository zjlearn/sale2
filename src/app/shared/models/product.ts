
export class Product {
  public name: string;
  public num: string;
  public rate: number;  // 收益率
  public duration: number;
  public amount: number;
  public completed: number;  // 已完成的数量

  constructor(name: string, num: string, rate: number, duration: number, amount: number, completed: number) {
    this.name = name;
    this.num = num;
    this.rate = rate;
    this.duration = duration;
    this.amount = amount;
    this.completed = completed;
  }
}
