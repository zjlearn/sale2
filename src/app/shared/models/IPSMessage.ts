
export class IPSMessage {
  public operationType: string;
  public merchantID: string;
  public sign: String;  // 收益率
  public request: String;

  constructor(operationType: string, merchantID: string, sign: String, request: String) {
    this.operationType = operationType;
    this.merchantID = merchantID;
    this.sign = sign;
    this.request = request;
  }
}
