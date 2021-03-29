<template>
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
          <span>简单</span>
        </div>
        <div class="box_sb1 sc1">
          <span>1</span>
        </div>
        <img src="../assets/img/index/1.jpg" alt=""/>
      </div>
      <div class="slide">
        <div class="box_sb sb2">
          <span>快速</span>
        </div>
        <div class="box_sb1 sc2">
          <span>2</span>
        </div>
        <img src="../assets/img/index/2.jpg" alt=""/>
      </div>
      <div class="slide">
        <div class="box_sb sb3">
          <span>便利</span>
        </div>
        <div class="box_sb1 sc3">
          <span>3</span>
        </div>
        <img src="../assets/img/index/3.jpg" alt=""/>
      </div>
      <div class="slide">
        <div class="box_sb sb4">
          <span>最新</span>
        </div>
        <div class="box_sb1 sc4">
          <span>4</span>
        </div>
        <img src="../assets/img/index/4.jpg" alt=""/>
      </div>
      <div class="slide">
        <div class="box_sb sb5">
          <span>专业</span>
        </div>
        <div class="box_sb1 sc5">
          <span>5</span>
        </div>
        <img src="../assets/img/index/5.jpg" alt=""/>
      </div>
      <div>
      </div>
      </div>
      </div>
      <div class="nav">
        <label for="r1" class="bar" @click="but(1)"></label>
        <label for="r2" class="bar" @click="but(2)"></label>
        <label for="r3" class="bar" @click="but(3)"></label>
        <label for="r4" class="bar" @click="but(4)"></label>
        <label for="r5" class="bar" @click="but(5)"></label>
      </div>
    </div>
</template>
<script>
import anime from "animejs/lib/anime.es.js";
export default {
  name: "index",
  components:{
  },
  methods: {
    but(ch){
      anime({
        targets: '.sb'+ch,
        translateX: "250px",
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
      for(let i=1;i<=4;i++){
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
      translateX: "250px",
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
  position: relative;
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
  bottom: 5%;
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
  background-color: rgba(10,10,10,0.2);
  margin-top: 20%;
}
.box_sb1{
  width: 300px;
  height: 400px;
  text-align: center;
  color: white;
  line-height: 200px;
  position: absolute;
  z-index: 10;
  background-color: rgba(10,10,10,0.2);
  margin-top: 15%;
  margin-left: 80%;
}
.box_sb span{
  font-size: 60px;
}
.box_sb1 span{
  font-size: 60px;
}
</style>
