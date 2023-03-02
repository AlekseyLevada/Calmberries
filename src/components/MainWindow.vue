<script>

</script>

<template>
  <div class="switch__container">
    <div class="switch">
      <h1>
        Сalmberries
      </h1>
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
  </div>
</template>

<style scoped>
.switch__container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-family: 'Pacifico', cursive;
  font-size: 90px;
}

h3 {
  font-size: 24px;
  font-family: 'Pacifico', cursive;
  margin-bottom:80px;
  text-align: center;
  color: beige;
}

.link__container {
  display: flex;
  justify-content: center;
  align-items: center;
}

a div.detailBtn {
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  padding: 5px;
  font-size: 18px;
  border-radius: 5px;
  color: #FDFEFE;
  background-color: #F4623A;
  transition: .1s;
  font-family: 'Pacifico', cursive;
}

.detailBtn:hover {
  outline: 2px solid beige;
  color: #000;
  box-shadow: 0px 0px 7px #FDFEFE;
  transition: .1s;
}

@media (min-width:320px) and (max-width:480px){
    .switch h1 {
        font-size: 60px;
    }
}
</style>
