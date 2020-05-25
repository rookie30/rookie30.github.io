module.exports = {
    theme: "reco",
    title: 'rookie30的小破站',
    themeConfig: {
        // 博客配置
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: "分类", // 默认文案 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: "标签", // 默认文案 “标签”
            },
        },
        type: "blog",
        authorAvatar: '/avatar.jpg',
        nav: [
            { text: '首页', link: '/', icon: 'reco-home' },
            { text: '时间轴', link: '/timeline/', icon: 'reco-date' }
        ],
        head: [
            ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
        ],
        author: 'rookie30',
        // 备案
        record: 'ICP 备案文案',
        recordLink: 'ICP 备案指向链接',
        cyberSecurityRecord: '公安部备案文案',
        cyberSecurityLink: '公安部备案指向链接',
        // 项目开始时间，只填写年份
        startYear: '2020',
        // 友链
        friendLink: [
            {
              title: 'Re_star',
              desc: '轮子狂魔',
              logo: "https://trueloving.gitee.io/blog/avatar.png",
              link: 'https://trueloving.gitee.io/blog/'
            },
            {
              title: '午后南杂',
              desc: 'Enjoy when you can, and endure when you must.',
              email: 'recoluan@qq.com',
              link: 'https://www.recoluan.com'
            },
          ]
    },
};
