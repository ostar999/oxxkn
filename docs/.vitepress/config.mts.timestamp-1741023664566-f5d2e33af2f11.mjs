// docs/.vitepress/config.mts
import { defineConfig } from "file:///Users/ouxingxing/Documents/macdoc/repositories/33.vuetest/2.vitepress/4.zidingyi_cebianlan/node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.20.3_@types+node@22.13.8_postcss@8.5.3_search-insights@2.17.3_typescript@5.7.3/node_modules/vitepress/dist/node/index.js";
import AutoSidebar from "file:///Users/ouxingxing/Documents/macdoc/repositories/33.vuetest/2.vitepress/4.zidingyi_cebianlan/node_modules/.pnpm/vite-plugin-vitepress-auto-sidebar@1.7.1_@typescript-eslint+parser@8.25.0_eslint@9.21.0_c6b610d3ae3baa5cc0bae8adeebf6f03/node_modules/vite-plugin-vitepress-auto-sidebar/dist/index.mjs";
var config_default = defineConfig({
  title: "\u6B27\u661F\u661F\u7684\u77E5\u8BC6-\u6807\u9898",
  description: "A VitePress Site",
  // .vitepress/config.js 或 vite.config.js
  ignoreDeadLinks: true,
  markdown: {
    lineNumbers: true,
    // 显示代码块行号
    image: {
      lazyLoading: true
      // 图片懒加载
    }
  },
  vite: {
    plugins: [
      AutoSidebar({
        deletePrefix: "",
        // 不删除前缀
        collapsed: false
        // 默认不折叠
      })
    ]
  },
  themeConfig: {
    logo: "/tupian/ceshi3.jpg",
    search: {
      provider: "local"
      // 开启默认本地搜索
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "examples", link: "/examples/markdown-examples" },
      {
        text: "ai",
        items: [
          { text: "\u9ED8\u8BA4\u6D4B\u8BD5", link: "/morenceshi/\u9ED8\u8BA4\u6D4B\u8BD5" },
          { text: "\u5176\u4ED6\u6D4B\u8BD5", link: "/ai/\u6D4B\u8BD5\u6587\u4EF6\u5939/\u6D4B\u8BD5" }
        ]
      },
      { text: "gude", link: "guide/what-is-vitepress" }
    ],
    footer: {
      message: "\u5185\u6D4B\u7248",
      copyright: `\u5F00\u53D1\u8005\uFF1A\u6B27\u661F\u661F`
    },
    outline: {
      label: "\u9875\u9762\u5BFC\u822A"
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" }
    ]
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvb3V4aW5neGluZy9Eb2N1bWVudHMvbWFjZG9jL3JlcG9zaXRvcmllcy8zMy52dWV0ZXN0LzIudml0ZXByZXNzLzQuemlkaW5neWlfY2ViaWFubGFuL2RvY3MvLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL291eGluZ3hpbmcvRG9jdW1lbnRzL21hY2RvYy9yZXBvc2l0b3JpZXMvMzMudnVldGVzdC8yLnZpdGVwcmVzcy80LnppZGluZ3lpX2NlYmlhbmxhbi9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvb3V4aW5neGluZy9Eb2N1bWVudHMvbWFjZG9jL3JlcG9zaXRvcmllcy8zMy52dWV0ZXN0LzIudml0ZXByZXNzLzQuemlkaW5neWlfY2ViaWFubGFuL2RvY3MvLnZpdGVwcmVzcy9jb25maWcubXRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVwcmVzc1wiO1xuaW1wb3J0IEF1dG9TaWRlYmFyIGZyb20gXCJ2aXRlLXBsdWdpbi12aXRlcHJlc3MtYXV0by1zaWRlYmFyXCI7XG5cbi8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2Uvc2l0ZS1jb25maWdcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHRpdGxlOiBcIlx1NkIyN1x1NjYxRlx1NjYxRlx1NzY4NFx1NzdFNVx1OEJDNi1cdTY4MDdcdTk4OThcIixcbiAgZGVzY3JpcHRpb246IFwiQSBWaXRlUHJlc3MgU2l0ZVwiLCAvLyAudml0ZXByZXNzL2NvbmZpZy5qcyBcdTYyMTYgdml0ZS5jb25maWcuanNcbiAgaWdub3JlRGVhZExpbmtzOiB0cnVlLFxuICBtYXJrZG93bjoge1xuICAgIGxpbmVOdW1iZXJzOiB0cnVlLCAvLyBcdTY2M0VcdTc5M0FcdTRFRTNcdTc4MDFcdTU3NTdcdTg4NENcdTUzRjdcbiAgICBpbWFnZToge1xuICAgICAgbGF6eUxvYWRpbmc6IHRydWUsIC8vIFx1NTZGRVx1NzI0N1x1NjFEMlx1NTJBMFx1OEY3RFxuICAgIH0sXG4gIH0sXG4gIHZpdGU6IHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICBBdXRvU2lkZWJhcih7XG4gICAgICAgIGRlbGV0ZVByZWZpeDogXCJcIiwgLy8gXHU0RTBEXHU1MjIwXHU5NjY0XHU1MjREXHU3RjAwXG4gICAgICAgIGNvbGxhcHNlZDogZmFsc2UsIC8vIFx1OUVEOFx1OEJBNFx1NEUwRFx1NjI5OFx1NTNFMFxuICAgICAgfSksXG4gICAgXSxcbiAgfSxcbiAgdGhlbWVDb25maWc6IHtcbiAgICBsb2dvOiBcIi90dXBpYW4vY2VzaGkzLmpwZ1wiLFxuICAgIHNlYXJjaDoge1xuICAgICAgcHJvdmlkZXI6IFwibG9jYWxcIiwgLy8gXHU1RjAwXHU1NDJGXHU5RUQ4XHU4QkE0XHU2NzJDXHU1NzMwXHU2NDFDXHU3RDIyXG4gICAgfSxcbiAgICAvLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUtY29uZmlnXG4gICAgbmF2OiBbXG4gICAgICB7IHRleHQ6IFwiZXhhbXBsZXNcIiwgbGluazogXCIvZXhhbXBsZXMvbWFya2Rvd24tZXhhbXBsZXNcIiB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcImFpXCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1OUVEOFx1OEJBNFx1NkQ0Qlx1OEJENVwiLCBsaW5rOiBcIi9tb3JlbmNlc2hpL1x1OUVEOFx1OEJBNFx1NkQ0Qlx1OEJENVwiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NTE3Nlx1NEVENlx1NkQ0Qlx1OEJENVwiLCBsaW5rOiBcIi9haS9cdTZENEJcdThCRDVcdTY1ODdcdTRFRjZcdTU5MzkvXHU2RDRCXHU4QkQ1XCIgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7IHRleHQ6IFwiZ3VkZVwiLCBsaW5rOiBcImd1aWRlL3doYXQtaXMtdml0ZXByZXNzXCIgfSxcbiAgICBdLFxuXG4gICAgZm9vdGVyOiB7XG4gICAgICBtZXNzYWdlOiBcIlx1NTE4NVx1NkQ0Qlx1NzI0OFwiLFxuICAgICAgY29weXJpZ2h0OiBgXHU1RjAwXHU1M0QxXHU4MDA1XHVGRjFBXHU2QjI3XHU2NjFGXHU2NjFGYCxcbiAgICB9LFxuXG4gICAgb3V0bGluZToge1xuICAgICAgbGFiZWw6IFwiXHU5ODc1XHU5NzYyXHU1QkZDXHU4MjJBXCIsXG4gICAgfSxcblxuICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICB7IGljb246IFwiZ2l0aHViXCIsIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3ZpdGVwcmVzc1wiIH0sXG4gICAgXSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyZSxTQUFTLG9CQUFvQjtBQUN4Z0IsT0FBTyxpQkFBaUI7QUFHeEIsSUFBTyxpQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBO0FBQUEsRUFDYixpQkFBaUI7QUFBQSxFQUNqQixVQUFVO0FBQUEsSUFDUixhQUFhO0FBQUE7QUFBQSxJQUNiLE9BQU87QUFBQSxNQUNMLGFBQWE7QUFBQTtBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsTUFDUCxZQUFZO0FBQUEsUUFDVixjQUFjO0FBQUE7QUFBQSxRQUNkLFdBQVc7QUFBQTtBQUFBLE1BQ2IsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQUEsRUFDQSxhQUFhO0FBQUEsSUFDWCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDTixVQUFVO0FBQUE7QUFBQSxJQUNaO0FBQUE7QUFBQSxJQUVBLEtBQUs7QUFBQSxNQUNILEVBQUUsTUFBTSxZQUFZLE1BQU0sOEJBQThCO0FBQUEsTUFDeEQ7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNMLEVBQUUsTUFBTSw0QkFBUSxNQUFNLHVDQUFtQjtBQUFBLFVBQ3pDLEVBQUUsTUFBTSw0QkFBUSxNQUFNLGtEQUFlO0FBQUEsUUFDdkM7QUFBQSxNQUNGO0FBQUEsTUFDQSxFQUFFLE1BQU0sUUFBUSxNQUFNLDBCQUEwQjtBQUFBLElBQ2xEO0FBQUEsSUFFQSxRQUFRO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxXQUFXO0FBQUEsSUFDYjtBQUFBLElBRUEsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLElBQ1Q7QUFBQSxJQUVBLGFBQWE7QUFBQSxNQUNYLEVBQUUsTUFBTSxVQUFVLE1BQU0scUNBQXFDO0FBQUEsSUFDL0Q7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
