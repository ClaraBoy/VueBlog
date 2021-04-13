<template>
<div>
  <div :class="'r'+index">
  <div class="box">
    <div class="tc_box_topbut">更多相关</div>
    <div class="box1">
    <div class="tcto s1" ref="tc2" @click="righto(1)"><span>{{rightto[0]}}</span></div>
     <div class="tcto s1" ref="tc3" id="2" @click="righto(1)"><span>{{rightto[1]}}</span></div>
    </div>
</div>
  </div>
</div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
name: "right",
  props:{
    index:Number,
    rightto:Array
  },
  data(){
  return{
    istc1:"了解更多",
    isnum:0
  }},
  computed:{
  },
  methods: {
    righto(num){
      this.isnum+=num;
      if(this.isnum>=2){
        anime({
          targets: '.r'+this.index+' .s1',
          translateX: "0px",
          duration: 1600,
        });
        this.isnum=0;
      }else{
        anime({
          targets: '.r'+this.index+' .s1',
          translateX: "-400px",
          duration: 1600,
        });
      }

    }
  },
  mounted() {
    if(this.rightto[0]===""&&this.rightto[1]===""){this.istc1="暂无更多";}
    if(this.rightto[0]===""){this.$refs.tc2.className="tc"}
    if(this.rightto[1]===""){this.$refs.tc3.className="tc"}
  }
}
</script>

<style scoped>
.box{
  background-color: #404040;
  height: 250px;
  width: 400px;
  overflow: hidden;
  margin-top: 30px;
}.tc_box_topbut{
   background-color: #404040;
   width: 100px;
   height: 30px;
   line-height: 30px;
   text-align: center;
   color: white;
   position: absolute;
   margin-top: 20px;
   z-index: 20;
 }
.box1{
  width: 1200px;
  height: 100%;
  display: flex;
}
.tcto{
  background-color: #FB5353;
  width: 400px;
  height: 230px;
  color: white;
  text-align: center;
  line-height: 200px;
  margin-top: 10px;
}
.tcto span{
  width: 100%;
  height: 100%;
  font-size: 30px;
}
span:hover{
  cursor:pointer;
}
.tc{
  display: none;
}
</style>
