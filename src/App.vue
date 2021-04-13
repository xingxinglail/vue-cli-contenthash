<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <router-view />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import router from './router';

export default {
  name: 'App',
  setup () {
    setTimeout(() => {
      router.push('/')
    }, 2000);
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
