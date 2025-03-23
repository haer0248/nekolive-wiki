# 收款金流

::: danger 如果沒有設定此頁面其中一個金流功能將無法使用斗內頁面進行收款，請記得一定要設定！
:::
目前支援 [綠界科技](https://www.ecpay.com.tw/)、[歐付寶](https://www.opay.tw/)、[Paypal](https://www.paypal.com/tw/home)、[統一金流](https://www.payuni.com.tw/)、[藍新金流](https://www.newebpay.com/)。  
::: warning 綠界／歐付寶使用者請注意
平台的串接方式是透過 API 串接，並不是擷取伺服器的回傳資料，所以查詢訂單並不是在實況主收款明細。  
請切換至 [（綠界）帳務管理 / 銷售明細](https://payment.ecpay.com.tw/SellerMember/QueryTrade) / [（歐付寶）帳務管理 / 銷售明細](https://payment.opay.tw/SellerMember/QueryTrade) 查詢。
:::

為避免有人將隱私資料顯示在畫面上（可能有人想要介紹平台？），左上角落有一顆「顯示隱私介接資訊」按鈕，如果想要確認資料是否輸入正確，可以點選來顯示。
  
以下資料都是模擬環境資料，不要跟著輸入。

## 查詢資料教學

### [綠界科技](https://vendor.ecpay.com.tw/Frame/Index)

登入廠商後台 / 系統開發管理 / 系統介接設定

![Image](/images/platform-settings/platform/ecpay.png)

### [歐付寶](https://vendor.opay.tw/Frame/Index)

登入廠商後台 / 系統開發管理 / 系統介接設定

![Image](/images/platform-settings/platform/opay.png)

### [Paypal](https://www.paypal.com/commercesetup/APICredentials)

點選上方連結，登入 Paypal 帳號  
複製一個啟用環境在 Live 的 `Client ID` 與 `Secret`  

::: warning
必須升級您的帳號為 **商業帳號** 才可以使用收款 API 功能。
:::

![Image](/images/platform-settings/platform/paypal.png)

### [藍新金流](https://www.newebpay.com/)

![Image](/images/platform-settings/platform/newebpay.png)  
![Image](/images/platform-settings/platform/newebpay-2.png)  
![Image](/images/platform-settings/platform/newebpay-3.png)  
![Image](/images/platform-settings/platform/newebpay-4.png)

### [統一金流](https://www.payuni.com/)

![Image](/images/platform-settings/platform/payuni.png)  
![Image](/images/platform-settings/platform/payuni-2.png)  
![Image](/images/platform-settings/platform/payuni-3.png)  