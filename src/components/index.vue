<script src="../lib/parallax.js"></script>
<template>
  <div>
    <br><br><br>
    <div class="container">
      <ul id="scene">
        <li class="layer" data-depth="">1</li>
        <li class="layer" data-depth="">1</li>
        <li class="layer" data-depth="">1</li>
        <li class="layer" data-depth="">1</li>
        <li class="layer" data-depth="">1</li>
        <li class="layer" data-depth="">1</li>
        <li class="layer" data-depth="">1</li>
        <li class="layer" data-depth="">1</li>
      </ul>
  </div>
  </div>
</template>
<script>
export default {
  name: "index",
  methods: {
  },
  mounted() {

  },
}

</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background:#ba68c8;
  background-attachment: fixed;
}
</style>
