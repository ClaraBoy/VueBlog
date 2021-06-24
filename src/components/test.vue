<template>
    <div>
      <div class="MessBox"><h1>以后使用于内容的加载</h1></div>
      <div class="scrollBox" v-infinite-scroll="load">
    <ul class="infinite-list"  style="overflow:auto">
      <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
    </ul>
    </div>
    </div>
</template>
<script>
export default {
  name: "test",
  inject:['reload'],
  components:{

  },
  data(){
    return{
      count: 0
    }
  },
  methods:{
    load () {
      this.count += 2
    }
  },
  mounted() {
    let ViewHeight= document.documentElement.clientHeight || document.body.clientHeight;
    document.getElementsByClassName("MessBox")[0].style.height=ViewHeight*0.1+"px"
    document.getElementsByClassName("scrollBox")[0].style.height=ViewHeight*0.93+"px"
    document.body.style.overflow='hidden';
  },
  beforeRouteUpdate(to, from, next) {
  next();
  },
}
</script>

<style scoped>
.MessBox{
  margin: 30px auto;
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
}
.scrollBox{
  width: 100%;
  overflow: auto;
  margin:0 auto;
  text-align: center;
}
li{
  background-color: #00a2d4;
  color: white;
  margin-top: 10px;
  width: 100%;
}
</style>
