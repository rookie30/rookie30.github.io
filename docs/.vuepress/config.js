const path = require('path')

const sortBy = (key) => {
    return (a, b) => (a[key] > b[key]) ? -1 : ((b[key] > a[key]) ? 1 : 0);
}

// set your global feed options - override in page frontmatter `feed`
const feedOptions = {
    feed_options: {
        title: 'rookie30 的独立博客',
        favicon: "/favicon.ico",
        copyright: "Powered by Vuepress | Design by Wenson",
        feedLinks: {
            atom: ""
          },
          author: {
            name: "rookie30",
            email: "ninging7@foxmail.com",
            link: "https://ninging.top/about"
          }
    },
    posts_directories: ['/posts/'],
    canonical_base: 'https://ninging.top',
    feeds: {
        rss2: {enable: false},
        json1: {enable: false}
    },
    sort: entries => entries.concat().sort(sortBy("date")),
}

module.exports = {
    title: 'rookie30',                        // 网站名称
    description: '咸鱼之家',           // 网站描述
    markdown: {
        lineNumbers: true,                  // 代码块显示行数
    },
    base: '/',
    theme: 'seeker',                       // 设置主题为 seeker
    themeConfig: {
        logo: '/logo.png',         // 网站 LOGO, 放在 .vuepress/public 下面
        valine: {                          // 请参考  https://valine.js.org/quickstart.html
            appId: '',
            appKey: '',
        },
        // Navicator
        nav: [
            {
                text: '归档',
                link: '/archive/'
            },
            {
                text: '分类',
                link: '/categories/'
            },
            {
                text: '关于',
                link: '/about/'
            },
        ],
        footer: {
            slogan: 'poetry',                   // 页脚古诗词, 'poetry' 随机古诗词，如果填写其他字符串则直接显示所填文字
            copyright: 'vuepress made by wenson © 2019-2020',                      // 页底 Copyright
            social: [
                {
                    type: 'github', // qq, wechat, bilibili, github, rss, weibo
                    value: 'https://github.com/rookie30', 
                },
            ]
        },
    }
}

