<template>
  <div>
  <div v-for="(item,index) in lsits">
  <demo_item :items="item" :index="index"></demo_item>
</div>
  </div>
</template>

<script>
import demo_item from "./demo_item";
export default {
  name: "demo",
  components:{
    demo_item
  },
  props:{
    lsits:Array,
  }
}
</script>

<style scoped>
</style>
