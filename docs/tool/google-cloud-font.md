# Google 雲端字體

前往 [Google Fonts](https://fonts.google.com/) 挑選想要的字體，點選 `Get Font`

![Image](/images/tool/google-font.png)

跳到新的頁面，可以選擇 `Get Embed Code` → 不下載到設備，直接透過網址取得字體  

![Image](/images/tool/google-font-2.png)

或是 `Download all` → 下載到設備，不透過網址設定字體  
下載後，記得解壓縮並安裝字體。

![Image](/images/tool/google-font-3.png)

## 使用字體
取得字體網址
:::: code-group
::: code-group-item 網址格式
```:no-line-numbers
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap')
```
:::
::: code-group-item 計時器頁面網址
```:no-line-numbers
https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap
```
:::
::::
![Image](/images/tool/google-font-4.png)
![Image](/images/tool/google-font-5.png)

### 不下載到設備使用字體
開啟 OBS 瀏覽器，在自訂 CSS 最上方貼上包含 @import 的網址，並指定網頁使用字體為 `Noto Sans TC`。  

:::: code-group
::: code-group-item CSS
```css:no-line-numbers
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap')
html, body {
    font-family: 'Noto Sans TC' !important;
}
```
:::
::::
![Image](/images/tool/google-font-6.png)

### 下載到設備使用字體
這邊使用 [俐方體11號](https://github.com/ACh-K/Cubic-11) 當作範例。  
下載後，記得解壓縮並安裝字體。

:::: code-group
::: code-group-item CSS
```css:no-line-numbers
html, body {
    font-family: '俐方體11號' !important;
}
```
:::
::::
![Image](/images/tool/google-font-7.png)