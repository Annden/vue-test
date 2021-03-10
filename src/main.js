import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";



createApp(App).use(store).use(router).mount("#app");


axios({
    url:"http://localhost:9090/user/getUsers"
}).then(res=>{
    console.log(res);
})