declare namespace AliPay {
  /**
   * 支付状态码
   */
  const ResultStatus: Record<number | string, string?>;

  /**
   * 支付宝 SDK 返回的信息
   *
   * 具体参见 [支付宝官方文档](https://opendocs.alipay.com/open/204/105302)
   */
  interface Result {
    /**
     * 状态代码
     * 9000 订单支付成功
     * 8000 正在处理中
     * 4000 订单支付失败
     * 6001 用户中途取消
     * 6002 网络连接出错
     * 6004 支付结果未知
     * 其它  其它支付错误
     *
     * e.g. '9000'
     *
     * resultStatus='9000' 并不代表真实支付成功
     * 请去服务端验证支付结果
     * 建议商户依赖异步通知同步返回的结果必须放置到服务端进行验证，
     * 具体请查看[验证的规则](https://doc.open.alipay.com/doc2/detail.htmspm=0.0.0.0.xdvAU6&treeId=59&articleId=103665&docType=1)。
     */
    resultStatus: string;
    /**
     * 字段说明参见 [支付宝 APP 支付](https://opendocs.alipay.com/open/cd12c885_alipay.trade.app.pay)
     *
     * e.g.
     * ```json
     * {
     *  alipay_trade_app_pay_response: {
     *    code: '10000',
     *    msg: 'Success',
     *    app_id: '20...',
     *    auth_app_id: '20...',
     *    charset: 'utf-8',
     *    timestamp: '2023-05-12 19:39:15',
     *    out_trade_no: '...',
     *    total_amount: '1.00',
     *    trade_no: '2023...',
     *    seller_id: '...',
     *  },
     *  sign: '...',
     *  sign_type: 'RSA2'
     * }
     * ```
     */
    result?: string;
    /**
     * e.g. ''
     */
    memo?: string;
    /**
     * e.g.
     * ```json
     * {
     *  doNotExit: true,
     *  isDisplayResult: true,
     *  tradeNo: '2023...'
     * }
     * ```
     */
    extendlnfo?: string;
  }

  /**
   * 支付宝拉起支付
   * @param orderInfo 服务端返回的订单信息
   * @param onSuccess data.resultStatus === '9000'时，调用此回调
   * @param onFail data.resultStatus !== '9000'时，调用此回调
   */
  function payment(
    orderInfo: string,
    onSuccess: (data: Result) => void,
    onFail: (data: Result) => void
  ): void;
}

interface CordovaPlugins {
  alipay: typeof AliPay;
}
