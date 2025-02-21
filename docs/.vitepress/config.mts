import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/oxxkn/",
  title: "欧星星的知识库",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "示例", link: "/examples/markdown-examples" },
      { text: "ai", link: "/ai/ai-yy" },
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
          text: "ai应用",
          items: [{ text: "ai解读三甲评审条款", link: "/ai/ai-yy" }],
        },
      ],
      "/guide/": [
        {
          text: "简介",
          items: [
            { text: "VitePress 是什么？", link: "/guide/what-is-vitepress" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
