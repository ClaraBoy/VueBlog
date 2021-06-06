<template>
  <div>
    <div>
    <div class="slideshow mid">
      <div class="slides">
        <input type="radio" name="r" id="r1" checked>
        <input type="radio" name="r" id="r2">
        <input type="radio" name="r" id="r3">
        <input type="radio" name="r" id="r4">
        <input type="radio" name="r" id="r5">
      <div class="slide s1">
        <div class="box_sb sb1">
          <span>SpringBoot</span>
        </div>
        <div class="box_sb1 sc1">
          <p :class="{pText:ispText,pText2:ispText2}">Spring Boot是由Pivotal团队提供的全新框架，其设计目的是用来简化新Spring应用的初始搭建以及开发过程。该框架使用了特定的方式来进行配置，从而使开发人员不再需要定义样板化的配置。通过这种方式，Spring Boot致力于在蓬勃发展的快速应用开发领域(rapid application development)成为领导者。</p>
        </div>
        <img src="../assets/img/index/1.jpg" alt=""/>
      </div>
      <div class="slide">
        <div class="box_sb sb2">
          <span>VueCli</span>
        </div>
        <div class="box_sb1 sc2">
          <p :class="{pText:ispText,pText2:ispText2}">Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统，提供：
            通过 @vue/cli 搭建交互式的项目脚手架。
            通过 @vue/cli + @vue/cli-service-global 快速开始零配置原型开发。
            一个运行时依赖 (@vue/cli-service)，该依赖：可升级；基于 webpack 构建，并带有合理的默认配置；可以通过项目内的配置文件进行配置；可以通过插件进行扩展。
            一个丰富的官方插件集合，集成了前端生态中最好的工具。
            一套完全图形化的创建和管理 Vue.js 项目的用户界面。</p>
        </div>
        <img src="../assets/img/index/2.jpg" alt=""/>
      </div>
      <div class="slide">
        <div class="box_sb sb3">
          <span>Mybatis</span>
        </div>
        <div class="box_sb1 sc3">
          <p :class="{pText:ispText,pText2:ispText2}">MyBatis 是一款优秀的持久层框架，它支持定制化 SQL、存储过程以及高级映射。MyBatis 避免了几乎所有的 JDBC 代码和手动设置参数以及获取结果集。MyBatis 可以使用简单的 XML 或注解来配置和映射原生信息，将接口和 Java 的 POJOs(Plain Ordinary Java Object,普通的 Java对象)映射成数据库中的记录。</p>
        </div>
        <img src="../assets/img/index/3.jpg" alt=""/>
      </div>
      <div class="slide">
        <div class="box_sb sb4">
          <span>Html</span>
        </div>
        <div class="box_sb1 sc4">
          <p :class="{pText:ispText,pText2:ispText2}">HTML的全称为超文本标记语言，是一种标记语言。它包括一系列标签．通过这些标签可以将网络上的文档格式统一，使分散的Internet资源连接为一个逻辑整体。HTML文本是由HTML命令组成的描述性文本，HTML命令可以说明文字，图形、动画、声音、表格、链接等</p>
        </div>
        <img src="../assets/img/index/4.jpg" alt=""/>
      </div>
      <div class="slide">
        <div class="box_sb sb5">
          <span>JQuery</span>
        </div>
        <div class="box_sb1 sc5">
          <p :class="{pText:ispText,pText2:ispText2}">jQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或JavaScript框架）。jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互。</p>
        </div>
        <img src="../assets/img/index/5.jpg" alt=""/>
      </div>
      <div>
      </div>
      </div>
      </div>
      <div class="bottom">
       <span>SpringBoot</span> <span>VueCli</span> <span>Mybatis</span> <span>Html</span> <span>JQuery</span>
      </div>
      <div class="nav">
        <label for="r1" class="bar" @click="but(1)"></label>
        <label for="r2" class="bar" @click="but(2)"></label>
        <label for="r3" class="bar" @click="but(3)"></label>
        <label for="r4" class="bar" @click="but(4)"></label>
        <label for="r5" class="bar" @click="but(5)"></label>
      </div>
    </div>
  </div>
