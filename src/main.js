import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import vue3GoogleLogin from "vue3-google-login";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();

app.use(vue3GoogleLogin, {
  clientId:
    "839583652286-mimifttp9jfflgfvthhpk6bm3fbrt0sr.apps.googleusercontent.com",
});

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

const options = {
  transition: "Vue-Toastification__bounce",
  maxToasts: 10,
  newestOnTop: true,
  closeButton: "button",
};

app.use(pinia);
app.use(router);
app.use(Toast, options);

app.mount("#app");
