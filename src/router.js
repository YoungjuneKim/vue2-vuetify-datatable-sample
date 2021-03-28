import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import AxiosTest from "./views/AxiosTest";
import HackerNews from "./views/HackerNews";
import VuetifyTableSample from "./views/VuetifyTableSample";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Home },
        { path: "/about", component: About },
        { path: "/axiosTest", component: AxiosTest },
        { path: "/hackerNews", component: HackerNews },
        { path: "/vuetifyTableSample", component: VuetifyTableSample },
    ]
});

export default router;