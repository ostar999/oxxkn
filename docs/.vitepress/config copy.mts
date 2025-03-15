import { defineConfig } from "vitepress";
import { set_sidebar } from "./gen_siderbar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "欧星星的知识-标题",
  description: "A VitePress Site", // .vitepress/config.js 或 vite.config.js
  ignoreDeadLinks: true,
  markdown: {
    lineNumbers: true, // 显示代码块行号
    image: {
      lazyLoading: true, // 图片懒加载
    },
  },
  themeConfig: {
    logo: "/tupian/ceshi3.jpg",
    search: {
      provider: "local", // 开启默认本地搜索
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "示例", link: "/examples/markdown-examples" },
      { text: "ai", link: "/ai/ceshi1" },
      { text: "指南", link: "/guide/what-is-vitepress" },
    ],

    sidebar: {
      "/examples/": [
        {
          text: "示例",
          items: [
            { text: "Markdown Examples", link: "/examples/markdown-examples" },
            { text: "Runtime API Examples", link: "/examples/api-examples" },
          ],
        },
      ],
      "/ai/": [
        {
          text: "测试项目",
          items: [{ text: "测试1", link: "/ai/ceshi1" }],
        },
      ],
      "/guide/": [
        {
          text: "简介",
          items: [
            { text: "VitePress 是什么？", link: "/guide/what-is-vitepress" },
            { text: "路由", link: "/guide/routing" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
