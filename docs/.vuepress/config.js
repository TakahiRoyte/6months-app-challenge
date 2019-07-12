module.exports = {
  head: [['meta', { name: 'og:image', content: '/ogp.png' }]],
  title: '6MAC',
  description: '6ヶ月でアプリを作ろう',
  themeConfig: {
    nav: [
      {
        text: '参加する！',
        link:
          'https://forms.office.com/Pages/ResponsePage.aspx?id=LCcCsHdbmkWCx1NZjEqlEZzeFa7W_mhAs_UiUbPq2QxUM1U2MjBCVVpYNTk0N0ZFV0xCMzlZTFdLVS4u',
      },
      { text: 'どんなアプリを作る？', link: '/examples/' },
      { text: 'ルール', link: '/rules/' },
      { text: 'スケジュール', link: '/schedules/' },
      { text: 'FAQ', link: '/faq/' },
    ],
    sidebar: 'auto',
  },
}
