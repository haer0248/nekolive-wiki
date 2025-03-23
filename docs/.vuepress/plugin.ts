import type { PluginConfig } from '@vuepress/core'
import { searchProPlugin } from "vuepress-plugin-search-pro";

const plugins: PluginConfig = [
    searchProPlugin({
        indexContent: true,
        locales: {
            '/': {
                cancel: "取消",
                placeholder: "搜尋",
                search: "搜尋",
                searching: "搜尋中",
                defaultTitle: "文件",
                select: "選擇",
                navigate: "切換",
                autocomplete: "自動補齊",
                exit: "關閉",
                queryHistory: "搜尋歷史",
                resultHistory: "歷史結果",
                emptyHistory: "無搜尋歷史",
                emptyResult: "沒有找到資料",
                loading: "正在讀取索引...",
            }
        }
    }),    
];

export default plugins;