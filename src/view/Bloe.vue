<template>
  <div class="cl">
    <div><h1><span style="color: #FB5353">Clara</span> <span style="color: #404040">Write</span></h1></div>
    <div class="Bloe-top">
      <div class="Bloe-top-1">
        <div class="imgto">
          <div class="slider">
            <div :class="{datetime:isdatetime,datetime2:isdatetime2}" @click="playtime()"><h1>{{time}}</h1></div>
            <div class="item is-active">
              <div class="imgs">
                <div class="grid">
                  <div class="img img-1">
                    <img src="https://picsum.photos/seed/a/700/700"/></div>
                  <div class="img img-2">
                    <img src="https://picsum.photos/seed/b/700/700"/></div>
                  <div class="img img-3">
                    <img src="https://picsum.photos/seed/c/700/700"/></div>
                  <div class="img img-4">
                    <img src="https://picsum.photos/seed/d/700/700"/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="Bloe-top-2">
        <div class="Bloenaem">
          <div class="Bloenaem-1" @click="isdemos()"><h2>最佳评论</h2></div>
          <div class="Bloenaem-2" @click="isdemos2()"><h2>博客</h2></div>
        </div>
        <div><demo :peos="peo[isdemo].list" :isdemos="isdemo"></demo></div>
      </div>
    </div>
    <div><newdemo :Li="Li"></newdemo></div>
    <div><Bloebottomslot><Bloebottom></Bloebottom></Bloebottomslot></div>
  </div>
