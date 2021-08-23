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
      <div class="p4" v-show="$store.getters.RetToken||$store.getters.Retnickname">
        <div style="position: relative">
          <el-button @click="drawerright = true" type="primary" style="border: 0;color: black;font-size: 18px;background-color: white">
           消息
          </el-button>
          <div class="p5" style="position: absolute" v-show="Unread">
            <span>{{Unread}}</span>
          </div>
        </div>
          <el-drawer
            title="消息通知"
            :visible.sync="drawerright"
            :with-header="true"
            :modal="false"
            :before-close="upnotify"
          style="height: 100%">
            <el-scrollbar style="height:100%;border: 0">
            <div v-if="notify.length" class="notifyBox" style="height: 100%">
              <div class="infinite-list" v-infinite-scroll="getnotify" style="overflow:auto">
                <div v-for="item in notify" class="infinite-list-item">
                  <span>回复我的</span>
                  <br>
                    <span>{{item.target_name}} 回复了我 </span>
                    <span>{{item.content}}</span>
                    <span>{{item.created_at}}</span>
                    <span>
                      <span v-if="!item.is_read">未读</span>
                      <span v-else>已读</span>
                    </span>
                </div>
              </div>
            </div>
              <div v-else style="text-align: center;margin: 55% auto">
               无消息
              </div>
            </el-scrollbar>
          </el-drawer>

      </div>
    </div>
    <div slot="Login" class="LoginCss" v-show="!$store.getters.RetToken||!$store.getters.Retnickname">
      <Login :isLoginShowOpinion="isLoginShowOpinion"/>
    </div>
  </top>
  </div>
  <el-drawer
    :visible.sync="drawer"
    :direction="direction"
    size="100%"
    :modal="false">
    <div>
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
require("../assets/css/Show_media.scss")
export default {
  name: "show",
  inject:['reload'],
  data() {
    return {
      drawer:false,
      drawerright:false,
      innerDrawer: false,
      direction:"ltr",
      labelPosition: 'right',
      isLoginShow:false,
      isLoginShowOpinion:0,
      Logigspan:"",
      count: 0,
      notify:[],
      mess: "",
      lockReconnect: false,//是否真正建立连接
      timeout: 15 * 1000,//5秒一次心跳
      timeoutObj: null,//心跳心跳倒计时
      serverTimeoutObj: null,//心跳倒计时
      timeoutnum: null,//断开 重连倒计时
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
      if (this.$store.getters.RetToken != null||this.$store.getters.Retnickname!=null) {
            this.$confirm('此操作将退出登陆状态, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$message({
                type: 'success',
                message: '退出成功!'
              });
              sessionStorage.removeItem("ID")
              sessionStorage.removeItem("Nickname")
              sessionStorage.removeItem("token")
              if(this.$route.path==="/Details"||this.$route.path==="/404"){
                this.$router.replace('/')
                location.reload();
              }
              this.$router.replace(this.$route.path)
              location.reload();
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消退出'
              });
            });
        }else{
          this.isLoginShowOpinion++;
        }
    },
    butTo() {
      // serivce.interceptors.response.use(response => {
      //   console.log("响应拦截" + response.status);
      //   return response;
      // })
        demos({
          method: "post",
          url: "/monitor/"+this.$store.getters.Retnickname+"/"+this.$store.getters.RetToken,
        }).then(res => {
          if(res.data=="403"){
            this.$message({
              message: '警告,身份过期或未登录,请登陆 等待跳转中...',
              type: 'warning'
            });
            setTimeout(()=>{
              this.$router.push("/show");
            },1000)
          }else{
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
          }
        }).catch(err => {

        })
      },
    getnotify(){
      demos({
        url: "/queryNotify/"+this.$store.getters.Retnickname,
        method:"GET",
      }).then(res => {
       this.notify=res.data;
      }).catch(err => {
        console.log(err);
      })
    },
    initWebSocketTo_notify: function () {
      this.websocks = this.websock = new WebSocket("ws:/" + sp + "/The_heartbeat_notify");
      this.websock.onopen = this.websocketonopenTo;
      this.websock.onerror = this.websocketonerrorTo;
      this.websock.onmessage = this.websocketonmessageTo;
      this.websock.onclose = this.websocketcloseTo;
    },
    startTo() {
      if (this.lockReconnect === true) {
        clearInterval(this.timeoutnum);
        this.serverTimeoutObj = setInterval(() => {
          this.timeoutObj = setTimeout(() => {
            this.websocketsendTo("200");
            if (this.mess.toString() === "200") {
              this.getnotify();
            }
          });
        }, this.timeout)
      } else {
        clearInterval(this.serverTimeoutObj);
        clearInterval(this.timeoutObj);
        this.timeoutnum = setInterval(() => {
          setTimeout(this.websocketonopenTo, 0)
        }, 5000)
      }
    },
    websocketonopenTo: function (e) {
      console.log("子页面WebSocket页面更新连接成功");
      this.lockReconnect = true;
      this.startTo();
    },
    websocketonerrorTo: function (e) {
      console.log("子页面WebSocket连接发生错误");
      this.websocketonopen();
    },
    websocketonmessageTo: function (e) {
      //接收数据
      // var da = JSON.parse(e.data);
      this.mess = e.data.toString();
    },
    websocketcloseTo: function () {

    },
    websocketsendTo(Data) {
      this.websock.send(Data);
    },
    upnotify(){
      demos({
        url: "/upNotify/"+this.$store.getters.Retnickname,
        method:"POST",
      }).then(res => {
      this.getnotify();
        this.drawerright=false;
      }).catch(err => {
        console.log(err);
      })
    }
  },
  computed:{
          Loginspanshow(){
            if(!this.$store.getters.RetToken){
              return "登陆";
            }
            else{
              if(this.$store.getters.Retnickname===null){
                localStorage.removeItem("token");
                this.$router.replace('/')
                return "登陆";
              }
              return this.$store.getters.Retnickname;
            }
          },
    Unread(){
            let UnreadNumber=0;
            for(let i=0;i<this.notify.length;i++){
                if(this.notify[i].is_read===0){
                  UnreadNumber++;
                }
            }
            return UnreadNumber;
    }
  },
  components:{
    top,
    Login
  },
  created() {
    this.websocketonopen();
    this.initWebSocketTo_notify();
  },
  mounted() {
    this.getnotify();
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
.p4{
  margin-left: 200px;
  position: absolute;
  display: inline-block;
  width: 100px;
  height: 49px;
  text-align: center;
  top: 0;
  cursor: pointer;
}
.p5{
  top:4px;
  right: 22px;
  height: 17px;
  text-align: center;
  background: red;
  display: inline-block;
  width: 17px;
  border-radius: 30px;
}
.p5 span{
  color: white;
  left: 5px;
  top: -15px;
  position: absolute;
  font-size: 10px;
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
  padding: 10px 60px 60px 60px;
  width: 100%;
  height: auto;
  flex-flow: wrap;
  display: flex;
  justify-content: center;
}
.Ep1{
  color: #404040;
  margin-bottom: 30px;
}
.Ep2,.Ep3{
  margin: 30px auto;
  color: #FB5353;
}
.Ep4{
  color: #404040;
  margin-bottom: 30px;
}
.Ep1-1{
  background-color: #404040;
  width: 100%;
  color: white;
  margin-top: 60px;
  line-height: 49px;
  border-radius: 4%;
}
.Ep2-1{
  background-color: #FB5353;
  width: 100%;
  color: white;
  margin-top: 60px;
  line-height: 49px;
  border-radius: 4%;
}
.Ep3-1{
  background-color: #FB5353;
  width: 100%;
  color: white;
  margin-top: 60px;
  line-height: 49px;
  border-radius: 4%;
}
.Ep4-1{
  background-color: #404040;
  width: 100%;
  color: white;
  margin-top: 60px;
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
.Ep3 h1:hover{
  cursor:pointer;
}
h3,h2:hover{
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
p{
  padding: 0 60px 20px 60px;
  line-height: 3;
}
.notifyBox{
  height: auto;
}
.notifyBox .infinite-list-item{
  padding: 20px 20px 20px 20px;
 list-style: none;
  background-color: white;
  -webkit-box-shadow: 0 0 15px 5px rgba(1,1,1,0.1);
  -moz-box-shadow: 0 0 15px 5px rgba(1,1,1,0.1);
  box-shadow: 0 0 15px 5px rgba(1,1,1,0.1);
  margin: 20px 10px 10px 10px;
  text-align: left;
}
.notifyBox .infinite-list-item span:nth-of-type(2){
  display: block;
  height: 100%;
}
.notifyBox .infinite-list-item span:nth-of-type(4){
  text-align: right;
  display: block;
  height: 100%;
}
.notifyBox .infinite-list-item span:nth-of-type(5){
  text-align: right;
  display: block;
  height: 100%;
  font-size: 16px;
}
</style>
