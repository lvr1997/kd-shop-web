import { createPinia } from 'pinia';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import "~/styles/element/index.scss";

import "uno.css";
import "~/styles/index.scss";

const pinia = createPinia()

const app = createApp(App);

app.use(router);
app.use(pinia)
app.mount("#app");
