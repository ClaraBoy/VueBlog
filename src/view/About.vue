<template>
<div class="bodytext">
  <div style="position: relative">
    <div class="textbox">
      <el-card class="box-card">
        <h1>{{til.detailstitle}}</h1>
        <el-divider></el-divider>
        <div>
        <p>{{til.detailstext}}</p>
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
           <Commentmessage :Comments="Comment"></Commentmessage>
          </div>
        </div>
      </el-card>
    </div>
    <div class="rightbox">
      <el-card class="box-card">
        <ul>
          <li>分类目录</li>
          <li>node.js</li>
          <li>uniapp</li>
          <li>vue</li>
          <li>web</li>
          <li>建站</li>
          <li>系统</li>
        </ul>
      </el-card>
    </div>
  </div>
  <Bloebottomslot v-if="isbottom"><Bloebottom></Bloebottom></Bloebottomslot>
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
  inject:['reload'],//注入App里的reload方法
  data() {
    return {
      textarea: "",
      isbottom: false,
      til: {
            titleid:"",
            detailstitle:"",
            detailstext:"",
            detailsred:'',
      },
      Comment: {
        commentsid:"",
         commentsuserid:"",
         commentsname:"",
         commentstitle:"",
         commentstext:"",
         comments:"",
        commentsred:""
      },
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
        sonclick(Comment_text) {
          let Data = new Date();
          console.log(Comment_text);
          console.log(this.til.detailstitle);
          let date=Data.getFullYear() + "-" + (Data.getMonth() + 1) + "-" + Data.getDate();
          console.log(date) //2019-8-20
          const obj = {name: '掌拉', time: "刚刚", messages: Comment_text};
          demos({
            url:"/addComments",
          }).then(res=>{
              if(Number(res.data)==1){alert("已发送 审核中")}else{alert("失败")}
          }).catch(err=>{
            console.log(err);
          });

        }
      },
  mounted() {
    this.reload();
    demos({
      url:"/Details?titleid="+this.$route.query.tilesid,
    }).then(res=>{
      this.til=res.data;
      console.log('内容：'+res.data.toString());
    }).catch(err=>{
      console.log(err);
    }),
      setTimeout(()=>{
        demos({
          url:"/Comments?title="+this.til.detailstitle,
        }).then(res=>{
          this.Comment=res.data;
          console.log('评论'+res.data);
        }).catch(err=>{
          console.log(err);
        })
      },100)

  }
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

</style>
