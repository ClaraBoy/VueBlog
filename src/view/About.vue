<template>
<div class="bodytext">
  <div style="position: relative">
    <div class="textbox">
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
          if (scrollTop + windowHeight == scrollHeight) {
            this.isbottom = true;
            //写后台加载数据的函数
            console.log("距顶部" + scrollTop + "可视区高度" + windowHeight + "滚动条总高度" + scrollHeight);
          }
        }
      },
      methods: {
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
      },
  mounted() {
    this.rnm();
    this.backreple();
    demos({
      url:"/Details?menutitle="+this.$route.query.menutitle,
    }).then(res=>{
      this.til=res.data;
      console.log('内容：'+res.data.toString());
    }).catch(err=>{
      console.log(err);
    })
    demos({
      url:"/QueryComment?topictitle="+this.$route.query.menutitle,
    }).then(res=>{
      this.Comment=res.data;
    }).catch(err=>{
      console.log(err);
    })
  },
}
</script>

<style scoped>
.bodytext{
  margin-top:2%;
}
.textbox{
  position: absolute;
  width: 50%;
  margin-left: 15%;
}
.rightbox{
  position: absolute;
  margin-left: 74%;
  margin-top: 5%;
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
</style>
