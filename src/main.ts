import { createApp } from "vue";
import "./style.css";
// @ts-ignore
import App from "./App.vue";
import vue3Dropdown from "vue3-dropdown-utils";
import "vue3-dropdown-utils/dist/style.css";

const app = createApp(App);
app.use(vue3Dropdown);
app.mount("#app");
