import{_ as i,r as s,c as r,d as e,w as a,a as n,o as c,b as t,e as l}from"./app-D46ODKzE.js";const h={},p=n('<h1 id="通知-進度條" tabindex="-1"><a class="header-anchor" href="#通知-進度條"><span>通知＆進度條</span></a></h1><div class="custom-container warning"><p class="custom-container-title">注意</p><ul><li>通知的格式跟進度條是綁定在一起的！當觀眾選擇某一條進度條，跑出的格式就會是該條進度條設定的格式。</li><li>最多可以設定 1（預設） + 3 條不同進度的進度條。</li><li>每個使用者頁面可能會長的不一樣，但是「OBS 通知格式」每個人都會有。</li></ul></div><h2 id="進度條設定" tabindex="-1"><a class="header-anchor" href="#進度條設定"><span>進度條設定</span></a></h2><table><thead><tr><th>文字</th><th>預設/範例</th><th>說明</th></tr></thead><tbody><tr><td>顯示於斗內頁面</td><td>關閉</td><td>斗內頁面中可以選擇該條進度條</td></tr><tr><td>達成目標</td><td>本月伙食費</td><td>這條進度條的目標是什麼</td></tr><tr><td>達成金額/點數（設定 0 即關閉）</td><td>500</td><td>這條進度條的目標數量是多少</td></tr><tr><td>預設顯示金額/點數</td><td>0</td><td>要設定多少預設顯示在進度條中（或是額外多少？）</td></tr><tr><td>DonationGoal 進度條樣式文字位置</td><td>中間</td><td>某一條進度條的樣式位置</td></tr><tr><td>文字顏色</td><td></td><td>文字顏色</td></tr><tr><td>起始漸層背景顏色</td><td></td><td>起始漸層背景顏色</td></tr><tr><td>結束漸層背景顏色</td><td></td><td>結束漸層背景顏色</td></tr></tbody></table><h3 id="進度條指定時間" tabindex="-1"><a class="header-anchor" href="#進度條指定時間"><span>進度條指定時間</span></a></h3><div class="custom-container tip"><p class="custom-container-title">自動調整達成時間為「今日」、自動調整達成時間為「本月」以及手動指定時間只能【擇一設定】。但沒有設定其中一個將不會被計算。</p></div><p>手動指定時間：手動指定一個時間區間，計算斗內的總數。<br> 自動指定時間：讓平台協助你自動指定「今日」（00:00 ~ 23:59）、「本月」（07/01 00:00 ~ 07/31 23:59）</p><h2 id="進度條樣式" tabindex="-1"><a class="header-anchor" href="#進度條樣式"><span>進度條樣式</span></a></h2><h3 id="可使用參數" tabindex="-1"><a class="header-anchor" href="#可使用參數"><span>可使用參數</span></a></h3><table><thead><tr><th>參數</th><th>設定</th><th>說明</th><th>適用樣式</th></tr></thead><tbody><tr><td>v</td><td>1, 2, 3, 4<br>subs, follow, bits, subs-gift</td><td>進度條編號</td><td>所有皆可</td></tr><tr><td>reverse</td><td>true (是), false (否)</td><td>將進度反向顯示</td><td>DonationGoal<br>DonationGoal1<br>DonationGoal2<br>DonationGoal2R</td></tr><tr><td>size</td><td>30 (整數)</td><td>文字大小</td><td>DonationGoal1<br>DonationGoal2R<br>DonationClear</td></tr><tr><td>radius</td><td>true (是), false (否)</td><td>將進度條設為圓角</td><td>DonationGoal<br>DonationGoal1<br>DonationGoal2R</td></tr><tr><td>template</td><td>指定格式（請看旁邊樣式選擇）</td><td>DonationClear文字位置</td><td>DonationGoal</td></tr><tr><td>no-percent</td><td>true (是), false (否)</td><td>不顯示 xx%</td><td>DonationGoal<br>DonationGoal1</td></tr><tr><td>only-percent</td><td>true (是), false (否)</td><td>僅顯示 xx%</td><td>DonationGoal<br>DonationGoal1</td></tr><tr><td>no-comma</td><td>true (是), false (否)</td><td>不顯示格式化千分位</td><td>所有皆可</td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">參數使用教學</p><table><thead><tr><th style="text-align:left;">範例</th></tr></thead><tbody><tr><td style="text-align:left;">Widgets/<code>樣式名稱</code>/<code>您的 UUID</code>?v=1&amp;reverse=true&amp;radius=true</td></tr></tbody></table><table><thead><tr><th style="text-align:left;">沒有問號</th></tr></thead><tbody><tr><td style="text-align:left;">Widgets/<code>樣式名稱</code>/<code>您的 UUID</code>?radius=true</td></tr></tbody></table><table><thead><tr><th style="text-align:left;">有問號</th></tr></thead><tbody><tr><td style="text-align:left;">Widgets/<code>樣式名稱</code>/<code>您的 UUID</code>?v=2&amp;radius=true</td></tr></tbody></table><table><thead><tr><th style="text-align:left;">有問號、有連結號</th></tr></thead><tbody><tr><td style="text-align:left;">Widgets/<code>樣式名稱</code>/<code>您的 UUID</code>?v=2&amp;radius=true&amp;size=70</td></tr></tbody></table></div><p>樣式名稱：<code>DonationGoal</code></p><p><img src="https://image.haer0248.me/HUIx8n.png" alt="Image"></p><p>樣式名稱：<code>DonationGoal1</code></p><p><img src="https://image.haer0248.me/YX9iDy.png" alt="Image"></p><p>樣式名稱：<code>DonationGoal2</code></p><p><img src="https://image.haer0248.me/iYp5zQ.png" alt="Image"></p><p>樣式名稱：<code>DonationGoal2R</code></p><p><img src="https://image.haer0248.me/G4uccz.png" alt="Image"></p><p>樣式名稱：<code>DonationGoalBar</code></p><p><img src="https://image.haer0248.me/1qxvtk.png" alt="Image"></p><p>樣式名稱：<code>DonationClear</code></p><p><img src="https://image.haer0248.me/46wdH0.png" alt="Image"></p><div class="custom-container tip"><p class="custom-container-title">DonationClear 額外可設定資料</p><ol><li>網址後方設定 <code>?template=</code> 來選擇要怎麼顯示進度條格式<br> 使用 <code>{title}</code> 覆蓋為目標標題，<code>{goal}</code> 目標金額，<code>{total}</code> 已斗內金額。</li><li>設定範例<br> Widgets/DonationClear/您的 UUID<code>?template=讓我達成 {title}！</code> 就會顯示為 <strong>讓我達成 {目標標題}！</strong></li><li>同時設定另一個進度條則是 <code>?template=讓我達成 {title}！&amp;v=2</code>，就會計算為進度條２並顯示自訂格式訊息。</li></ol></div><h2 id="通知格式" tabindex="-1"><a class="header-anchor" href="#通知格式"><span>通知格式</span></a></h2><h3 id="可使用參數-1" tabindex="-1"><a class="header-anchor" href="#可使用參數-1"><span>可使用參數</span></a></h3><table><thead><tr><th>參數</th><th>資料</th></tr></thead><tbody><tr><td><code>{name}</code></td><td>觀眾暱稱</td></tr><tr><td><code>{amount}</code></td><td>斗內金額</td></tr><tr><td><code>{comment}</code></td><td>附帶<code>，留言「」</code>的留言格式</td></tr><tr><td><code>{only_comment}</code></td><td>純留言</td></tr></tbody></table><h3 id="obs-通知格式-通知標題" tabindex="-1"><a class="header-anchor" href="#obs-通知格式-通知標題"><span>OBS 通知格式（通知標題）</span></a></h3><blockquote><p>就是顯示在 OBS 瀏覽器上的通知。</p></blockquote><p><img src="https://image.haer0248.me/jUHrs2.png" alt="Image"></p><div class="custom-container danger"><p class="custom-container-title">警告</p><ul><li>避免使用者沒有顯示通知，即使沒有設定，還是會顯示 <code>感謝 {name} 斗內 {amount} 元！</code>。</li><li>不需要自己輸入 <code>{comment}</code> 或是 <code>{only_comment}</code>。</li></ul></div>',31),m=t("div",{class:"language-text","data-highlighter":"prismjs","data-ext":"text","data-title":"text"},[t("pre",null,[t("code",null,[t("span",{class:"line"},"感謝 {name} 斗內 {amount} 元！"),l(`
`),t("span",{class:"line"})])])],-1),g=t("div",{class:"language-text","data-highlighter":"prismjs","data-ext":"text","data-title":"text"},[t("pre",null,[t("code",null,[t("span",{class:"line"},"{name} 給了貓 {amount} 元摳摳🪙<br>讓貓這個月又可以不用吃土啦！"),l(`
`),t("span",{class:"line"})])])],-1),u=n('<h3 id="discord-通知格式" tabindex="-1"><a class="header-anchor" href="#discord-通知格式"><span>Discord 通知格式</span></a></h3><div class="custom-container warning"><p class="custom-container-title">注意</p><p>此功能並沒有開放給所有平台使用者可使用，若您的頁面中沒有出現這個功能，請聯繫您的平台管理人員詢問。</p></div><p><img src="https://image.haer0248.me/54DRry.png" alt="Image"></p>',3),b=t("div",{class:"language-text","data-highlighter":"prismjs","data-ext":"text","data-title":"text"},[t("pre",null,[t("code",null,[t("span",{class:"line"},"感謝 {name} 斗內 {amount} 元{comment}！"),l(`
`),t("span",{class:"line"})])])],-1),x=t("div",{class:"language-text","data-highlighter":"prismjs","data-ext":"text","data-title":"text"},[t("pre",null,[t("code",null,[t("span",{class:"line"},"{name} 給了貓 {amount} 元摳摳讓貓這個月又可以不用吃土啦{comment}！"),l(`
`),t("span",{class:"line"})])])],-1),f=n('<h3 id="twitch-通知格式" tabindex="-1"><a class="header-anchor" href="#twitch-通知格式"><span>Twitch 通知格式</span></a></h3><div class="custom-container warning"><p class="custom-container-title">注意</p><p>此功能並沒有開放給所有平台使用者可使用，若您的頁面中沒有出現這個功能，請聯繫您的平台管理人員詢問。</p></div><p><img src="https://image.haer0248.me/hUmxna.png" alt="Image"></p>',3),_=t("div",{class:"language-text","data-highlighter":"prismjs","data-ext":"text","data-title":"text"},[t("pre",null,[t("code",null,[t("span",{class:"line"},"感謝 {name} 斗內 {amount} 元{comment}！"),l(`
`),t("span",{class:"line"})])])],-1),v=t("div",{class:"language-text","data-highlighter":"prismjs","data-ext":"text","data-title":"text"},[t("pre",null,[t("code",null,[t("span",{class:"line"},"{name} 給了貓 {amount} 元摳摳讓貓這個月又可以不用吃土啦{comment}！"),l(`
`),t("span",{class:"line"})])])],-1);function D(y,G){const d=s("CodeGroupItem"),o=s("CodeGroup");return c(),r("div",null,[p,e(o,null,{default:a(()=>[e(d,{title:"預設格式"},{default:a(()=>[m]),_:1}),e(d,{title:"預覽圖片格式"},{default:a(()=>[g]),_:1})]),_:1}),u,e(o,null,{default:a(()=>[e(d,{title:"預設格式"},{default:a(()=>[b]),_:1}),e(d,{title:"預覽圖片格式"},{default:a(()=>[x]),_:1})]),_:1}),f,e(o,null,{default:a(()=>[e(d,{title:"預設格式"},{default:a(()=>[_]),_:1}),e(d,{title:"預覽圖片格式"},{default:a(()=>[v]),_:1})]),_:1})])}const k=i(h,[["render",D],["__file","progress-and-notify.html.vue"]]),w=JSON.parse('{"path":"/platform-settings/progress-and-notify.html","title":"通知＆進度條","lang":"zh-TW","frontmatter":{},"headers":[{"level":2,"title":"進度條設定","slug":"進度條設定","link":"#進度條設定","children":[{"level":3,"title":"進度條指定時間","slug":"進度條指定時間","link":"#進度條指定時間","children":[]}]},{"level":2,"title":"進度條樣式","slug":"進度條樣式","link":"#進度條樣式","children":[{"level":3,"title":"可使用參數","slug":"可使用參數","link":"#可使用參數","children":[]}]},{"level":2,"title":"通知格式","slug":"通知格式","link":"#通知格式","children":[{"level":3,"title":"可使用參數","slug":"可使用參數-1","link":"#可使用參數-1","children":[]},{"level":3,"title":"OBS 通知格式（通知標題）","slug":"obs-通知格式-通知標題","link":"#obs-通知格式-通知標題","children":[]},{"level":3,"title":"Discord 通知格式","slug":"discord-通知格式","link":"#discord-通知格式","children":[]},{"level":3,"title":"Twitch 通知格式","slug":"twitch-通知格式","link":"#twitch-通知格式","children":[]}]}],"git":{"updatedTime":1722081258000},"filePathRelative":"platform-settings/progress-and-notify.md"}');export{k as comp,w as data};
