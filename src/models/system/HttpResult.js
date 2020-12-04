const HttpStatus = require("./HttpStatus");

class HttpResult extends Map {
  constructor(code, msg) {
    super();
    this.set(HttpResult.CODE_TAG, code);
    this.set(HttpResult.MSG_TAG, msg);  
  }
  static result(code, msg) {
    return new HttpResult(code, msg);
  }
  static success() {
    return this.result(HttpStatus.SUCCESS, '操作成功');
  }
  static error() {
    return this.result(HttpStatus.ERROR, '网络请求错误');
  }

}

HttpResult.CODE_TAG = 'code';
HttpResult.MSG_TAG = 'msg';
HttpResult.DATA_TAG = 'data';

module.exports = HttpResult;