</template>
<script>
import anime from "animejs/lib/anime.es.js";
import demo from "./demo/demo"
import Bloebottom from "./Bottom/Bloebottom";
import Bloebottomslot from "./Bottom/Bloebottomslot";
import {demos} from "../network/request"
import newdemo from "../view/new_demo/demo"
export default {
  name: "Bloe",
  inject:['reload'],
  components: {
    demo,
    Bloebottom,
    Bloebottomslot,
    newdemo
  },
  data() {
    return {
      translateX: 200,
      isdatetime: true,
      isdatetime2: false,
      isdemo: "lists",
      //在数据库查出第一个标签的四条和第二个标签的四条然后放入各自内容放入各自选项卡
      peo: {
        "lists":
          {
            list:
              [
                {
                  menuid:"",
                  menutitle:"",
                  menudate:"",
                  menured:'',
                  menucomment:"",
                  titleid:"",
                  info1:"",
                  info2:"",
                  info3:"",
                }
              ]
          },
        "lists2":
          {
            list:
              [
                {
                  menuid:"",
                  menutitle:"",
                  menudate:"",
                  menured:'',
                  menucomment:"",
                  titleid:"",
                  info1:"",
                  info2:"",
                  info3:"",
                }
              ]
          }
      },
      Li:{},
      msg_data: [],
      lockReconnect: false,//是否真正建立连接
      timeout: 2*1000,//5秒一次心跳
      timeoutObj: null,//心跳心跳倒计时
      serverTimeoutObj: null,//心跳倒计时
      timeoutnum: null,//断开 重连倒计时
      mess:"",
    }
  },
  methods: {
    playtime() {
      anime({
        targets: '.datetime,.datetime2',
        translateX: this.translateX,
        direction: "alternate",
        easing: 'easeInOutExpo'
      });
      setTimeout(() => {
        this.isdatetime = false;
        this.isdatetime2 = true;
      }, 1000)
      setTimeout(() => {
        this.isdatetime = true;
        this.isdatetime2 = false;
      }, 2000)
    },
    isdemos() {
      this.isdemo = "lists";
    },
    isdemos2() {
      this.isdemo = "lists2";
    },
    initWebSocket: function () {
      this.websock = new WebSocket("ws://localhost:9000/count");
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onclose = this.websocketclose;
    },
    //打开连接
    websocketonopen: function () {
      console.log("WebSocket连接成功");
      let actions = 200;
      this.websocketsend(JSON.stringify(actions));
    },
    //连接错误
    websocketonerror: function (e) {
      console.log("WebSocket连接发生错误");
      this.websocketonopen();
    },
    websocketonmessage: function (e) {
      //接收数据
     // var da = JSON.parse(e.data);
      console.log(e.data);
      // this.msg_data.unshift(e.);
    },
    websocketclose: function (e) {
      console.log("connection closed (" + e.code + ")");
    },
    websocketsend(Data){
      //数据发送
      //this.websock.send(Data);
    },
    getMenucomments(){
      demos({
        url:"/Menucomments?comments=1",
      }).then(res=>{
        this.peo["lists"].list=res.data;
        // console.log(res.data);
      }).catch(err=>{
        console.log(err);
      })
    },
    getMenuyear(){
      demos({
        url:"/Menuyear?year=2021",
      }).then(res=>{
        this.peo["lists2"].list=res.data;
        //  console.log(res.data);
      }).catch(err=>{
        console.log(err);
      })
    },
    getList(){
      demos({
        url:"/queryLists",
      }).then(res=>{
        this.Li=res.data;
      }).catch(err=>{
        console.log(err);
      })
    },
        initWebSocketTo: function () {
          this.websock = new WebSocket("ws://localhost:9000/The_heartbeat");
          this.websock.onopen = this.websocketonopenTo;
          this.websock.onerror = this.websocketonerrorTo;
          this.websock.onmessage = this.websocketonmessageTo;
          this.websock.onclose = this.websocketcloseTo;
        },
        startTo(){
          if(this.lockReconnect===true)
          {
            clearInterval(this.timeoutnum);
            this.serverTimeoutObj=setInterval(()=>{
              this.timeoutObj=setTimeout(()=>{
                this.websocketsendTo("200");
                if(this.mess.toString()==="200"){
                      this.getMenuyear();
                      this.getMenucomments();
                      this.getList();
                }
              });
            },this.timeout)
          }else{
            clearInterval(this.serverTimeoutObj);
            clearInterval(this.timeoutObj);
            this.timeoutnum= setInterval(()=>{
              setTimeout(this.websocketonopenTo,0)
            },5000)
          }
        },
        websocketonopenTo: function (e){
          this.lockReconnect=true;
          this.startTo();
        },
        websocketonerrorTo: function (e) {
          console.log("WebSocket连接发生错误");
          this.websocketonopen();
        },
        websocketonmessageTo: function (e) {
          //接收数据
          // var da = JSON.parse(e.data);
          this.mess=e.data.toString();
        },
        websocketcloseTo: function (e) {
          console.log("connection closed (" + e.code + ")");
        },
        websocketsendTo(Data) {
          this.websock.send(Data);
        },
  },
  computed:{
    time()
    {
    let date = new Date();
    let month=date.getMonth()<9 ? "0"+(date.getMonth()+1):(date.getMonth()+1);
    let day=date.getDate()<9 ? "0"+date.getDate():date.getDate();
    return date.getFullYear()+"-"+month+"-"+day;
    }
  },
  mounted() {
    document.body.style.overflow='';//出现滚动条
    this.getMenucomments();
    this.getMenuyear();
    this.getList();
  },
  created() {
    this.initWebSocket();
    this.initWebSocketTo();
  },
  destroyed: function () {
    this.websocketclose();
    this.websocketcloseTo();
  },
}
</script>
<style lang="scss" scoped>
.cl h1{
  text-align: center;
  padding-top: 3%;
}
h1,span,h2,h3:hover{
  cursor:pointer;
}
.Bloe-top{
  width: 100%;
  height: 70%;
  display:flex;
  margin-top:2%;
  position: relative;
}
.Bloe-top-1{
display: flex;
  flex: 1;
  width: 50%;
}
.Bloe-top-2{
  flex: 1;
  width: 50%;
}
.imgto{
  width: 100%;
}
.datetime
{
  z-index: 5;
  transition-duration: 0.2s;
}
.datetime2
{
  z-index: 5;
  color: Transparent;
  transition-duration: 0.2s;

}
.Bloenaem{
  text-align: center;
  display: flex;
}
.Bloenaem-1{
  height: 60px;
  line-height: 60px;
  width: 50%;
  transition-duration: 0.6s;
  margin-left: 4%;
}
.Bloenaem-2{
  height: 60px;
  line-height: 60px;
  width: 25%;
  transition-duration: 0.6s;
}
.Bloenaem-1:hover{
  background-color: #FB5353;
  color: white;
  margin-left: 8%;
}
.Bloenaem-2:hover{
    background-color: #404040;
    color: white;
  margin-left: 4%;
}
*,
*:before,
*:after{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html, body{
  font-family: "Commissioner", sans-serif;
  line-height: 1.65;
}

$black: #0a0908;
$gunmetal: #22333b;
$almond: #eae0d5;
$khaki: #c6ac8f;
$umber: #5e503f;

@mixin filter{
  position: relative;
  -webkit-filter: contrast(110%) brightness(110%) saturate(130%);
  filter: contrast(110%) brightness(110%) saturate(130%);
&::before{
   content: "";
   display: block;
   height: 100%;
   width: 100%;
   top: 0;
   left: 0;
   position: absolute;
   pointer-events: none;
   mix-blend-mode: screen;
   background: rgba(243, 106, 188, 0.3);
 }
}

a{
  color: $khaki;
  text-decoration: none;
}
.slider{
  height: 100%;
  width: 100%;
  background-color: $black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  overflow: hidden;
  transition: background-color 2s;

.credits{
  position: absolute;
  top: 2rem;
  left: 2rem;
  line-height: 1.65;
  z-index: 10;
  max-width: 320px;
}
}
.slider .item .imgs{
  position: relative;
  width: 75%;
  padding-top: 75%;

.grid{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  transform: rotate(-20deg);
  opacity: 0.65;
}
}
.slider .item{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

.img{
  width: 100%;
  height: 100%;
  position: relative;
  will-change: transform;
  will-change: opacity;

img{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  @include filter;
}
img:hover {
    -webkit-animation: circle .75s;
    animation: circle .75s;
  }
  @-webkit-keyframes circle {
    0% {
      opacity: 1;
    }
    40% {
      opacity: 1;
    }
    100% {
      width: 200%;
      height: 200%;
      opacity: 0;
    }
  }
  @keyframes circle {
    0% {
      opacity: 1;
    }
    40% {
      opacity: 1;
    }
    100% {
      width: 200%;
      height: 200%;
      opacity: 0;
    }
  }
}
.img-1{ grid-area: 1 / 1 / 7 / 5; }
.img-2{ grid-area: 2 / 5 / 7 / 13; }
.img-3{ grid-area: 7 / 1 / 12 / 9; }
.img-4{ grid-area: 7 / 9 / 13 / 13; }

.content{
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.15;
  font-size: 8rem;
  font-weight: 700;

.wrap{
  text-align: center;
  text-shadow: 1px 1px 4px rgba($black, 0.2);
  width: 100%;
  max-width: 600px;
  line-height: 1;

.letter{ display: inline-block; }
}
}
}
.slider .nav{
.next, .prev{
  height: 2rem;
  width: 2rem;
  position: absolute;
  top: calc(50% - 1rem);
  cursor: pointer;
  z-index: 3;
  transition: transform 0.3s;
}
.next{
  right: 2rem;
  background-image: url("data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M 19 8 L 19 11 L 1 11 L 1 13 L 19 13 L 19 16 L 23 12 L 19 8 z' fill='white'/%3E%3C/svg%3E");
&:hover{ transform: translateX(0.5rem); }
}
.prev{
  left: 2rem;
  background-image: url("data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M 5 8 L 1 12 L 5 16 L 5 13 L 23 13 L 23 11 L 5 11 L 5 8 z' fill='white'/%3E%3C/svg%3E");
&:hover{ transform: translateX(-0.5rem); }
}
.explore-btn{
  z-index: 4;
  position: absolute;
  bottom: 2rem;
  left: calc(50% - 4rem);
  width: 8em;
  text-align: center;
  padding: 1rem 0;
  border: solid 2px white;
  background: transparent;
  color: white;
  transition: background-color 0.3s;
  cursor: pointer;
&:hover{
   color: $black;
   background: white;
 }
}
}
.slider .item:not(.is-active){
  opacity: 0;
  pointer-events: none;
}







</style>
