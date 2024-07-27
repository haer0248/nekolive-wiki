# 通知＆進度條

::: warning
- 通知的格式跟進度條是綁定在一起的！當觀眾選擇某一條進度條，跑出的格式就會是該條進度條設定的格式。
- 最多可以設定 1（預設） + 3 條不同進度的進度條。
- 每個使用者頁面可能會長的不一樣，但是「OBS 通知格式」每個人都會有。
:::

## 進度條設定

|文字|預設/範例|說明|
|---|---|---|
|顯示於斗內頁面|關閉|斗內頁面中可以選擇該條進度條|
|達成目標|本月伙食費|這條進度條的目標是什麼|
|達成金額/點數（設定 0 即關閉）|500|這條進度條的目標數量是多少|
|預設顯示金額/點數|0|要設定多少預設顯示在進度條中（或是額外多少？）|
|DonationGoal 進度條樣式文字位置|中間|某一條進度條的樣式位置|
|文字顏色||文字顏色|
|起始漸層背景顏色||起始漸層背景顏色|
|結束漸層背景顏色||結束漸層背景顏色|

### 進度條指定時間

::: tip 自動調整達成時間為「今日」、自動調整達成時間為「本月」以及手動指定時間只能【擇一設定】。但沒有設定其中一個將不會被計算。
:::

手動指定時間：手動指定一個時間區間，計算斗內的總數。  
自動指定時間：讓平台協助你自動指定「今日」（00:00 ~ 23:59）、「本月」（07/01 00:00 ~ 07/31 23:59）

## 進度條樣式

### 可使用參數
|參數|設定|說明|適用樣式|
|---|---|---|---|
|v|1, 2, 3, 4<br>subs, follow, bits, subs-gift|進度條編號|所有皆可|
|reverse|true (是), false (否)|將進度反向顯示|DonationGoal<br>DonationGoal1<br>DonationGoal2<br>DonationGoal2R|
|size|30 (整數)|文字大小|DonationGoal1<br>DonationGoal2R<br>DonationClear|
|radius|true (是), false (否)|將進度條設為圓角|DonationGoal<br>DonationGoal1<br>DonationGoal2R|
|template|指定格式（請看旁邊樣式選擇）|DonationClear文字位置|DonationGoal|
|no-percent|true (是), false (否)|不顯示 xx%|DonationGoal<br>DonationGoal1|
|only-percent|true (是), false (否)|僅顯示 xx%|DonationGoal<br>DonationGoal1|
|no-comma|true (是), false (否)|不顯示格式化千分位|所有皆可|

::: tip 參數使用教學
|範例|
|:---|
|Widgets/`樣式名稱`/`您的 UUID`?v=1&reverse=true&radius=true|

|沒有問號|
|:---|
|Widgets/`樣式名稱`/`您的 UUID`?radius=true|

|有問號|
|:---|
|Widgets/`樣式名稱`/`您的 UUID`?v=2&radius=true|

|有問號、有連結號|
|:---|
|Widgets/`樣式名稱`/`您的 UUID`?v=2&radius=true&size=70|
:::

樣式名稱：`DonationGoal`  

![Image](https://image.haer0248.me/HUIx8n.png)

樣式名稱：`DonationGoal1`  

![Image](https://image.haer0248.me/YX9iDy.png)

樣式名稱：`DonationGoal2`  

![Image](https://image.haer0248.me/iYp5zQ.png)

樣式名稱：`DonationGoal2R`  

![Image](https://image.haer0248.me/G4uccz.png)

樣式名稱：`DonationGoalBar`  

![Image](https://image.haer0248.me/1qxvtk.png)

樣式名稱：`DonationClear`  

![Image](https://image.haer0248.me/46wdH0.png)

::: tip DonationClear 額外可設定資料
1. 網址後方設定 `?template=` 來選擇要怎麼顯示進度條格式  
使用 `{title}` 覆蓋為目標標題，`{goal}` 目標金額，`{total}` 已斗內金額。  
2. 設定範例  
Widgets/DonationClear/您的 UUID`?template=讓我達成 {title}！` 就會顯示為 **讓我達成 {目標標題}！**  
3. 同時設定另一個進度條則是 `?template=讓我達成 {title}！&v=2`，就會計算為進度條２並顯示自訂格式訊息。
:::

## 通知格式

### 可使用參數
|參數|資料|
|---|---|
|`{name}`|觀眾暱稱|
|`{amount}`|斗內金額|
|`{comment}`|附帶`，留言「」`的留言格式|
|`{only_comment}`|純留言|

### OBS 通知格式（通知標題）

> 就是顯示在 OBS 瀏覽器上的通知。

![Image](https://image.haer0248.me/jUHrs2.png)

::: danger
- 避免使用者沒有顯示通知，即使沒有設定，還是會顯示 `感謝 {name} 斗內 {amount} 元！`。
- 不需要自己輸入 `{comment}` 或是 `{only_comment}`。
:::

:::: code-group
::: code-group-item 預設格式
```:no-line-numbers
感謝 {name} 斗內 {amount} 元！
```
:::
::: code-group-item 預覽圖片格式
```:no-line-numbers
{name} 給了貓 {amount} 元摳摳🪙<br>讓貓這個月又可以不用吃土啦！
```
:::
::::

### Discord 通知格式
::: warning
此功能並沒有開放給所有平台使用者可使用，若您的頁面中沒有出現這個功能，請聯繫您的平台管理人員詢問。
:::

![Image](https://image.haer0248.me/54DRry.png)

:::: code-group
::: code-group-item 預設格式
```:no-line-numbers
感謝 {name} 斗內 {amount} 元{comment}！
```
:::
::: code-group-item 預覽圖片格式
```:no-line-numbers
{name} 給了貓 {amount} 元摳摳讓貓這個月又可以不用吃土啦{comment}！
```
:::
::::

### Twitch 通知格式
::: warning
此功能並沒有開放給所有平台使用者可使用，若您的頁面中沒有出現這個功能，請聯繫您的平台管理人員詢問。
:::

![Image](https://image.haer0248.me/hUmxna.png)

:::: code-group
::: code-group-item 預設格式
```:no-line-numbers
感謝 {name} 斗內 {amount} 元{comment}！
```
:::
::: code-group-item 預覽圖片格式
```:no-line-numbers
{name} 給了貓 {amount} 元摳摳讓貓這個月又可以不用吃土啦{comment}！
```
:::
::::