<script>
import axios from 'axios'

export default {
    beforeMount: function () {
        //console.log(this)
        //console.log(this.id)
        if (this?.id) {
            axios.get('http://localhost:5173/stub/comments.json')
                .then(response => {
                    const filteredArray = response.data.list.filter(element => {
                        //console.log( element.product_id == this?.id)
                        return element.product_id == this?.id
                    })
                    //console.log(response.data.list)
                    this.list = filteredArray
                    this.count = filteredArray.length
                })
        }
    },
    data() {
        return {
            count: 0,
            list: null,
        }
    },
    setup() {
        return {

        }
    },
    methods: {

    },
    props: ['id']
}
</script>

<template>
    <div class="title__container">
        <h1>
            Коментарии {{ count }}
        </h1>
    </div>
    <div class="comments__container">
        <div class="comments__item item" v-for="item in list">
            <div class="item__avatar">
                <img :src="item.avatar" :alt="item.author">
                <span>{{ item.author }}</span>
            </div>
            <div class="item__text-section">
                <p class="item__text-date">
                    Дата создания поста: {{ item.date }}
                </p>
                <p>
                    {{ item.text }}
                </p>
            </div>

        </div>
    </div>
</template>

<style scoped>
p {
    line-height: 20px;
}

.comments__item {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    background-color: #6C757D;
    box-shadow: 0px 0px 10px #000;
    border: 2px solid beige;
    margin-bottom: 20px;
}

.item__text-date {
    padding: 15px;
}

.comments__item p {
    margin-left: 20px;
}

.item__avatar img {
    width: 100px;
    border-radius: 50%;
    margin-right: 20px;
    margin-bottom: 10px;
}

@media (min-width: 320px) and (max-width: 480px) {

    h1 {
        font-size: 20px;
    }

    .comments__container {
        font-size: 12px;
    }

    .comments__item {
        flex-direction: column;
    }

    .item__avatar {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .item__text-section p {
        margin-left: 0px;
        padding: 10px;
        text-align: center;
    }

    .item__text-section p:last-child {
        text-align: justify;
    }
}
</style>