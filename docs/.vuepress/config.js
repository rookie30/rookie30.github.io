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
        record: '浙ICP备19047158号',
        recordLink: 'http://www.beian.miit.gov.cn/state/outPortal/loginPortal.action;jsessionid=u8ZL7Fy3HwmtiU7ANAz8A_ILKMZqDX_T2PPKWqoziLusQCqgtIPo!1690538009',
        // cyberSecurityRecord: '公安部备案文案',
        // cyberSecurityLink: '公安部备案指向链接',
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
                title: 'kqzh',
                desc: '控球之魂',
                logo: 'https://www.liuxinc.ink/images/avatar.jpg',
                link: 'https://www.liuxinc.ink/'
            }
          ]
    },
};
