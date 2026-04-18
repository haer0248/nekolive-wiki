// import { SidebarConfig } from '@vuepress/theme-default'

const sidebar = {
    '/': [{
        text: '/',
        children: [
            '/',
            'dashboard',
            'faq',
        ]
    }, {
        text: '功能頁面',
        path: '/features/',
        prefix: '/features/',
        children: [
            'sponsor-list',
            'sponsor-analytics',
            'media-request',
            'timer',
            'vip',
            'sign',
        ]
    }, {
        text: '平台設定',
        path: '/platform-settings/',
        prefix: '/platform-settings/',
        children: [
            {
                text: '斗內頁面',
                path: '/platform-settings/profile',
                prefix: '/platform-settings/profile',
                children: [
                    'index',
                    'profile',
                    'platform',
                    'socials',
                    'profile-text',
                ]
            },
            {
                text: '直播工具',
                path: '/platform-settings/tools',
                prefix: '/platform-settings/tools',
                children: [
                    'chat-list-setup',
                    'chat-list',
                    'discord-notify',
                    'notify-image-sound',
                    'notify',
                    'progress'
                ]
            }
        ]
    }, {
        text: '帳號',
        path: '/account/',
        prefix: '/account/',
        children: [
            'file',
            'bind-discord',
            'qrcode',
            'user-manager',
        ]
    }, {
        text: '工具教學',
        path: '/tool/',
        prefix: '/tool/',
        children: [
            'google-cloud-font',
            'gradient',
            'live-notify'
        ]
    }],

}

export default sidebar