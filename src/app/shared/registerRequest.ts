//
export class RegisterRequest {
  public userName: String;
  public merBillNo: String;
  public realName: String;
  public bizType: String;
  public mobileNo: String;
  public enterName: String;
  public merDate: String;
  public userType: String;
  public webUrl: String;
  public orgCode: String;
  public isAssureCom: String;
  public s2SUrl: String;
  public identNo: String;

  constructor(userName: String, merBillNo: String, realName: String, bizType: String, mobileNo: String, enterName: String, merDate: String,
              userType: String, webUrl: String, orgCode: String, isAssureCom: String, s2SUrl: String, identNo: String) {
    this.userName = userName;
    this.merBillNo = merBillNo;
    this.realName = realName;
    this.bizType = bizType;
    this.mobileNo = mobileNo;
    this.enterName = enterName;
    this.merDate = merDate;
    this.userType = userType;
    this.webUrl = webUrl;
    this.orgCode = orgCode;
    this.isAssureCom = isAssureCom;
    this.s2SUrl = s2SUrl;
    this.identNo = identNo;
  }
}
