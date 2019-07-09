module.exports = {
  head: [['meta', { name: 'og:image', content: '/ogp.png' }]],
  title: '6MAC',
  description: '6ヶ月でアプリを作ろう',
  themeConfig: {
    nav: [
      { text: 'どんなアプリを作る？', link: '/examples/' },
      { text: 'ルール', link: '/rules/' },
      { text: 'スケジュール', link: '/schedules/' },
      { text: 'FAQ', link: '/faq/' },
    ],
    sidebar: 'auto',
  },
}
