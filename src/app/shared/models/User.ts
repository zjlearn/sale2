export class User {
  public name: string;
  public password: string;  // 密码
  public verifyCode: string;

  constructor(name: string, password: string, verifyCode: string) {
    this.name = name;
    this.password = password;
    this.verifyCode = verifyCode;
  }

}
