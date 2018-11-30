<template>
  <div id="app">
    <Head></Head>
    <router-view/>
    <Foot></Foot>
  </div>
</template>

<script>
import Header from './components/header/header'
import Footer from './components/footer/footer'
export default {
  name: 'App',
  components: {
    // <my-component> 将只在父组件模板中可用
    'Head': Header,
    'Foot': Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 51px;
}
</style>
