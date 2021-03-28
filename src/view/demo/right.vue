<template>
<div>
  <div>
<div class="tc1">{{istc1}}</div>
  <div class="tc2" ref="tc2">{{rightto[0]}}</div>
  <div class="tc3" ref="tc3">{{rightto[1]}}</div>
  <div class="tc4" ref="tc4">{{rightto[2]}}</div>
</div>
</div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
name: "right",
  props:{
  index:[],
    rightto:[]
  },
  data(){
  return{
    istc1:"了解更多"
  }},
  computed:{
    tc2show(){},
    tc3show(){},
    tc4show(){},
  },
  methods: {
    scrollHandle() {
      const offset = this.$el.getBoundingClientRect();
      const offsetTop = offset.top;
      const offsetBottom = offset.bottom;
      // const offsetHeight = offset.height;
      // 进入可视区域
      // console.log(offsetTop,offsetBottom)
      if (offsetTop <= window.innerHeight && offsetBottom >= 0) {
        // console.log('进入可视区域');

      } else {
        // console.log('移出可视区域');

      }
    }
  },
  mounted() {
    if(this.rightto[0]===""&&this.rightto[1]===""&&this.rightto[2]===""){this.istc1="暂无更多";}
    if(this.rightto[0]===""){this.$refs.tc2.className="tc"}
    if(this.rightto[1]===""){this.$refs.tc3.className="tc"}
    if(this.rightto[2]===""){this.$refs.tc4.className="tc"}
    window.addEventListener("scroll", this.scrollHandle, true); // 监听 监听元素是否进入/移出可视区域
  }
}
</script>

<style scoped>
.tc1{
  background-color: #FB5353;
  margin-top: 120px;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: white;
}
.tc2,.tc3,.tc4{
  background-color: #FB5353;
  margin-top: 10px;
  width: 70%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: white;
}
.tc{
  display: none;
}
</style>
