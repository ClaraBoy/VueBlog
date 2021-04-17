<template>
<div class="show">
  <div style=" width: 100%; display: flex; top:0">
  <top>
    <div slot="butindexlogin" class="butindexlogin"><span style="display: inline" @click="Login">{{Loginspanshow}}</span><span @click="drawer=true" style="display: inline"  >博客</span></div>
    <div slot="Login" class="LoginCss" v-show="!$store.getters.RetToken"><Login :isLoginShowOpinion="isLoginShowOpinion"/></div>
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
        <h1 @click="inntitleland($event)">Bloe</h1>
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
require("../assets/css/style.css")
export default {
  name: "show",
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
    inntitleland($event) {
      this.innerDrawer = true;
      console.log($event.target.innerText);
      this.$router.replace('/'+$event.target.innerText+'-page-1')
      this.drawer=false;
    },
    but(Ep){
      console.log(Ep);
    },
    Login() {
      this.isLoginShowOpinion++;
    }
  },
  computed:{
          Loginspanshow(){
            if(!this.$store.getters.RetToken){
              return "登陆";
            }
            else{
              return "";
            }
          }
  },
  components:{
    top,
    Login
  },
  mounted() {

  }
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
  width: 300px;
  height: 53px;
  display: block;
  top: 0;
  transition: all 1.0s;
  font-size: 20px;
}
.butindexlogin span{
  padding-left: 60px;
  display: inline;
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
