# 媒體點播

::: warning
此功能並沒有開放給所有平台使用者可使用，若您的頁面上方沒有出現這個頁籤，請聯繫您的平台管理人員詢問。
:::

::: tip 注意事項
- 媒體點播會在斗內通知後自動發送（若設定自動播放），不用手動點選播放。
- 媒體點播瀏覽器與斗內通知瀏覽器是分開的。
- 當開啟自動播放佇列的時候，已經加入到影片佇列的影片不會因為取消自動播放而取消。
- 媒體內容設定所有必須重新整理 OBS 上瀏覽器畫面才會被套用。
- 建議不要開啟自動播放，手動審核過後再進行播放，避免有問題的媒體出現。
- 當 OBS 沒有成功連線時，這邊的按鈕會無法運作，並且會提醒無法連線。
:::

## 播放媒體
點選列表中任一媒體，就會跳出預覽視窗，可以先由自己的瀏覽器預覽影片內容，再選擇播放、刪除、封鎖或回報給平台。

![Image](/images/features/media-request/page.png)

![Image](/images/features/media-request/2.png)

## 媒體內容設定
在側邊，您可以控制正在播放中的媒體暫停或繼續。  
也可以設定音量、長度、進退場特效、是否顯示點播資訊、顏色等。  

### 媒體控制

![Image](/images/features/media-request/control.png)

|按鈕|說明|
|---|---|
|播放|播放目前媒體（媒體顯示中才可以使用）|
|暫停|暫停目前媒體（媒體顯示中才可以使用）|
|咖歌|中斷目前播放中媒體（媒體顯示中才可以使用）|
|新增媒體|從後台加入媒體|
|重整|遠端從後台重整執行中的瀏覽器|
|啟用點播功能|開啟後，這個頁面的所有行為才可以使用，斗內頁面才會出現輸入框|
|暫停點播|將會停用斗內頁面及忠誠點數的點歌功能|

### 佇列功能

:::warning
佇列並不會自動更新！只能手動更新！
:::

當有太多的媒體在點播系統中，但又想要做其他事情而不想播放，可以先將目前的媒體點播佇列儲存到暫存的檔案中，等到結束後或下次再拿出來播放。

![Image](/images/features/media-request/queue.png)

### 媒體內容設定
音量、特效、點播資訊等樣式設定都在這邊

![Image](/images/features/media-request/content.png)

### 媒體限制設定

![Image](/images/features/media-request/limit.png)

#### 全域封鎖
平台有一個封鎖資料庫，若有其他實況主檢舉媒體會／疑似／可能造成頻道被封鎖（金字塔）或是媒體內容造成實況主、觀眾不適，平台方進行審核之後，就會將媒體列入封鎖資料庫，當有觀眾進行點播的時候就會被阻止點播。

#### 重複點播
當媒體已經存在於右側的列表中，就無法再被重複點播該媒體。

#### 最長媒體長度
格式為秒數，設定最長可以點幾秒的媒體。

#### 最低點播金額
此設定僅套用於斗內頁面，當有啟用斗內點播功能時，這邊才有用。

#### 最低瀏覽量
基本阻擋新上傳或是低於設定瀏覽量的媒體。

### 點播封鎖名單
有使用者惡意點播媒體嗎？這邊可以進行封鎖使用者點播功能。
使用方式：點選該使用者點播的媒體，點選下方按鈕「新增為封鎖使用者」即可。
若點播內容非常不適當在公開場合放出，可以再回報給平台，審核後我們會加入媒體全域封鎖名單中。

![Image](/images/features/media-request/block.png)

### Twitch 忠誠點數點播
::: warning 此功能僅有啟用忠誠點數兌換的使用者可以使用。 
:::
當將回應設定為 `mediaRequest`，並將 `要求觀眾輸入文字` 啟用，就可以把忠誠點數兌換設定為媒體點播，觀眾可以直接透過忠誠點數點播影片。

![Image](/images/features/media-request/4.png)

![Image](/images/features/media-request/twitch-preview.png)
