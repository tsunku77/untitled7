import Vue from 'vue'
import VueRouter from 'vue-router'

import Foo from '@/components/Foo'
import Bar from '@/components/Bar'
import HelloWorld from "@/components/HelloWorld";
import MainPage from "@/Pages/MainPage";
import AboutPage from "@/Pages/AboutPage";
import PostPage from "@/Pages/PostPage";

Vue.use(VueRouter);

const routes = [
    {
        path: '/foo',
        name: 'foo',
        component: Foo,
    },
    {
        path: '/bar/:id?/:name?',
        name: 'bar',
        component: Bar,
    },
    {
        path: '/helloWorld',
        name: 'helloWorld',
        component: HelloWorld,
    },
    {
        path: '/',
        name: 'MainPage',
        component: MainPage,
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage,
    },
    {
        path: '/post/:id?/:name?',
        name: 'PostPage',
        component: PostPage,
    },
];

const router = new VueRouter({
    mode: 'history', routes
});

export default router
