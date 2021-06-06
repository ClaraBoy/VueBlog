<template>
<div>
  <div :class="{card:isLoginShowOpinion%2===0,card2:isLoginShowOpinion%2!==0,middle:true}">
    <input type="radio" name="r" id="t1"/>
    <input type="radio" name="r" id="t2"/>
    <input type="radio" name="r" id="t3"/>
    <input type="radio" name="r" id="t4"/>
    <div :class="{registerBox:isLoginShowOpinion%2===0,registerBox2:isLoginShowOpinion%2!==0}">
      <label for="t4">
        <svg t="1620034191579" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1128" width="16" height="16"><path d="M926.1 813.5L810.7 928.9 510.4 628.6 210.2 928.9 94.7 813.5 395 513.2 94.7 212.9 210.2 97.5l300.3 300.3L810.7 97.5 926.1 213 625.9 513.2l300.2 300.3z" fill="#060001" p-id="1129"></path></svg>
      </label>
      <h2>注&nbsp册</h2>
      <el-form label-position="top" label-width="80px">
        <el-form-item>
          <el-input style="width: 80%;padding-top: 10px" v-model="registerinfo.nickname" placeholder="昵称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input style="width: 80%;padding-top: 10px" v-model="registerinfo.uname" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input style="width: 80%;padding-top: 10px" v-model="registerinfo.upwd" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input style="width: 80%;padding-top: 10px" v-model="registerinfo.upwd" placeholder="重复密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input style="width: 80%;padding-top: 10px" v-model="registerinfo.uemile" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item size="large">
          <el-button type="primary" style="background-color: black; color: white;width: 60%;" @click="Submitregister()">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="font">
      <div class="inputTable">
        <div style="margin: 20px;"><h2>用&nbsp户&nbsp登&nbsp陆</h2></div>
        <el-form label-position="top" label-width="80px">
          <el-form-item>
            <el-input style="width: 80%;padding-top: 20px" v-model="info.uname" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input style="width: 80%;padding-top: 20px" v-model="info.upwd" placeholder="密码"></el-input>
          </el-form-item>
          <label for="t1">忘记密码</label>
          <label for="t3">注册</label>
          <el-form-item size="large">
            <br>
            <el-button type="primary" style="background-color: black; color: white;width: 60%;" @click="Submit()">登陆</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="back">
      <div class="back-conten">
        <div class="inputTable2">
        <div style="margin: 20px;"><h2>忘&nbsp记&nbsp密&nbsp码</h2></div>
          <el-form label-position="top" label-width="80px">
            <el-form-item>
              <el-input style="width: 80%;padding-top: 20px" placeholder="账号" v-model="resetpwdinfo.uname"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input style="width: 50%;position: absolute;left: 40px" placeholder="邮箱" :disabled="isAble" @blur="sendVerification()" v-model="resetpwdinfo.uemile">
              </el-input><el-input style="width: 28%; margin-left: 52%" placeholder="验证码" v-model="resetpwdinfo.Verification"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input style="width: 60%; padding-top: 10px" placeholder="新密码" v-model="resetpwdinfo.upwd"></el-input>
              <el-input style="width: 60%; padding-top: 20px" placeholder="重复新密码" v-model="resetpwdinfo.upwd"></el-input>
            </el-form-item>
            <label for="t2" class="backLogin">返回登录</label>
            <el-form-item size="large">
              <el-button type="primary" style="background-color: black; color: white;width: 60%;" @click="resetpwd()">提交</el-button>
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
    registerinfo:{
        nickname:"",
        uname:"",
        upwd: "",
        uemile:"",
    },
    user:{},
    resetpwdinfo:{
      uname:"",
      uemile:"",
      Verification:"",
      upwd: "",
    },
    isAble:false,
  }
  },
  methods:{
    Submit(){
      demos({
        method:"post",
        url:"/Ulogin",
        data:this.info,
      }).then(res=>{
        this.user=res.data;
        if(this.user.token===null) {
          console.log(res.data)
          this.$message.error("登陆失败 请检查信息");
          this.info.uname="";
          this.info.upwd="";
        }else{
          console.log(this.user.uid)
          this.$store.commit("LoginToken",this.user);
          this.user=res.data;
          this.$message({
            message: "欢迎您 亲爱的:"+this.info.uname,
            type: 'success'
          });
        }
        console.log(res.data);
      }).catch(err=>{
        console.log(err);
      })
    },
    Submitregister() {
      if (this.registerinfo.nickname.length>0&&this.registerinfo.uname.length>0&&this.registerinfo.upwd.length>=6&&this.registerinfo.uemile.length>0) {
        const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
        if (regEmail.test(this.registerinfo.uemile)) {
          demos({
            method: "post",
            url: "/addUser",
            data: this.registerinfo,
          }).then(res => {
            if(res.data==0){
              this.$message({
                message: "请检查信息 或有重复",
                type: 'warning'
              });
            }else{
              this.$message({
                message: "注册成功",
                type: 'success'
              });
            }
          }).catch(err => {
            console.log(err);
          })
        }else{
          this.$message({
            type: 'warning',
            message: '请输正确的邮箱地址',
          })
        }
      }else{
        this.$message({
          message: "请检查信息",
          type: 'warning'
        });
      }
    },
    sendVerification(){
      if(this.resetpwdinfo.uname.length>0&&this.resetpwdinfo.uemile.length>0){
        const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
        if (regEmail.test(this.resetpwdinfo.uemile)) {
         demos({
           method:"post",
           url:"/sendVerification",
           data:this.resetpwdinfo,
         }).then(res=>{
                  if(res.data!=null) {
                    this.$message({
                      message: "验证码发送成功 30s后可重新发送",
                      type: 'success'
                    });
                  }
           this.isAble=true;
                  setTimeout(()=>{
                    this.isAble=false;
                  },30000)
         }).catch(ree=>{

         })
        }else{
          this.$message({
            type: 'warning',
            message: '请输正确的邮箱地址',
          })
        }
      }else if(this.resetpwdinfo.uname.length===0){
        this.$message({
          message: "请输入账号名",
          type: 'warning'
        });
      }else{
        this.$message({
          message: "请输入邮箱",
          type: 'warning'
        });
      }
    },
    resetpwd(){
      if(this.resetpwdinfo.uname.length>0&&this.resetpwdinfo.uemile.length>0&&this.resetpwdinfo.upwd>0&&this.resetpwdinfo.Verification.length>0){

          demos({
            medthod:"post",
            url:""
          }).then(res=>{
            alert(res.data)
          }).catch(err=>{

          })
        }
    },
    },
}
</script>

<style scoped>
body{
  color: transparent;
}
.registerBox{
  position: absolute;
  transform: perspective(600px) rotateY(90deg);
}
.registerBox2{
display: none;
}
.registerBox h2{
  padding-top: 20px;
}
.registerBox label{
  right: 20px;
  top: 0px;
  position: absolute;
}
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
  text-align: center;
  width: 100%;
}
.font{
  /**/
  transform: perspective(600px) rotateY(0deg);
}
.back{
  transform:perspective(600px) rotateY(180deg);
}
#t1:checked ~ .font{
  transform:perspective(600px) rotateY(-180deg);
}
#t1:checked ~ .back{
  transform:perspective(600px) rotateY(0deg);
}
#t3:checked ~ .registerBox{
  background-color: white;
  transition: all 2.0s;
  color: black;
  z-index: 10;
  width: 400px;
  height: 500px;
  position: absolute;
  left: -410px;
  border-right: 5px;
  transform: perspective(600px) rotateY(0deg);
}
#t4:checked ~ .registerBox{
  transform: perspective(600px) rotateY(-90deg);
}
</style>
