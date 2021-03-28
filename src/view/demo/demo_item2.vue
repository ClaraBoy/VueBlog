<template>
<div>
  <div :class="'s'+index">
	<div class="top">
    <div class="top1">
      <div class="top2boxg" ref="g">
        <div :class="{top2boxg2:isa}">
          <span>{{istext1}}</span>
          <span>{{istext2}}</span>
          <span>{{istext3}}</span>
        </div>
      </div>
      <div class="top2boxf">
        <div class="top2boxouts1" @click="isf1()"><span>阅读: {{items.menured}}</span></div>
        <div class="top2boxouts2"><span @click="isf2()">{{share}}</span></div>
        <div class="top2boxsshow" ref="l" ><span @click="isf5()">{{isactiveshow}}</span></div>
        <div class="top2boxs3" @click="Abotuto()"><img :src="ismags"></div>
        <div :class="{but:isbut}"></div>
        <div class="top2boxs2"><span  @click="isf()">{{items.menutitle}}</span></div>
      </div>
      </div>
    <div class="top2">
      <right :index="index" :rightto="[items.info1,items.info2,items.info3]"></right>
    </div>
  </div>
</div>
</div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
import right from "./right";
export default {
  name: "demo_item2",
  props:{
    items:Array,
    index:[],
  },
  components:{
    right
  },
  data(){
    return{
      isactiveshow:'',
      istext1:"QQ",
      istext2:"微信",
      istext3:"微博",
      isa:false,
      isbut:false,
      share:"分享到",
      ismags:require('../../assets/img/Bloe/'+Number(this.index+1)+'.jpg')
    }
  },
  methods:{
    isf(){
      {
          this.istop2boxouts3 = false;
          anime({
            targets: '.s'+this.index+' .top2boxsshow',
            height: '109px',
          });
          this.isbut = true;
          setTimeout(() => {
            this.isactiveshow = '发布日期 : '+this.items.menudate
          }, 900)
        }
      },
    isf1(){
      anime({
        targets: '.s'+this.index+' .top2boxouts1',
        rotate: {
          value: 330,
          duration: 1800,
          easing: 'easeInOutSine'
        },
        width:"120px",
      });

    },
    isf2(){
      if(this.$refs.g.clientHeight>=300){
        anime({
          targets: '.s'+this.index+' .top2boxg',
          duration: 1600,
          easing: 'easeInOutQuart',
          height:"250px",
          width:"400px",
        });
          this.isf4();
      }else
        {
          anime({
            targets: '.s'+this.index+' .top2boxg',
            duration: 1600,
            easing: 'easeInOutQuart',
            height:"300px",
            width:"440px",
          });
        }
      this.share="";
      setTimeout(()=>{
        this.share="分享到";
      },3000)
      setTimeout(()=>{
        this.isf3();
      },3000)
    },
    isf3() {
      if (this.$refs.g.clientHeight >= 300) {
        this.isa = true;
        this.istext1 = "QQ";
        this.istext2 = "微信";
        this.istext3 = "微博";
        this.share="分享到";
      }
    },
    isf4(){
        {
          this.isa=false;
          this.istext1="";
          this.istext2="";
          this.istext3="分享到";
        }
    },
    isf5(){
      anime({
        targets: '.s'+this.index+' .top2boxsshow',
        height:'0px',
      });
      this.isactiveshow=""
      this.istop2boxouts3=true;
      this.isbut=false;
    },
    Abotuto(){
      this.$router.push({
        path:"/About-page-1",
        query:{tilesid:this.items.titleid}
      })
    }
  },
  mounted() {

  }
}
</script>
<style scoped>
.top{
  display:flex;
  height: 450px;
}
.top1{
  width: 60%;
}
.top2{
  width: 40%;
}
.top2boxg{
  width: 400px;height: 250px; background-color: rgba(64, 64, 64,0.2);margin-left: 15%;margin-top: 8%;
  position: absolute;
}
.top2boxg2{
  color: white;
  z-index: 5;
  width: 100%;
  height: 49px;
  background-color: #FB5353;
  float: left;
  bottom: 0;
  left: 0;
  position: absolute;
  transition: all 2s;
  text-align: center;
  line-height: 49px;
  display: flex;
}
.top2boxg2 span{
  flex: 1;
}
.top2boxg2 span:nth-of-type(1):hover{
  background-color: #404040;
}
.top2boxg2 span:nth-of-type(2):hover{
  background-color: #404040;
}
.top2boxg2 span:nth-of-type(3):hover{
  background-color: #404040;
}
.top2boxf{
  width: 400px;height: 250px; background-color: #404040; position: relative;margin-left: 22%;margin-top: 10%;
  color: transparent;
}

.top2boxouts1{
  position: absolute;z-index: 2; color: white;text-align: center;line-height: 40px;display: -webkit-box;
  background-color: #FB5353;
  display: inline;
  right: -12px;
  top:15px;
  width: 80px;
  height: 40px;

}
.top2boxouts2{
  position: absolute;z-index: 2; color: white;text-align: center;line-height: 40px;display: -webkit-box;
  background-color: #FB5353;
  display: inline;
  right: -12px;
  top:75px;
  width: 60px;
  height: 40px;
}
.top2boxouts3{
  position: absolute;z-index: 2; color: white;text-align: center;line-height: 40px;display: -webkit-box;
  background-color: #FB5353;
  display: inline;
  right: -12px;
  top:140px;
  width: 60px;
  height: 40px;
}
.top2boxs2{
  position: absolute;
  background-color: #FB5353;
  width: 100%;
  bottom: 0;
  height: 49px;
  text-align: center;
  color: white;
  line-height: 49px;
  z-index: 6;
}
.top2boxsshow{
  position: absolute;
  width: 100%;
  height: 0;
  background-color: #FB5353;
  bottom: 0;
  text-align: center;
  line-height: 70px;
  color: white;
  z-index: 2;
}
.top2boxs3{
  position: absolute;
  background-color: white;
  left: 0px;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  color: black;
}
.top2boxs3 img{
  width: 100%;
  height: 100%;
}
.but{
  position: absolute; bottom: 0; float: left; z-index: 7;width: 100%;height: 49px;  background-color: #404040;
}
span,.top2boxs3:hover{
  cursor:pointer;
}
</style>
