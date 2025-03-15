import { defineConfig } from "vitepress";
import AutoSidebar from "vite-plugin-vitepress-auto-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "欧星星的知识-标题",
  lang: "zh-Hans",
  description: "A VitePress Site", // .vitepress/config.js 或 vite.config.js
  ignoreDeadLinks: true,
  markdown: {
    lineNumbers: true, // 显示代码块行号
    image: {
      lazyLoading: true, // 图片懒加载
    },
  },
  vite: {
    plugins: [
      AutoSidebar({
        deletePrefix: "", // 不删除前缀
        collapsed: false, // 默认不折叠
      }),
    ],
  },
  themeConfig: {
    logo: "/tupian/ceshi3.jpg",
    search: {
      provider: "local", // 开启默认本地搜索
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "examples", link: "/examples/markdown-examples" },
      {
        text: "ai",
        items: [
          { text: "默认测试", link: "/morenceshi/默认测试" },
          {
            text: "其他测试",
            items: [
              { text: "其他", link: "/qitaceshi/其他index" },
              { text: "gude", link: "guide/what-is-vitepress" },
              { text: "examples", link: "/examples/markdown-examples" },
            ],
          },
        ],
      },
      { text: "gude", link: "guide/what-is-vitepress" },
    ],

    footer: {
      message: "内测版",
      copyright: `开发者：欧星星`,
    },

    outline: {
      label: "",
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
