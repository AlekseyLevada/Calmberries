import {createWebHistory, createRouter} from 'vue-router'

import HelloWorld from '../../components/HelloWorld.vue'
import NewsList from '../../components/NewsList.vue'
import NewsItem from '../../components/NewsItem.vue'

const routes = [{
path:'/',
name:'Home',
component:HelloWorld,
},
{
    path:'/news',
    name:'News',
    component:NewsList,
},
{
    path:'/news/:id',
    name:'NewsItem',
    component:NewsItem,
},
]

const router = createRouter({
    history:createWebHistory(),
    routes:routes,
})

export default router