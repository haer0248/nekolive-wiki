# 斗內列表樣式

## 可設定參數

|文字|說明|
|---|---|
|上層底顏色||
|上層文字顏色|不提供漸層|
|下層底顏色||
|下層文字顏色|不提供漸層|
|最右側圖片||

![Image](/images/platform-settings/chatlist.png)

[減層設定教學](../tool/gradient)

## 斗內列表樣式

### 可使用參數
|參數|設定|預設值|說明|
|---|---|---|---|
|limit|整數|99|限制要顯示多少則斗內訊息|
|horzied|true (是), false (否)|false|以水平方式顯示斗內列表|
|size|整數|300|設定在水平模式下，單個斗內訊息的寬度<br>（建議設定 200 以上）|
|no-newline|true (是), false (否)|false|超出寬度時，文字最後方顯示 ...|
|keep-box|true (是), false (否)|false|沒有留言時下方保留空白|
|hide-avatar|true (是), false (否)|false|隱藏頭貼|
|no-comma|true (是), false (否)|false|不顯示格式化千分位|

::: tip 參數使用教學
|範例|
|:---|
|Widgets/`樣式名稱`/`您的 UUID`?limit=3&horzied=true|

|沒有問號|
|:---|
|Widgets/`樣式名稱`/`您的 UUID`?limit=3|

|有問號|
|:---|
|Widgets/`樣式名稱`/`您的 UUID`?limit=3&hide-avatar=true|

|有問號、有連結號|
|:---|
|Widgets/`樣式名稱`/`您的 UUID`?limit=3&horzied=true&size=300|
:::

樣式名稱：`ChatList`  

![Image](https://image.haer0248.me/mCSW5q.png)

樣式名稱：`ChatList2`  

![Image](https://image.haer0248.me/eHQj3d.png)
