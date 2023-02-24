<script>
import {useRoute,useRouter} from 'vue-router'
import axios from 'axios';
import Loader from './Loader.vue'

export default {
    beforeMount: function () {
        axios.get(`https://fakestoreapi.com/products`)
            .then(response => {
                this.list = response.data
        })
    },
    data() {
        return {
            title: 'Список товаров',
            list:[],
        }
    },
    setup() {
        return {

        }
    },
    methods: {

    },
    components:{
        'loader': Loader,
    }
}
</script>

<template>
    <loader
        v-if="list.length == 0"
    ></loader>
    <div class="news__container">
        <div>
            <h1 v-if="list.length != 0">{{title}}</h1>
        </div>
        <div class="card__container">
            <div class="card" v-for='item in list' :key="item.id">
                <img :src='item.image' :alt='item.title'>
                <h4>
                    {{item.id}} {{item.title}}
                </h4>
                <router-link :to="'/news/' + item.id">
                    <div class="detailBtn">    
                        Подробнее
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>