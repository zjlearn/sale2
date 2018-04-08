export class User {
  public id: number;

  public userName: string;

  public nickName: string;

  public mobile: string;

  public emial: string;

  public password: string;

  public sex: number;

  public idCard: string;

  public age: string;

  public userType: number;

  public ipsAccount: string;

  public userRole: number;

  public status: number;

  constructor(id: number, userName: string, nickName: string, mobile: string, emial: string, password: string, sex: number, idCard: string, age: string, userType: number, ipsAccount: string, userRole: number, status: number) {
    this.id = id;
    this.userName = userName;
    this.nickName = nickName;
    this.mobile = mobile;
    this.emial = emial;
    this.password = password;
    this.sex = sex;
    this.idCard = idCard;
    this.age = age;
    this.userType = userType;
    this.ipsAccount = ipsAccount;
    this.userRole = userRole;
    this.status = status;
  }
}
