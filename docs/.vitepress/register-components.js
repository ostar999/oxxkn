import { defineAsyncComponent } from "vue";

export default {
  install(app) {
    const components = import.meta.glob("./components/**/*.vue", {
      eager: true,
    });
    for (const path in components) {
      const component = components[path].default;
      const componentName = path.split("/").pop().replace(".vue", "");
      app.component(
        componentName,
        defineAsyncComponent(() => Promise.resolve(component))
      );
    }
  },
};
