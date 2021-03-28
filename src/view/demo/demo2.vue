<template>
<div class="deom2">
  <div v-for="(item,index) in lsits">
  <demo_item2 :items="item" :index="index"></demo_item2>
  </div>
</div>
</template>
<script>
import demo_item2 from "./demo_item2";
export default {
  name: "demo2",
  components:{
    demo_item2
  },
  props:{
    lsits:Array,
  }
}
</script>

<style scoped>
.deom2{
  width: 100%;
  top: 10px;
  padding-top: 120px;

}
</style>
