<template>
<div class="Bloebottomslots">
  <div><slot></slot></div>
</div>
</template>

<script>
export default {
  name: "Bloebottomslot"
}
</script>

<style scoped>
.Bloebottomslots{
  background-color: #404040;
  position:fixed;
  bottom:0;
  width:100%;
  height:50px;   /* Height of the footer */
  z-index: 10;
}
</style>
