import { createWebHistory, createRouter } from "vue-router"
import HomeVue from "@/components/HomeVue.vue"
import ChatVue from "@/components/ChatVue.vue"

const routes = [
    {
        path:"/",
        name:"Home",
        component: HomeVue
    },
    {
        path:"/chat",
        name:"Chat",
        component: ChatVue,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router