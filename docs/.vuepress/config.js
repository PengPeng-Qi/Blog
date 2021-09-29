module.exports = {
  lang: 'zh-CN',
  title: 'PengPengQ 的博客',
  description: '个人博客 漆鹏 PengPengQ 碰碰漆',
  base: '/Blog/',

  themeConfig: {
    navbar: [{
        text: '笔记',
        link: '/notes/',
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
          link: '/notes/数据结构/',
        },
        {
          text: '其他',
          children: [{
            text: 'echo 命令',
            link: '/notes/Others/echo',
          }, {
            text: '浅谈深浅拷贝',
            link: '/notes/Others/深浅拷贝',
          }],
        }
      ],
      '/projects/': [{
        text: 'Reference',
      }, ],
    },
    editLink: true,
    /*     
      editLinkText: '如果发现有误，可以点我进行编辑哦',
      docsRepo: 'https://github.com/PengPeng-Qi',
      docsBranch: 'master',
      docsDir: 'docs',
      editLinkPattern: ':repo/-/edit/:branch/:path',
    */
    logo: '/images/favicon.png',
    backToHome: '别走丢了哦，点我回到首页',
    toggleDarkMode: '切换夜间模式'
  },
}