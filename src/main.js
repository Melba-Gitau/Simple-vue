import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home2 from "./components/Home2";
import About from "./components/About";
Vue.use(VueRouter);
const routes = [
  { path: "/", component: Home2 },
  { path: "/about", component: Home2 },
];
const router = new VueRouter({
  routes,
});
createApp(App).mount("#app");
