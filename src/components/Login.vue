<template>
<div>
  <div :class="{card:isLoginShowOpinion%2===0,card2:isLoginShowOpinion%2!==0,middle:true}">
    <input type="radio" name="r" id="t1"/>
    <input type="radio" name="r" id="t2"/>
    <div class="font">
      <div class="inputTable">
        <div style="margin: 20px;"><h2>用户登陆</h2></div>
        <el-form label-position="top" label-width="80px">
          <el-form-item>
            <el-input style="width: 80%;padding-top: 20px" v-model="info.uname" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input style="width: 80%;padding-top: 20px" v-model="info.upwd" placeholder="密码"></el-input>
          </el-form-item>
          <label for="t1">忘记密码</label>
          <el-form-item size="large">
            <el-button type="primary" style="background-color: black; color: white;width: 60%;" @click="Submit()">登陆</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="back">
      <div class="back-conten">
        <div class="inputTable2">
        <div style="margin: 20px;"><h2>忘记密码</h2></div>
          <el-form label-position="top" label-width="80px">
            <el-form-item>
              <el-input style="width: 80%;padding-top: 20px" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input style="width: 80%; padding-top: 20px" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input style="width: 60%; padding-top: 20px" placeholder="验证码"></el-input>
            </el-form-item>
            <label for="t2" class="backLogin">返回登录</label>
            <el-form-item size="large">
              <el-button type="primary" style="background-color: black; color: white;width: 60%;">登陆</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import {demos} from "../network/request"
export default {
name: "Login",
  props:{
    isLoginShowOpinion:Number,
  },
  data(){
  return{
    info:{
        uname:"",
        upwd:""
    },
    token:""
  }
  },
  methods:{
    Submit(){
      demos({
        method:"post",
        url:"/Ulogin",
        data:this.info,
      }).then(res=>{
        if("失败"===res.data) {
          this.$message.error(res.data);
          this.info.uname="";
          this.info.upwd="";
        }else{
          this.$store.commit("LoginToken",res.data);
          this.token=res.data;
          this.$message({
            message: "欢迎您 亲爱的:"+this.info.uname,
            type: 'success'
          });
        }
        console.log(res.data);
      }).catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>
input[name='r']{
  position: absolute;
  visibility: hidden;
}
.middle{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  background-color: white;
}
.card{
  width: 400px;
  height: 500px;
  cursor: pointer;
  transition: width .6s;
  animation:  s .6s linear;
  background-color: white;
  border-radius: 5px;
}
.card2{
  width: 400px;
  height: 0px;
  cursor: pointer;
  transition: width .6s;
  animation:  s2 .6s linear;
}
@keyframes s {
  from{height: 0}
  to{height: 500px}
}
@keyframes s2 {
  from{height: 500px}
  to{height: 0}
}
.inputTable{
  width: 100%;
  height: 100%;
  color: black;
}
.inputTable2{
  width: 100%;
  height: 100%;
  color: black;
}
label{
  cursor: pointer;
}
.font,.back{
  width: 100%;
  height: 100%;
  overflow: hidden;
  /**/
  backface-visibility: hidden;
  position: absolute;
  transition: transform .6s linear;
}
.font img{
  height: 100%;
  width: 100%;
  opacity: 0.0;
}
.back-conten{
  color: #FF0000;
  text-align: center;
  width: 100%;
}
.font{
  /**/
  transform: perspective(600px) rotateY(0deg);
}
.back{
  background-color: white;
  transform:perspective(600px) rotateY(180deg);
}
#t1:checked ~ .font{
  transform:perspective(600px) rotateY(-180deg);
}
#t1:checked ~ .back{
  transform:perspective(600px) rotateY(0deg);
}
</style>
