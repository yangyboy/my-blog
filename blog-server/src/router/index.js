import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'
import routes from './routers'

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
});

router.beforeEach((to, from, next) => {
    window.document.title = 'Mocc的个人博客-' + to.meta.title;
    if (!Cookies.get("accessToken") && to.name !== "login") {
        router.push({
            name: "login"
        });
    } else {
        next();
    }
});
