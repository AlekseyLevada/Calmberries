<script>
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import Loader from './Loader.vue'
import Coments from './Coments.vue'

export default {
    beforeMount: function () {
        axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
            .then(response => {
                setTimeout(() => {
                    this.data = response.data
                }, 2000)
            })
    },
    data() {
        return {
            title: 'Детальная информация по товару',
            data: null,
        }
    },
    setup() {
        return {

        }
    },
    components: {
        'loader': Loader,
        'coments': Coments,
    }
}
</script>

<template>
    <loader v-if="!data" />
    <div class="detail-item__container" v-if="data">
        <div class="title__container">
            <h1>{{ title }}</h1>
        </div>

        <div class="product-item__container container">
            <div class="container__image">
                <img :src="data?.image" :alt="data?.title">
                <router-link to="/news">
                    <div class="detailBtn">
                        Назад к списку
                    </div>
                </router-link>
            </div>
            <div class="container-detail-info">
                <div class="table">
                    <div class="tr">
                        <div class="tc">
                            <span>Наименование продукта</span>
                        </div>
                        <div class="tc">
                            <span>{{ data?.title }}</span>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="tc">
                            <span>Категория продукта</span>
                        </div>
                        <div class="tc">
                            <span>{{ data?.category }}</span>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="tc">
                            <span>Описание продукта</span>
                        </div>
                        <div class="tc">
                            <span>{{ data?.description }}</span>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="tc">
                            <span>Цена продукта</span>
                        </div>
                        <div class="tc">
                            <span>{{ data?.price + ' ' + 'USD' }}</span>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="tc">
                            <span>Рейтинг продукта</span>
                        </div>
                        <div class="tc">
                            <span>{{ data?.rating.rate }}</span>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="tc">
                            <span>Колличество оценок</span>
                        </div>
                        <div class="tc">
                            <span>{{ data?.rating.count }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <coments :id="data.id"></coments>
    </div>
</template>

<style scoped>
.detailBtn {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 40px;
    border-radius: 5px;
    color: #FDFEFE;
    background-color: #F4623A;
    transition: .1s;
}

.detailBtn:hover {
    outline: 2px solid beige;
    color: #000;
    box-shadow: 0px 0px 7px #FDFEFE;
    transition: .1s;
}

.detail-item__container {
    padding: 10px;
}

.product-item__container {
    border: 2px solid beige;
    padding: 15px;
    background-color: #6C757D;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
}

.container__image {
    width: 30%;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.container__image img {
    box-shadow: 0px 0px 10px #000;
    width: 300px;
    border-radius: 10px;
    margin-bottom: 20px;
}

.container-detail-info {
    width: 70%;
}

.table {
    color: #FDFEFE;
}

.tr {
    display: flex;
}

.tc {
    padding: 10px;
}

.tc:first-child {
    width: 20%;
}

@media (min-width: 320px) and (max-width: 480px) {

    h1 {
        font-size: 20px;
    }

    .product-item__container {
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .container-detail-info {
        width: 100%;
    }

    .container__image img {
        width: 230px;
    }

    .table {
        font-size: 12px;
    }

    .tr .tc{
        width: 100%;
    }
}
</style>