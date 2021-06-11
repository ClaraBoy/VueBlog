<template>
<div class="bodytext">
  <div style="position: relative">
    <div class="textbox">
      <div class="childbox">
      <el-card class="box-card">
        <h1>{{til.menutitle}}</h1>
        <el-divider></el-divider>
        <div>
          <div v-html="til.detailstext"></div>
          <br>
          <br>
          <el-divider></el-divider>
          <div class="roundbut">
           <!-- <div class="roundbut1">
              <span>相关标签:&nbsp</span>
              <el-button size="medium" round>Vue</el-button>
              <el-button size="medium" round>js</el-button>
              <el-button size="medium" round>springboot</el-button>
            </div>
            -->
            <div class="roundbut2">
              <span>分享到&nbsp</span>
              <el-button size="medium" round>QQ</el-button>
              <el-button size="medium" round>微信</el-button>
              <el-button size="medium" round>微博</el-button>
            </div>
          </div>
          <br><br>
          <el-divider></el-divider>
          <div class="criticism">
            <div style="background-color: black;width: 100%;clear: both"></div>
            <Commentmesssageput :Commentslength="Comment.length" @categoriesclick="sonclick"></Commentmesssageput>
           <Commentmessage  :Comments="Comment" :RepleComments="RepleComments" :nickname="nickname" @repleoutto="butrepleoutto" ref="child"></Commentmessage>
          </div>
        </div>
      </el-card>
      </div>
      <div><Bloebottomslot><Bloebottom></Bloebottom></Bloebottomslot></div>
    </div>
    <div class="rightbox">
      <el-card class="box-card">
        <ul ref="lis">
          <h4>快速链接</h4>
          <a href="https://www.runoob.com/" target="_blank"><li>菜鸟教程</li></a>
          <a href="https://www.cnblogs.com/" target="_blank"><li>博客园</li></a>
          <a href="https://www.csdn.net/" target="_blank"><li>CSDN</li></a>
          <a href="https://www.csdn.net/" target="_blank"><li>GitHub</li></a>
            <a href="https://gitee.com/" target="_blank"><li>码云</li></a>
        </ul>
      </el-card>
    </div>
  </div>
  <div class="footbackbox">
    <ul>
      <li title="回到顶部" @click="backTop()" class="footback">
        <svg t="1623384090980" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1542" width="48" height="48"><path d="M800.2 128H224.3c-53 0-96 43-96 96v575.9c0 53 43 96 96 96h575.9c53 0 96-43 96-96V224c0-53-43-96-96-96z m-54.8 520.3c-9.4 9.5-24.7 9.5-34.1 0L512.6 448.9 314 648.3c-9.4 9.5-24.7 9.5-34.1 0-9.4-9.5-9.4-24.8 0-34.3l214.5-215.3c5-5 11.7-7.2 18.3-6.9 6.6-0.3 13.3 1.8 18.3 6.9L745.4 614c9.5 9.5 9.5 24.8 0 34.3z" p-id="1543"></path></svg>
      </li>
      <li title="回到首页" @click="backIndex()" class="footIndex">
        <svg t="1623384548480" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2666" width="48" height="48"><path d="M512.492519 28.984695c24.447126 0 47.52359 9.169046 64.981541 25.817787L763.254634 232.097342V141.861463c0-9.931301 8.051138-17.982439 17.982439-17.982439h83.918049c9.931301 0 17.982439 8.051138 17.982439 17.982439v204.643154l128.422587 122.555317c16.101276 15.364995 16.643746 40.820137 1.211817 56.853479-15.430931 16.031344-40.992968 16.573815-57.096242 1.20782L896.124878 470.289733V474.536585H124.423493L69.322302 527.121233c-7.825358 7.468706-17.888531 11.179083-27.935719 11.179083-10.624624 0-21.228269-4.14695-29.159523-12.387902-15.43193-16.032343-14.88846-41.485487 1.212815-56.85248L447.516972 54.812472c17.440968-16.652738 40.518431-25.827778 64.975547-25.827777z" fill="#333333" p-id="2667"></path><path d="M886.634146 456.554146c20.689795 0 37.463415 16.77362 37.463415 37.463415v420.589268c0 20.689795-16.77362 37.463415-37.463415 37.463415l-251.773127 0.000999A39.876059 39.876059 0 0 0 637.377561 938.083902V721.29561c0-22.069448-17.891528-39.960976-39.960976-39.960976H427.582439c-22.069448 0-39.960976 17.891528-39.960976 39.960976v216.788292c0 4.921194 0.889132 9.633592 2.516543 13.987341L138.364878 952.070244c-20.689795 0-37.463415-16.77362-37.463415-37.463415v-420.589268c0-20.689795 16.77362-37.463415 37.463415-37.463415h748.269268z" fill="#333333" p-id="2668"></path></svg>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import Commentmesssageput from "./Comment/Commentmessageput";
