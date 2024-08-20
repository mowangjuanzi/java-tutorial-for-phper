import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JAVA 教程",
  description: "专为 PHPer 编写",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '入门', link: '/intro' }
    ],

    sidebar: [
      {
        text: '入门',
        link: "/intro"
      },
      {
        text: "安装",
        link: "/install"
      },
      {
        text: "语言",
        link: "/language"
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mowangjuanzi/java-tutorial-for-phper' }
    ]
  }
})
