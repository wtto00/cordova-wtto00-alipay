# cordova-plugin-alipay

cordova 支付宝支付插件，适配最新版本 2023/5/12

- 支持最新版本支付宝 SDK（2023/5//12）
- 支持安卓 13
- 带有 TypeScript 类型支持
- 附带完整注释

---

## 支持平台

1. android
2. ~~iOS~~

> 暂不支持 IOS

---

## 安装

```shell
cordova plugin add git@github.com:wtto00/cordova-plugin-alipay.git --variable APP_ID=your AppId
```

---

## 使用 API

1. 订单在服务端签名生成订单信息，具体请参考官网进行[订单签名](https://docs.open.alipay.com/204/105465/)

   带有签名信息的订单信息示例

   ```javascript
   var orderInfo =
     "app_id=2015052600090779&biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%221%22%2C%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%22%2C%22out_trade_no%22%3A%22IQJZSRC1YMQB5HU%22%7D&charset=utf-8&format=json&method=alipay.trade.app.pay&notify_url=http%3A%2F%2Fdomain.merchant.com%2Fpayment_notify&sign_type=RSA2&timestamp=2016-08-25%2020%3A26%3A31&version=1.0&sign=cYmuUnKi5QdBsoZEAbMXVMmRWjsuUj%2By48A2DvWAVVBuYkiBj13CFDHu2vZQvmOfkjE0YqCUQE04kqm9Xg3tIX8tPeIGIFtsIyp%2FM45w1ZsDOiduBbduGfRo1XRsvAyVAv2hCrBLLrDI5Vi7uZZ77Lo5J0PpUUWwyQGt0M4cj8g%3D";
   ```

2. 调用支付插件

   ```javascript
   cordova.plugins.alipay.payment(
     orderInfo,
     (e) => {
       // e.resultStatus: '9000'|'8000'|'6004'
       console.log("支付成功" + e.resultStatus);
       //TODO 服务器检查支付结果
     },
     (e) => {
       console.log("支付失败" + e.resultStatus);
     }
   );
   ```
