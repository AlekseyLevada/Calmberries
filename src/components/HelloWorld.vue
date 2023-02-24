<script>

</script>

<template>
  <div class="switch">
    <h1>Сalmberries</h1>
    <div class="link__container">
      <router-link to="/news">
        <div class="detailBtn">
          Войти в приложение
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
h1{
  font-family: 'Pacifico', cursive;
  font-size: 90px;
  line-height: 240px;
  margin-bottom: 120px;
}
h1::before {
  content: 'Свободные цены';
  position: absolute;
  top: 35%;
  left: 45%;
  font-size: 24px;
}
.link__container {
  display: flex;
  justify-content: center;
  align-items: center;
}
a div.detailBtn{
  width: 200px;
  padding: 5px;
  font-family: 'Pacifico', cursive;
  font-size: 18px;
}
</style>
