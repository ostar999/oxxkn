import { defineConfig } from "vitepress";
import AutoSidebar from "vite-plugin-vitepress-auto-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/oxxkn/",
  title: "欧星星",
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
        titleFromFile: true, // 自动从文件中提取标题
      }),
    ],
  },
  themeConfig: {
    logo: "/datou.png",
    search: {
      provider: "local", // 启用 VitePress 本地搜索
      options: {
        translations: {
          button: {
            buttonText: "搜索", // 搜索框的占位文本
            buttonAriaLabel: "搜索", // 辅助阅读器的提示文本
          },
          modal: {
            noResultsText: "未找到匹配内容", // 搜索无结果时的提示文本
            resetButtonTitle: "清除搜索", // 清除搜索按钮的提示文本
            footer: {
              selectText: "选择", // 选择搜索结果的提示文本
              navigateText: "切换", // 切换搜索结果的提示文本
              closeText: "关闭", // 关闭搜索框的提示文本
            },
          },
        },
      },
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "网站介绍", link: "/1.网站介绍/1.网页介绍.md" },
      { text: "医学", link: "/2.医学/0.医学专栏介绍.md" },
      { text: "编程", link: "/3.编程/0.编程专栏介绍.md" },
      { text: "音乐", link: "/4.音乐/0.音乐专栏介绍.md" },
      { text: "生活", link: "/5.生活/0.生活专栏介绍.md" },
    ],

    footer: {
      message: "内测版",
      copyright: `开发者：欧星星`,
    },

    outline: {
      label: "页面导航",
    },

    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/ostar999" },
      { icon: "bilibili", link: "https://space.bilibili.com/39956609" },
    ],
  },
});
