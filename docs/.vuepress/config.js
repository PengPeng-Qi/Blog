module.exports = {
  lang: 'zh-CN',
  title: 'PengPengQ 的博客',
  description: '个人博客 漆鹏 PengPengQ 碰碰漆',
  base: '/Blog/',
  head: [
    ['link', {
      rel: 'icon',
      href: 'main/docs/.vuepress/public/images/favicon.ico'
    }]
  ],

  themeConfig: {
    sidebar: 'auto',
    navbar: [{
        text: '笔记',
        link: '/notes/HTML/',
      },
      {
        text: '项目',
        link: '/projects/',
      },

    ],
    sidebar: {
      '/notes/': [{
          text: 'HTML',
          link: '/notes/HTML/',
        }, {
          text: 'CSS',
          link: '/notes/CSS/',
        }, {
          text: 'JavaScript',
          link: '/notes/JavaScript/',
        }, {
          text: 'Vue',
          link: '/notes/Vue/',
        }, {
          text: 'React',
          link: '/notes/React/',
        }, {
          text: '数据结构',
          link: '/notes/dataTree/',
        },
        {
          text: '其他',
          link: '/notes/Others/',
        },
      ],
      '/projects/': [{
        text: 'Reference',
      }, ],
    },
    editLink: true,
    logo: '/images/favicon.png',
    backToHome: '别走丢了哦，点我回到首页',
    toggleDarkMode: '切换夜间模式'
  },
}