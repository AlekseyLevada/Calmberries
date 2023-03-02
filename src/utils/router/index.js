// Добавил createWebHashHistory для работы роутера на GitHub Pages

import { createWebHashHistory, createWebHistory, createRouter} from 'vue-router'

import MainWindow from '../../components/MainWindow.vue'
import NewsList from '../../components/NewsList.vue'
import NewsItem from '../../components/NewsItem.vue'

const routes = [{
path:'/',
name:'Home',
component:MainWindow,
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
    history:createWebHashHistory(),
    routes:routes,
})

export default router