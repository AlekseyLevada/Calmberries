import {createWebHistory, createRouter} from 'vue-router'

import HelloWorld from '../../components/HelloWorld.vue'
import NewsList from '../../components/NewsList.vue'
import NewsItem from '../../components/NewsItem.vue'

const routes = [{
path:'Calmberries/',
name:'Home',
component:HelloWorld,
},
{
    path:'Calmberries/news',
    name:'News',
    component:NewsList,
},
{
    path:'Calmberries/news/:id',
    name:'NewsItem',
    component:NewsItem,
},
]

const router = createRouter({
    history:createWebHistory(),
    routes:routes,
})

export default router