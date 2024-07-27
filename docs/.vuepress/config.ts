import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite';

import sidebar from './sidebar'

const config = defineUserConfig({
    base: '/nekolive-wiki/',
    lang: 'zh-TW',
    title: '實況主斗內平台文件',
    description: '',
    head: [
        ['meta', { charset: 'utf-8' }],
        ['meta', { name: 'theme-color', content: '#ABD1E8' }],
        ['link', { rel: 'shortcut icon', href: './images/favicon.ico' }],
        ['link', { rel: 'icon', href: './images/favicon-16x16.png', sizes: '16x16' }],
        ['link', { rel: 'icon', href: './images/favicon-32x32.png', sizes: '32x32' }],
        ['link', { rel: 'icon', href: './images/favicon-64x64.png', sizes: '64x64' }],
        ['link', { rel: 'icon', href: './images/favicon-128x128.png', sizes: '128x128' }],
        ['link', { rel: 'icon', href: './images/favicon-180x180.png', sizes: '180x180' }],
        ['link', { rel: 'icon', href: './images/favicon-192x192.png', sizes: '192x192' }],
        ['link', { rel: 'icon', href: './images/favicon-384x384.png', sizes: '384x384' }],
        ['link', { rel: 'apple-touch-icon-precomposed', href: './images/favicon-256x256.png' }],
        ['link', { rel: 'image_src', type: 'image/png', href: './images/favicon-256x256.png' }],
        ['meta', { name: 'msapplication-TileImage', content: './images/favicon-256x256.png' }]
    ],

    bundler: viteBundler({
        viteOptions: {},
        vuePluginOptions: {},
    }),

    theme: defaultTheme({
        sidebar,
        home: '/',
        logo: '/images/favicon-64x64.png',
        sidebarDepth: 3,
        repo: 'haer0248/nekolive-wiki',
        docsRepo: 'haer0248/nekolive-wiki',
        docsBranch: 'main',
        docsDir: 'docs',
        editLink: true,
        editLinkPattern: ':repo/edit/:branch/:path',
        editLinkText: '在 GitHub 上面編輯此頁面',
        lastUpdated: true,
        lastUpdatedText: '最後更新',
        contributors: false,
        contributorsText: '貢獻者',
        backToHome: '回首頁',
        openInNewWindow: '在新視窗中開啟',
        toggleColorMode: '切換主題',
        toggleSidebar: '切換側邊欄',
        tip: '提示',
        warning: '注意',
        danger: '警告',
        notFound: [
            '找不到你要的東西呢。'
        ],
        navbar: false,
        // navbar: [{
        //     text: '實況主斗內平台',
        //     link: 'https://nekolive.net/'
        // }, {
        //     text: '支援 Discord',
        //     link: 'https://discord.gg/VaQAY2s'
        // }, {
        //     text: '開發者',
        //     children: [{
        //         text: '飯糰 Blog',
        //         link: 'https://haer0248.me/'
        //     }, {
        //         text: 'Twitter',
        //         link: 'https://twitter.com/haer0248'
        //     }]
        // }]
    }),
})

export default config