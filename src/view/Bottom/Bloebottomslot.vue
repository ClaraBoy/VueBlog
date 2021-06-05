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
  margin-top: 80px;
  width:100%;
  height:60px;   /* Height of the footer */
  z-index: 10;
  color: white;
  line-height: 60px;
  text-align: center;
}
</style>
