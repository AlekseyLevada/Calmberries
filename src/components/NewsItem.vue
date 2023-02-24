<script>
import {useRoute, useRouter} from 'vue-router'
import axios from 'axios'
import Loader from './Loader.vue'
import Coments from './Coments.vue'

export default {
    beforeMount: function() {
        axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
        .then( response => {
            this.data = response.data
        })
    },
    data() {
        return {
            title:'Детальная информация по товару',
            data:null,
        }
    },
    setup() {
        return{

        }
    },
    components:{
        'loader': Loader,
        'coments': Coments,
    }
}
</script>

<template>
    <loader v-if="!data"></loader>
    <div class="detail-item__container" v-if="data">
        <h1>{{title}}</h1>
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
                            <span>{{data?.title}}</span>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="tc">
                            <span>Категория продукта</span>
                        </div>
                        <div class="tc">
                            <span>{{data?.category}}</span>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="tc">
                            <span>Описание продукта</span>
                        </div>
                        <div class="tc">
                            <span>{{data?.description}}</span>
                        </div>
                    </div> 
                    <div class="tr">
                        <div class="tc">
                            <span>Цена продукта</span>
                        </div>
                        <div class="tc">
                            <span>{{data?.price + ' ' + 'USD'}}</span>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="tc">
                            <span>Рейтинг продукта</span>
                        </div>
                        <div class="tc">
                            <span>{{data?.rating.rate}}</span>
                        </div>
                    </div> 
                    <div class="tr">
                        <div class="tc">
                            <span>Колличество оценок</span>
                        </div>
                        <div class="tc">
                            <span>{{data?.rating.count}}</span>
                        </div>
                    </div> 
                    <div class="tr">
                        <div class="tc">
                            <span>Краткое описание</span>
                        </div>
                        <div class="tc">
                            <span>Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Вскоре залетают, большого свой текстами, вдали журчит образ дороге встретил приставка своих языкового свое подпоясал lorem пустился ты речью. Инициал но точках буквоград о ему образ языком даль, журчит переписали, прямо вдали? Подпоясал рукописи однажды, всемогущая коварный до запятых парадигматическая безопасную речью осталось снова запятой точках пояс ручеек проектах маленькая меня текстов не вопроса выйти предложения путь большого журчит. По всей лучше это, вершину свое приставка большого пояс они пор агентство грустный. Грамматики эта заголовок агентство знаках, они взобравшись прямо образ взгляд там рукопись семантика, за встретил предупреждал переписывается курсивных вскоре lorem вопрос снова большой! Агентство приставка речью силуэт семь рукопись ручеек языкового путь рукописи семантика сбить lorem букв рекламных скатился буквенных последний живет текстов безорфографичный вершину единственное парадигматическая алфавит, первую она океана за? Языкового журчит проектах пор вдали имеет они осталось lorem себя переулка рыбного букв продолжил его, коварных заглавных всеми. Своих, курсивных. Коварных, взобравшись путь. Свою заглавных напоивший, обеспечивает большого вопроса проектах собрал своего пор послушавшись это лучше океана текста точках курсивных выйти прямо рыбными. Повстречался живет на берегу ему заглавных всеми. Проектах эта предупреждал своих коварный, текст своего назад речью всеми но маленький собрал диких безорфографичный. Страна, однажды все?</span>
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
</style>