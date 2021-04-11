<template>
<div>
  <div v-for="item in Comments">
    <Commentmessage_item :items="item"></Commentmessage_item>
  </div>
</div>
</template>

<script>
import Commentmessage_item from "./Commentmessage_item";
export default {
  name: "Commentmessage",
  components:{
    Commentmessage_item
  },
  props:{
    Comments:Array,
  },
}
</script>

<style scoped>
</style>
