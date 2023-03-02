<script>

</script>

<template>
  <div class="switch">
    <h1>Сalmberries</h1>
    <h3>
      Доступные цены
    </h3>
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
h1 {
  font-family: 'Pacifico', cursive;
  font-size: 90px;
}

h3 {
  font-size: 24px;
  font-family: 'Pacifico', cursive;
  margin-bottom: 120px;
  text-align: center;
  color: beige;
}

.link__container {
  display: flex;
  justify-content: center;
  align-items: center;
}

a div.detailBtn {
  width: 200px;
  padding: 5px;
  font-family: 'Pacifico', cursive;
  font-size: 18px;
}</style>
