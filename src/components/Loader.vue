<script setup>

</script>

<template>
  <div class="loader">
        <div class="loader__text">
            Загрузка...
        </div>
    </div>
</template>

<style scoped>
    .loader{
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loader__text{
        font-size: 24px;
        background-color: black;
        padding: 20px;
        border-radius: 20px;
    }
</style>
