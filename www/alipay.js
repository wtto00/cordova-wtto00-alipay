var exec = require("cordova/exec");

exports.payment = function (payInfo, success, error) {
  exec(success, error, "alipay", "payment", [payInfo]);
};

exports.ResultStatus = {
  9000: "订单处理成功",
  8000: "正在处理中",
  4000: "订单支付失败",
  6001: "用户中途取消",
  6002: "网络连接出错",
  6004: "支付结果未知",
};
