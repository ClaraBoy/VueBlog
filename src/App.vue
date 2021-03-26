<template>
  <div id="app">
    <div style="clear: both"></div>
      <Show></Show>
    <router-view></router-view>
  </div>
</template>

<script>
import Show from "./components/show";
export default {
  name: 'App',
  components:{
    Show,
  },
}
</script>

<style>
*{padding: 0;margin: 0;border: 0;}
.el-main{
  padding: 0;
  overflow: hidden;
}
.el-header{
  padding: 0;
}
</style>
