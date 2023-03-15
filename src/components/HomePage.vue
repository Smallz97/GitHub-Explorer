<template>
  <div class="hello">
    <div class="home">
      <div class="card">
        <h1 class="home__title">GitHub Explorer</h1>
        <p class="home__description">Explore amazing projects from developers around the world!</p>
        <router-link to="/myrepos" class="home__button">Get Started</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "@/assets/fonts/font.css";
.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to left, rgba(7, 27, 82, 1.0) 0%, rgba(0, 128, 128, 1.0) 100%);
}

.card {
  background-color: orangered;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 83%;
  width: 83%;
  text-align: center;
}

.home__title {
  font-family: 'SEGA LOGO FONT';
  font-size: 2.8rem;
  font-weight: 100;
  margin-bottom: 2rem;
  color: #303c6a;
  color: yellow
}

.home__description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.home__button {
  /* background-color: #008080; */
  background-color: brown;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  display: inline-block;
}

.home__button:hover {
  background-color: #006666;
}
</style>