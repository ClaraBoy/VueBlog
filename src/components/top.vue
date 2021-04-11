<template>
  <div class="top">
    <el-row>
        <el-col :span="24"><div class="grid-content bg-purple">
          <div class="logo"  @click="indexbuts()"><h1><span style="color: #FB5353;">Clara</span></h1></div>
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"style="background-color: white">
            <div style="text-align: center">
            <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="input0" :class="{inputw:true}">
            </el-input>
            </div>
          </el-menu>
              <div class="Logindiv"><slot name="butindexlogin"></slot></div>
        </div>
        </el-col>
      </el-row>
  </div>
</template>
<script>
export default {
  name: "Layout",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      input0:'',
    };
  },
  methods: {
    indexbuts(){
      this.$router.replace("/");
    }

  },
}
</script>

<style scoped>
.top{
  line-height: 49px;
  width: 100%;
  position: relative;
  margin: 0;
  z-index: 10;
}
.Logindiv{
  position: absolute;
  top: 0;
  background-color: Transparent;
  right: 5%;
  height: 49px;
  line-height: 49px;
  margin-top: 0.2%;
  color: black;
}
.bg-purple {
  background: #d3dce6;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.inputw{
  width:40%;
  transition:width 1s;
  -webkit-transition:width 1s; /* Safari */
  margin-right: 16%;
  margin-top: 0.5%;
}
.inputw:hover{
  width: 50%;
}
img{
  width: 120px;
  height: 60px;
}
.logo{
  position: absolute;
  height: 60px;
  z-index: 2;
  padding-left: 1%;
  left: 0;
  margin-left: 2%;
  cursor: pointer;
}
</style>
