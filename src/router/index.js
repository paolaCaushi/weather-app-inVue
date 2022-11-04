import {createRouter, createWebHistory} from "vue-rooter";
import HomeView from "../views/HomeView.vue";
import CityView from "../views/CityView.vue";

const router =  createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
       {
         path: "/",
         name : "home",
         meta: {
            title: "Home",
         },
        },
        {
            path: "weather/:state/:city",
            name:"cityView",
            component: CityView,
            meta: {
                title:"Weather",
            },
        },
    ],
});

router.beforeEach((to, from, next) => {
    document.title = `${
        to.params.state 
        ? `${to.params.city}, ${to.params.state}`
        :to.meta.title
    }| The Local Weather`;
    next();
    // to and from are both route objects. must call `next`.
});

export default router;