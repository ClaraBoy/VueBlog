<template>
<div>
  <div class="con">
    <div>
      <el-card class="box-card">
        <div id="lefttextbox">"{{this.$route.query.SearchInfo}}"&nbsp<span>{{SearchInfo.length}}</span>&nbsp&nbsp检索</div>
        <div class="mess"><h1>未知查询!</h1></div>
        <div v-for="(item,index) in SearchInfo">
        <div class="textbox" @click="ToAbout(item.menutitle)">
            <div class="textleft">日期:{{item.menudate}}</div>
            <div class="textright">
              <p>
                {{item.menutitle}}
             </p>
            </div>
        </div>
        </div>
      </el-card>
    </div>
    <div><Bloebottomslot><Bloebottom></Bloebottom></Bloebottomslot></div>
  </div>
</div>
</template>
<script>
import Bloebottom from "../view/Bottom/Bloebottom";
import Bloebottomslot from "../view/Bottom/Bloebottomslot";
import {demos} from "../network/request";
export default {
name: "Search_page",
  inject:['reload'],
  components:{
    Bloebottom,
    Bloebottomslot,
  },
  data(){
  return{
    SearchInfo: {}
  }
  },
  methods:{
  mod(){
    demos({
      url:"/DetaileLick?menutitle="+this.$route.query.SearchInfo,
    }).then(res=>{
      if(res.data.length<=0){
          document.getElementsByClassName("mess")[0].style.display="block";
      }else{
          document.getElementsByClassName("mess")[0].style.display="none";
        this.SearchInfo=res.data;
      }
    }).catch(res=>{
    })
  },
    ToAbout(title){
      this.$router.push({
            path:"/Details",
            query:{
              menutitle:title,
            }
      })
    }
  },
  mounted() {
  this.mod();
  },
  beforeRouteUpdate(to, from, next) {
    this.mod();
    next();
    this.reload();
  },
}
</script>

<style scoped>
.con{
  width: 100%;
  height: auto;
  margin-top: 30px;
}
.box-card{
  width: 70%;
  margin: 0 auto;
  height: 600px;
}
.mess{
  text-align: center;
  margin-top: 120px;
}
#lefttextbox{
  font-size: 20px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #404040;
}
#lefttextbox span{
  font-size: 16px;
}
.textbox{
  margin: 30px auto;
  height: 100px;
  width: 90%;
  -webkit-box-shadow: 0 0 15px 5px rgba(1,1,1,0.1);
  -moz-box-shadow: 0 0 15px 5px rgba(1,1,1,0.1);
  box-shadow: 0 0 15px 5px rgba(1,1,1,0.1);
  position: relative;
  overflow:hidden;
  cursor: pointer;
}
.textbox:hover{
  box-shadow:5px 5px 5px 5px rgba(1,1,1,0.1);
}
.textleft{
  width: 30%;
  line-height: 100px;
  position: absolute;
  left: 60px;
  font-size: 20px;
}
.textright{
  width: 70%;
  position: absolute;
  right: 30px;
  line-height: 100px;
}
/*.textright:after{*/
/*  content:"...";*/
/*  position: absolute;*/
/*  bottom: 0;*/
/*  right: 0;*/
/*  padding: 0 48px 0 45px;*/
/*  font-weight: bold;*/
/*}*/
</style>
