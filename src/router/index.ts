import { createRouter, createWebHistory } from "vue-router";



export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'Home',
            component: () => import('../views/HomeVue.vue')
        },
        {
            path: "/teams",
            name: 'Teams',
            component: () => import('../views/TeamsVue.vue')
        },
        {
            path: "/:homeTeam-:awayTeam/:id",
            name: 'Match',
            component: () => import('../views/MatchVue.vue')
        },
    ]
})

