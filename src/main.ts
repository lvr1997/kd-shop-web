import { createPinia } from 'pinia';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import "~/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import "uno.css";
import "~/styles/index.scss";

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";

const pinia = createPinia()

const app = createApp(App);
app.use(router);
app.use(pinia)
// app.use(ElementPlus);
app.mount("#app");
