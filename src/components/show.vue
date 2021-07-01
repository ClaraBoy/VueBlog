<template>
<div class="show">
  <div style=" width: 100%; display: flex; top:0">
  <top>
    <div slot="butindexlogin" class="butindexlogin">
      <div class="p1"  @click="butTo()">签到</div>
      <div  class="fathers" @click="Login">{{Loginspanshow}}
<!--        <div class="childs"  v-show="$store.getters.RetToken" @click="sign_out()">退出</div>-->
      </div>
      <div class="p3"  @click="drawer=true">博客</div>
    </div>
    <div slot="Login" class="LoginCss" v-show="!$store.getters.RetToken" v-if="$store.getters.LoginShows">
      <Login :isLoginShowOpinion="isLoginShowOpinion"/>
    </div>
  </top>
  </div>
  <el-drawer
    :visible.sync="drawer"
    :direction="direction"
    size="100%">
    <div class="Ep">
      <div class="Ep1">
        <h1>Hi</h1>
        <div class="Ep1-1">
          <p>我是一名Java开发人员</p>
          <p>对编码和写作博客有浓厚的兴趣。</p>
        </div>
      </div>
      <div class="Ep2">
        <h1>About</h1>
        <div class="Ep2-1">
          <p @click="but('/index-1-1')">渐进式 JavaScript 前端框架 Vue</p>
          <p @click="but('/index-1-2')">SpringBoot 后端框架</p>
          <p @click="but('/index-1-3')">Mybatis框架</p>
          <p @click="but('/index-1-4')">前后端分离学习</p>
        </div>
      </div>
      <div class="Ep3">
        <h1 @click="inntitleland($event)">Bloe主页</h1>
        <div class="Ep3-1">
          <p @click="but('/index-2-1')">Vuecli 脚手架</p>
          <p @click="but('/index-2-2')">springboot+MyBatis+vue开发</p>
          <p @click="but('/index-2-3')">开发过程以及踩坑解决</p>
        </div>
      </div>
      <div class="Ep4">
        <h1>Work</h1>
        <div class="Ep4-1">
          <p>2018年JaveWeb初体验</p>
          <p>2019年SpringMvc框架</p>
          <p>Mybatis框架</p>
          <p>2021年前后端分离学习</p>
        </div>
      </div>
    </div>
    <div class="bottom">© 2021</div>
  </el-drawer>

