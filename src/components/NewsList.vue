<script>
import { useRoute, useRouter } from 'vue-router'
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
            list: [],
        }
    },
    setup() {
        return {

        }
    },
    methods: {

    },
    components: {
        'loader': Loader,
    }
}
</script>

<template>
    <loader v-if="list.length == 0"></loader>
    <div class="news__container">
        <div class='title__container'>
            <h1 v-if="list.length != 0">
                {{ title }}
            </h1>
        </div>
        <div class="card__container">
            <div class="card" v-for='item in list' :key="item.id">
                <p>
                    {{ item.title }}
                </p>
                <img :src='item.image' :alt='item.title'>
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
.news__container {
    padding: 10px;
}

.title__container {
    margin-bottom: 20px;
}

.card__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>