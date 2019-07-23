<template>
  <div id="app">
    <heads></heads>
    <contents></contents>
    <!--<router-link to="/bar">go one</router-link>-->
  </div>
</template>

<script>
import heads from './component/head.vue'
import contents from './component/content.vue'

export default {
  data () {
    return {
    
    }
  },
  components:{heads,contents}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  height: 100%;
  background: url(/src/img/image_023.jpg) no-repeat;
  background-size: 100% 100%;
}
</style>