</div>
</template>
<script>
import top from "./top";
import Login from "./Login";
import {demos, sp} from "../network/request";
require("../assets/css/style.css")
export default {
  name: "show",
  inject:['reload'],
  data() {
    return {
      drawer:false,
      innerDrawer: false,
      direction:"ltr",
      labelPosition: 'right',
      isLoginShow:false,
      isLoginShowOpinion:0,
      Logigspan:"",
    };
  },
  methods: {
    initWebSocket: function () {
      this.websock = new WebSocket("ws:/" + sp + "/count");
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
    websocketsend(Data) {
      //数据发送
      //this.websock.send(Data);
    },
    inntitleland($event) {
      this.innerDrawer = true;
     // console.log($event.target.innerText);
      //this.$router.replace('/'+$event.target.innerText+'-page-1')
      this.$router.replace('/Clara_Write')
      this.drawer=false;
    },
    but(Ep){
     // console.log(Ep);
    },
    Login() {
      if(this.$route.path!=="/Clara"){
        sessionStorage.clear();
        localStorage.clear();
          this.$router.push("/")
      }else{
        this.isLoginShowOpinion++;
        this.$store.commit("puLoginShowTo", true);
      }
    },
    // sign_out(){
    //   sessionStorage.removeItem("ID")
    //   sessionStorage.removeItem("Nickname")
    //   localStorage.removeItem("token")
    //   setTimeout(()=>{
    //     location.reload();
    //     alert(778878)
    //   },1000)
    //  this.$router.replace("/")
    // },
    butTo() {
      if (localStorage.getItem("token") == null||this.$store.getters.Retnickname==null) {
        this.$message({
          message: '警告,身份过期或未登录,请登陆 等待跳转中...',
          type: 'warning'
        });
        setTimeout(()=>{
          this.$router.push("/show");
        },1000)
      } else {
        demos({
          method: "post",
          url: "/monitor?nickname="+this.$store.getters.Retnickname,
        }).then(res => {
          this.$alert(res.data, '今日音乐推荐链接', {
            confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'info',
                message: "谢谢关注",
              });
              if(res.data==="你已拥有名额"||res.data==="已无名额"||res.data==="系统暂未初始化"){

              }else{
                window.open(res.data, '_blank');
              }
            }
          });
        }).catch(err => {
        })
      }
    }
  },
  computed:{
          Loginspanshow(){
            if(!this.$store.getters.RetToken){
              return "登陆";
            }
            else{
              if(this.$store.getters.Retnickname===null){
                 this.sign_out();
              }
              return this.$store.getters.Retnickname;
            }
          },
  },
  components:{
    top,
    Login
  },
  created() {
    this.websocketonopen();
  },
  beforeRouteEnter (to, from,next) {
    if(from.path==='/Details'){
      next(vm => {
        vm.$router.replace("/show")
      })
     setTimeout(()=>{
       location.reload();
     },10)
      next(vm => {
        vm.$router.replace("/")
      })
    }else{
      next(vm => {
        vm.$router.replace("/")
      })
    }
  },
}
</script>
<style scoped>
*{
  padding: 0;
  margin:0;
}
.LoginCss{
  margin: 20% 80%;
  position: absolute;
}
.butindexlogin{
  width: 500px;
  height: 53px;
  top: 0;
  transition: all 1.0s;
  font-size: 20px;
}
.butindexlogin .p1{
  margin-left: 100px;
  float: left;
  display: inline-block;
  width: 100px;
  height: 49px;
  text-align: center;
  cursor: pointer;
}
.butindexlogin .p3{
  margin-left: 100px;
  position: absolute;
  display: inline-block;
  width: 100px;
  height: 49px;
  text-align: center;
  top: 0;
  cursor: pointer;
}
.butindexlogin .fathers{
    position: relative;
    overflow: hidden;
    width: 150px;
    height: 49px;
  background-color: white;
  text-align: center;
  transition: all .3s;
  cursor: pointer;
}
/*.butindexlogin .fathers:hover{*/
/*  height: 100px;*/
/* }*/
.butindexlogin .childs{
    width: 150px;
    text-align: center;
    position: absolute;
    top: 50px;
  cursor: pointer;
}
.Ep{
  display: flex;
  position: center;
  margin: 0 auto;
}
.Ep1{
margin-left: 10%;
  width: 15%;
  color: #404040;
}
.Ep2,.Ep3{
  margin: auto;
  width: 20%;
  color: #FB5353;
}
.Ep4{
  margin-right: 10%;
  width: 15%;
  color: #404040;
}
.Ep1-1{
  background-color: #404040;
  width: 100%;
  color: white;
  margin-top: 120px;
  line-height: 49px;
  border-radius: 4%;
}
.Ep2-1{
  background-color: #FB5353;
  width: 100%;
  color: white;
  margin-top: 200px;
  line-height: 49px;
  border-radius: 4%;
}
.Ep3-1{
  background-color: #FB5353;
  width: 100%;
  color: white;
  margin-top: 200px;
  line-height: 49px;
  border-radius: 4%;
}
.Ep4-1{
  background-color: #404040;
  width: 100%;
  color: white;
  margin-top: 120px;
  line-height: 49px;
  border-radius: 4%;
}
.Ep2-2,.Ep3-2
{
  color: #FB5353;
}
.Ep2-2 li
{
 padding-top: 15%;
}
.Ep3-2 li
{
  padding-top: 15%;
}
h3,h2,h1{
  text-align: center;
}
h3,h2,h1:hover{
  cursor:pointer;
}
span:hover{
  cursor:pointer;
}
.show{
  text-align: center;
}
.bottom{
padding-top:10%;
}
</style>
