<template>
<div class="top">
  <h1>这是测试页面 心跳测试</h1>
  <br>
  <div>数据展示区域</div>
  <div>

  </div>
</div>
</template>
<script>
export default {
name: "test",
  data(){
    return{
      lockReconnect: false,//是否真正建立连接
      timeout: 2*1000,//5秒一次心跳
      timeoutObj: null,//心跳心跳倒计时
      serverTimeoutObj: null,//心跳倒计时
      timeoutnum: null,//断开 重连倒计时
      mess:"",
    }
},
  methods:{
    initWebSocket: function () {
      this.websock = new WebSocket("ws://localhost:9000/The_heartbeat");
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onclose = this.websocketclose;
    },
    start(){
      if(this.lockReconnect===true)
      {
        clearInterval(this.timeoutnum);
        this.serverTimeoutObj=setInterval(()=>{
          this.timeoutObj=setTimeout(()=>{
            this.websocketsend("200");
          console.log(this.mess)
          });
        },this.timeout)
      }else{
        clearInterval(this.serverTimeoutObj);
        clearInterval(this.timeoutObj);
        this.timeoutnum= setInterval(()=>{
          setTimeout(this.websocketonopen,0)
        },5000)
      }
    },
    websocketonopen: function (e){
      this.lockReconnect=true;
      this.start();
    },
    websocketonerror: function (e) {
      console.log("WebSocket连接发生错误");
      this.websocketonopen();
    },
    websocketonmessage: function (e) {
      //接收数据
      // var da = JSON.parse(e.data);
      this.mess=e.data.toString();
    },
    websocketclose: function (e) {
      console.log("connection closed (" + e.code + ")");
    },
    websocketsend(Data) {
      this.websock.send(Data);
    },
  },
  created() {
    this.initWebSocket();
  },
  destroyed: function () {
    this.websocketclose();
  },
  mounted() {

  }
}
</script>

<style scoped>
.top{
  text-align: center;
}
</style>
