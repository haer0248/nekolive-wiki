// import { SidebarConfig } from '@vuepress/theme-default'

const sidebar = {
    '/': [{
        text: '首頁',
        children: [
            '/',
            'first-use'
        ]
    }, {
        text: '功能性頁面',
        path: '/features/',
        prefix: '/features/',
        children: [
            'sponsor-list',
            'media-request',
            'timer',
        ]
    }, {
        text: '平台設定',
        path: '/platform-settings/',
        prefix: '/platform-settings/',
        children: [
            'index',
            'profile',
            'socials',
            'platform',
            'profile-text',
            'profile-css',
            'user-manager'
        ]
    }, {
        text: '通知功能',
        path: '/platform-settings/',
        prefix: '/platform-settings/',
        children: [
            'progress-and-notify',
            'chatlist-style',
            'live-notify',
            'notify-image-sound'
        ]
    }, {
        text: '工具教學',
        path: '/tool/',
        prefix: '/tool/',
        children: [
            'google-cloud-font',
            'gradient',
            'file',
            'live-notify',
            'alert-self-debug',
        ]
    }],

}

export default sidebar