export class Result {
  success: boolean;        // 王康增加success字段
  code: number;
  message: string;
  data: any;


  constructor(success: boolean, code: number, message: string, data: any) {
    this.success = success;
    this.code = code;
    this.message = message;
    this.data = data;
  }
}
