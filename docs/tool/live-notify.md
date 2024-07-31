# 直播通知設定

::: danger
目前只有支援 Twitch 開台通知。
:::

預覽直播通知

![Image](/images/tool/live-notify.png)

## 取得 Webhook 網址

::: danger 由於 Discord 限制，自己帳號建立的 Webhook 是沒辦法使用「觀看直播」（如下圖）按鈕的，如果用了自己的 Webhook 會沒辦法顯示該按鈕。
![Image](https://image.haer0248.me/pJqS2N.png)
:::

首先 [邀請機器人](https://discord.com/oauth2/authorize?client_id=1083697241711181864)

加入伺服器後到任一頻道中輸入以下指令取得網址

:::: code-group
::: code-group-item 斜線指令
```:no-line-numbers
/webhook channel channel:#channel
```
:::
::::

![Image](/images/tool/live-notify-2.png)

依照步驟建立 Webhook 網址，建立成功後會在聊天室中顯示，複製即可。

![Image](/images/tool/live-notify-3.png)

依照輸入框要求，輸入即可

![Image](/images/tool/live-notify-6.png)

::: tip 取得身分組編號
在 Discord 聊天室中輸入 `/roleid role @role`  
![Image](/images/tool/live-notify-7.png)
:::

## 刪除 Webhook 網址

![Image](/images/tool/live-notify-4.png)

找到建立的 Webhook 刪除即可

![Image](/images/tool/live-notify-5.png)
