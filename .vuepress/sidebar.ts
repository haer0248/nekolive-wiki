// import { SidebarConfig } from '@vuepress/theme-default'

const sidebar = {
    '/': [{
        text: '首頁',
        children: [
            '/'
        ]
    }, {
        text: '功能性頁面',
        path: '/features/',
        prefix: '/features/',
        children: [
            'widgets',
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
            'profile-css'
        ]
    }],

}

export default sidebar