// https://vitepress.dev/guide/custom-theme
// 引入 Vue 的 h 函数，用于创建 VNode（虚拟 DOM 节点）
import { h } from "vue";
// 导入 VitePress 主题类型
import type { Theme } from "vitepress";
// 导入 VitePress 默认主题
import DefaultTheme from "vitepress/theme";
// 引入自定义 CSS 样式
import "./style.css";

// 引入图片查看器插件及其样式
import "viewerjs/dist/viewer.min.css"; // Viewer.js 组件的 CSS
import imageViewer from "vitepress-plugin-image-viewer"; // 图片查看器插件
import vImageViewer from "vitepress-plugin-image-viewer/lib/vImageViewer.vue"; // Vue 组件

// VitePress 内置的路由系统，用于监听当前路径
import { useRoute } from "vitepress";

// 自定义组件
import MyButton from "./components/MyButton.vue"; // 按钮组件
import HeroBefore from "./components/HeroBefore.vue"; // 首页英雄区域的自定义组件
import MyRadio from "./components/MyRadio.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import ShanChu from "./components/ShanChu.vue";

// 引入 Element Plus 及其样式
import ElementPlus from "element-plus";
import "element-plus/dist/index.css"; // Element Plus 组件库的样式

// 引入 Element Plus 图标库
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

export default {
  // 继承 VitePress 默认主题
  extends: DefaultTheme,

  // 自定义 Layout 组件，扩展默认主题的布局
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 这里定义了一些 VitePress 主题的插槽
      // "home-hero-before": () => h(HeroBefore), // 在首页英雄区域前插入 HeroBefore 组件
      // "doc-top": () => h(HeroBefore), // 在文档顶部插入 HeroBefore 组件
      // "sidebar-nav-before": () => h(HeroBefore), // 侧边导航前插入 HeroBefore 组件
      // "aside-top": () => h(HeroBefore), // 右侧边栏顶部插入 HeroBefore 组件
      // "aside-ads-before": () => h(HeroBefore), // 侧边栏广告前插入 HeroBefore 组件
      // "doc-bottom": () => h(HeroBefore), // 侧边栏广告前插入 HeroBefore 组件
      // "doc-footer-before": () => h(HeroBefore), // 侧边栏广告前插入 HeroBefore 组件
    });
  },

  // 增强应用功能
  enhanceApp({ app, router, siteData }) {
    // 注册 Element Plus 组件库
    app.use(ElementPlus);

    // 注册 Element Plus 图标库中的所有图标组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }

    // 注册图片查看器组件
    app.component("vImageViewer", vImageViewer);

    // 注册自定义按钮组件
    app.component("MyButton", MyButton);
    app.component("MyRadio", MyRadio);
    app.component("ButtonDemo", ButtonDemo);
    app.component("ShanChu", ShanChu);
  },

  // setup 方法，用于执行 VitePress 运行时的逻辑
  setup() {
    const route = useRoute(); // 获取当前路由信息
    imageViewer(route); // 启用图片查看器插件，使其支持 Markdown 图片预览
  },
} satisfies Theme;
