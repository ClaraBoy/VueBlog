<template>
<div>
  <div class="container">
      <div class="comment-messages-list">
        <div class="comment-message-message">
          <div class="comment-message-body">
            <div class="comment-message-details">
              <span class="message-details-sender"><h2>{{items.topicid}}</h2></span>
              <span class="message-details-time" ><h3>{{items.topicdate}}</h3></span>
              <button class="but" @click="openDialog">回复</button>
            </div>
            <div class="comment-message-text">
              <p>{{items.topictext}}</p>
            </div>
            <div v-for="item in RepleComments">
              <div v-show="items.id===item.commentid">
                {{item.fromusid}}{{item.repletext}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <div>
    <el-dialog title="回复" :visible.sync="dialogFormVisible">
      <el-form>
        <el-form-item label="内容" :label-width="formLabelWidth">
          <el-input type="textarea" :rows="5" v-model="repleinfo.repletext" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" style="width: 80px;height: 50px">取 消</el-button>
        <el-button type="primary" @click="butreple()" style="width: 80px;height: 50px;background-color: black" >确 定</el-button>
      </div>
    </el-dialog>
  </div>
  </div>
</template>
<script>
export default {
name: "Commentmessage",
  props:{
  items:"",
    RepleComments:"",
  },
  data(){
return{
  dialogFormVisible:false,
  formLabelWidth: '60px',
  repleinfo:{
    commentid:this.items.id,//根
    repleid:this.items.topicid,//给谁的回复
    repleType:0,//回复的类型
    repletitle:"",//哪一篇文章
    fromusid:this.$store.getters.RetUid,//回复人id
    touid:"",//赞不知道
    repletext:"",//内容
  }
}
  },
  methods:{
    openDialog(){
      this.dialogFormVisible=true;
    },
    butreple(){
      this.dialogFormVisible=false;
      this.$emit("reple",this.repleinfo);//发射事件
    }
  },
}
</script>

<style scoped>
.but{
  line-height: 20px;
  height: 20px;
  background: white;
  margin-left: 60%;
  font-family:Webdings;
  font-size: 16px;
  cursor: pointer;
}
.but:hover{
  color: black;
}
p{
  text-indent:2em;
  line-height:25px
}
/*Base css ---*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

body,
html {
  height: 100%;
  width: 100%;
  background: lightgray;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.container {
  /*Responsive on all sizes ---*/
  height: auto;
  width: 70%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  margin: 0 auto;
}
.comment-messages-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.comment-message-message {
  position: relative;
  height: auto;
  min-height: 80px;
  width: 100%;
  background: white;
  border-bottom: 1px solid lightgray;
  margin-bottom: 10px;
  display: flex;
  padding: 5px;
  flex-direction: row-reverse;
  flex-shrink: 0;
  box-shadow: 0px 18px 54px -30px rgba(0, 0, 0, 0.30);
}

.comment-message-message:hover::before {
  opacity: 1;
}

.comment-message-message:last-child {
  border: 0;
  box-shadow: none;
}
.comment-message-body {
  width: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
}

.comment-message-details {
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.message-details-sender {
  font-weight: bold;
  font-size: 14px;
}

.message-details-time {
  color: gray;
  font-size: 12px;
  padding-left: 20px;

}

.comment-message-text {
  width: 100%;
  padding-top: 10px;
  color: #1c1c1c;
  margin-bottom: 5px;
}
</style>