import Commentmessage from "./Comment/Commentmessage";
import Bloebottom from "./Bottom/Bloebottom";
import Bloebottomslot from "./Bottom/Bloebottomslot";
import {demos} from "../network/request";
export default {
  name: "About",
  components: {
    Commentmessage,
    Commentmesssageput,
    Bloebottom,
    Bloebottomslot,
  },
  inject:['reload'],
  data() {
    return {
      textarea: "",
      isbottom: false,
      til: {},
      Comment: {},
      RepleComments:{},
      info:{
        id:0,
        topicid:"",
        topictitle:"",
        topictext:"",
        topicdate:"",
        topicred:0
      },
      nickname:{}
    }
  },
      created() {
        window.onscroll = function () {
          //变量scrollTop是滚动条滚动时，距离顶部的距离
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          //变量windowHeight是可视区的高度
          let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
          //变量scrollHeight是滚动条的总高度
          let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
          //滚动条到底部的条件
          if (scrollTop + windowHeight > scrollHeight/2+scrollHeight/3) {
            //写后台加载数据的函数
            let top= document.getElementsByClassName("footback")[0];
            top.style.display="block";
          }else{
            let top= document.getElementsByClassName("footback")[0];
            top.style.display="none"
          }
        }
      },
      methods: {
        backTop(){
          document.documentElement.scrollTop=0;
        },
        backIndex(){
            this.$router.replace("/Clara_Write")
        },
    rnm(){
      demos({
        url:"/Querynickname"
      }).then(res=>{
        this.nickname=res.data;
      }).catch(err=>{
        console.log(err);
      })
    },
    backreple(){
      demos({
        url:"/QueryRepleComments?menutitle="+this.$route.query.menutitle,
      }).then(res=>{
        this.RepleComments=res.data;
      }).catch(err=>{
        console.log(err);
      })
    },
        sonclick(Comment_text) {
          if (localStorage.getItem("token") == null) {
            this.$message({
              message: '警告,身份过期或未登录,请登陆 等待跳转中...',
              type: 'warning'
            });
            setTimeout(()=>{
              this.$router.push("/show");
            },1000)
          } else {
            demos({
              method: "get",
              url: "/addComment",
              headers: {
                authorization: this.$store.getters.RetToken,
              },
            }).then(res => {
              if (res.data == 0) {
                this.realaddComment(Comment_text);
              } else {
                this.$message({
                  message: '警告,身份过期或未登录,请登陆 等待跳转中...',
                  type: 'warning'
                });
                localStorage.removeItem("token")
                setTimeout(()=>{
                  this.$router.push("/show");
                },1000)
              }
            }).catch(err => {
              console.log(err)
            })
          }
          },
        realaddComment(Comment_text){
          this.info.topictext=Comment_text;
          this.info.topicid=this.$store.getters.RetUid;
          this.info.topicred=0;
          this.info.topictitle=this.til.menutitle;
          demos({
            method: "post",
            url:"/realaddComment",
            data:this.info
          }).then(res=>{
            if(res.data===1){
              this.$message('发布成功');
              this.reload();
            }
          }).catch(err=>{
            console.log(err);
          })
        },
        butrepleoutto(repleinfo){
          if (localStorage.getItem("token") == null) {
            this.$message({
              message: '警告,身份过期或未登录,请登陆 等待跳转中...',
              type: 'warning'
            });
            setTimeout(()=>{
              this.$router.push("/show");
            },1000)
          } else {
            demos({
              method: "get",
              url: "/addComment",
              headers: {
                authorization: this.$store.getters.RetToken,
              },
            }).then(res => {
              if (res.data == 0) {
                repleinfo.repletitle = this.til.menutitle;
                demos({
                  method: "post",
                  url: "/replecomment",
                  data: repleinfo,
                }).then(res => {
                  if (res.data === 1) {
                    this.$message('回复成功');
                    this.backreple();
                    this.reload();
                  }
                }).catch(err => {
                  console.log(err);
                })
              } else {
                this.$message({
                  message: '警告,身份过期或未登录,请登陆 等待跳转中...',
                  type: 'warning'
                });
                localStorage.removeItem("token")
                setTimeout(() => {
                  this.$router.push("/show");
                }, 1000)
              }
            }).catch(err => {
              console.log(err)
            })
          }
        },
        getDetails(){
          demos({
            url:"/Details?menutitle="+this.$route.query.menutitle,
          }).then(res=>{
            this.til=res.data;
            if(this.$route.query.menutitle===""||this.til===""){
              this.$router.replace("/404")
            }
            console.log('内容：'+res.data.toString());
          }).catch(err=>{
            console.log(err);
          })
        },
        getQueryComment(){
          demos({
            url:"/QueryComment?topictitle="+this.$route.query.menutitle,
          }).then(res=>{
            this.Comment=res.data;
          }).catch(err=>{
            console.log(err);
          })
        },
      },
  mounted() {
    document.body.style.overflow='';//出现滚动条
    this.rnm();
    this.backreple();
    this.getDetails();
    this.getQueryComment();
  },
}
</script>
<style scoped>
.bodytext{
  margin-top:2%;
}
.textbox{
  position: absolute;
  width: 100%;
}
.childbox{
  width: 65%;
}
.box-card{
  margin-left: 15%;
}
.rightbox{
  position: absolute;
  margin-left: 74%;
  margin-top: 5%;
  width: 150px;
}
.roundbut{
  text-align: right;
  margin-top: 2%;
  position: relative;
}
.roundbut1{
  text-align: right;
  position: absolute;
}
.roundbut1 button:hover{
background-color:  #FB5353;
  color: white;
  border: white 1px solid;
  transition-duration: 0.2s;
}
.roundbut2{
  text-align: right;
  position: absolute;
  right: 20px;
  border: 0px;
}
.roundbut2 button:hover{
  background-color:  #404040;
  color: white;
  border: white 1px solid;
  transition-duration: 0.2s;
}
.inputs{
  width: 35%;
  margin: 0 auto;
  height: 180px;
}
.inputs button{
  position: absolute;
  line-height: 49px;
  margin: 30px 30px auto;
}
.box-card li{
  list-style: none;
  cursor: pointer;
  margin-top: 10px;
}
.box-card a{
  text-decoration: none;
  color: black;
}
.footbackbox {
  position: absolute;
  bottom: 120px;
  right: 60px;
  text-align: center;
  background-color: #404040;
}
.footbackbox .footback{
  list-style: none;
  cursor: pointer;
  position:fixed;
  bottom: 100px;
  right: 60px;
}
.footbackbox .footIndex{
  position: fixed;
  bottom: 160px;
  right: 60px;
  list-style: none;
  cursor: pointer;
}
</style>
