<template>
<div>
  <div class="con">
    <div class="left">
      <br>
      <div class="imgBox" @click="Abotuto()">
        <img :src="ismags">
        <div :class="{left_data:isActives,s:iss}"><h1>{{items.menutitle}}</h1></div>
      </div>
      <div class="left_span">
        <h1>{{items.menudate}}</h1>
      </div>
      <br><br><br> <br><br><br>
      <div :class="{left_red:isActives,s:iss}"><h2>阅读量:{{items.menured}}</h2></div>
      <br><br><br>
    </div>
    <div class="right_span">
      <div :class="{showActive:isShowActive}"><right :index="index" :rightto="[items.info1,items.info2]"></right></div>
    </div>
    <div class="right">
    </div>
  </div>
</div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
import right from "../demo/right";
export default {
name: "demo_item",
  components:{
    right
  },
  props:{
    items:Array,
    index:[],
  },
  data(){
  return{
  isActives:false,
    iss:true,
    isShowActive:true,
    ismags:require('../../assets/img/Bloe/'+Number(this.index+1)+'.png')
  }
  },
  methods:{
    Abotuto(){
      this.$router.push({
        path:"/About-page-1",
        query:{menutitle:this.items.menutitle}
      })
    }
  },
  mounted() {
    anime({
      targets: '.imgBox',
      width:410,
      duration: 1400,
      easing: 'easeInOutExpo'
    });
    setTimeout(()=>{
      anime({
        targets: '.right',
        right:0,
        width:700,
        duration: 1600,
        easing: 'easeInOutExpo'
      });
      anime({
        targets: '.left_span',
        translateY: "70px",
        translateX: "70px",
        duration: 1600,
        color:"",
        easing: 'easeInOutExpo'
      });
      setTimeout(()=>{
        this.isActives=true;
        this.iss=false;
      },2000)
      anime({
        targets: '.right_span',
        right:500,
        duration: 1600,
        color:"",
        easing: 'easeInOutExpo'
      });
      setTimeout(()=>{
        anime({
          targets: '.right',
          width:0,
          duration: 1600,
          easing: 'easeInOutExpo'
        });
        this.isShowActive=false;
      },900)
    },100)
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
.con{
  width: 90%;
  display: flex;
  position: relative;
  margin-top: 6%;
  transition-duration: 2s;
  height: 320px;
  margin-left: 10%;
}
.left{
  position: absolute;
  background-color: #FB5353;
  width: 40%;
  height: 320px;
}
.left_span{
  display: inline-flex;
  top: 0;
  position: absolute;
  color: white;
}
.imgBox{
  position: absolute;
  width: 0;
  height: 260px;
  margin-left: 50%;
  background-image: url("../../assets/img/Bloe/1.png");
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 7px 29px 49px 0px rgba(0,0,0,3);
  cursor:pointer;
}
img{
  height: 100%;
  width: 100%;
}
.right{
  position: absolute;
  background-color: #404040;
  right: 50%;
  height: 320px;
  width: 200px;
}
.right_span{
  width: 20px;
  height: 60px;
  position: absolute;
  right:80%;
  z-index: 0;
}
.s{
 color: transparent;
 }
.left_red{
  color: white;
  margin-left: 130px;
  transition: all 2s;
}
.left_data{
  color: white;
  margin-left: 17%;
  transition: all 1s;
  position: absolute;
  transform: translateX(22%);
  z-index: 20;
  bottom: 50px;
}
.showActive{
  display: none;
}
</style>
