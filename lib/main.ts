import vue3dropdown from "./vue3-dropdown.vue";

export default {
  install: (app: any, options: any) => {
    app.component("vue3-dropdown-utils", vue3dropdown);
  },
};