</template>
<script>
import anime from "animejs/lib/anime.es.js";
import Bloebottomslot from "../view/Bottom/Bloebottomslot";
export default {
  name: "index",
  inject:['reload'],
  components:{
    Bloebottomslot
  },
  data(){
    return{
      ispText:true,
      ispText2:false,
    }
  },
  methods: {
    but(ch){
      this.ispText=true
      this.ispText2=false
      anime({
        targets: '.sb'+ch,
        translateX: "150px",
        easing: 'easeInOutQuart',
        width:"400px",
        duration: 1600,
      });
      anime({
        targets: '.sc'+ch,
        translateX: "-200px",
        easing: 'easeInOutQuart',
        width:"400px",
        duration: 1600,
      });
      setTimeout(()=>{
        this.ispText=false
        this.ispText2=true
      },2000)
      for(let i=1;i<=5;i++){
        if(ch!=i){
          anime({
            targets: '.sb'+i,
            translateX: "0px",
            easing: 'easeInOutQuart',
            width:"400px",
            duration: 1600,
          });
          anime({
            targets: '.sc'+i,
            translateX: "-90%",
            easing: 'easeInOutQuart',
            width:"400px",
            duration: 1600,
          });
        }
      }
    }
  },
  mounted() {
    anime({
      targets: '.sb1',
      translateX: "150px",
      easing: 'easeInOutQuart',
      width:"400px",
      duration: 1600,
    });
    anime({
      targets: '.sc1',
      translateX: "-200px",
      easing: 'easeInOutQuart',
      width:"400px",
      duration: 1600,
    });
    setTimeout(()=>{
      this.ispText=false
      this.ispText2=true
    },2000)
    document.body.style.overflow='hidden';
  },
}

</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
.slideshow{
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
}
.mid{
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.slides{
  width: 500%;
  height: 100%;
  display: flex;
}
.slide{
  width: 20%;
  transition:  0.6s;
}
.slide img{
  width: 100%;
  height: 100%;
}
.nav{
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  z-index: 10;
}
.bar{
  width: 50px;
  height: 15px;
  border: 2px solid white;
  margin: 6px;
  cursor: pointer;
  transition: 0.4s;
}
.bar:hover{
  background-color: white;
}
input[name='r']{
  position: absolute;
  visibility: hidden;
}
#r1:checked ~ .s1{
  margin-left: 0;
}
#r2:checked ~ .s1{
  margin-left: -20%;
}
#r3:checked ~ .s1{
  margin-left: -40%;
}
#r4:checked ~ .s1{
  margin-left: -60%;
}
#r5:checked ~ .s1{
   margin-left: -80%;
 }
.box_sb{
  width: 300px;
  height: 200px;
  text-align: center;
  color: white;
  line-height: 200px;
  position: absolute;
  z-index: 10;
  margin-top: 20%;
}
.box_sb1{
  width: 300px;
  height: 400px;
  text-align: center;
  color: white;
  line-height: 45px;
  position: absolute;
  z-index: 10;
  margin-top: 15%;
  margin-left: 80%;
}
.pText{
  color: transparent;
  z-index: -10;
}
.pText2{
  color: white;
  transition: all 2s;
  z-index: 20;
}
.box_sb span{
  font-size: 60px;
}
.box_sb1 span{
  font-size: 60px;
}
.bottom{
  width: 100%;height:60px;background-color: white;position: absolute;bottom: 0;line-height: 60px;text-align: center;
 display: flex;
}
.bottom span{
transition: all 1.0s;
  flex: 1;
  font-size: 15px;
}
.bottom span:hover{
background-color: black;
  color: white;
  cursor: pointer;
  font-size: 20px;
}
</style>
