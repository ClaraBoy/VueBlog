<template>
<div>
  <div>
    <div class="wh" style="width: 100%;
			 background-color: white;
			 position: relative;">
      <div style="width: 60px;
				height: 80px;
				background-color: #333;
				 position: absolute;
				 left: 50px;
				 top: 15%;
				 color: white;
				  transform: rotate(40deg);
					   text-align: center;
					   line-height: 80px;
				  "><h2 class="number0" style="display:inline-block;
						 transform: rotate(-40deg);
					">1</h2>
        <h3 style=" transform: rotate(-40deg);
					 color:  #333;
					 font-size: 20px;
					  position: absolute;
					  left: 70px;
					  font-weight: 400;
					  display: inline-block;
					  width: 80px;">今日更新</h3></div>
      <div style="height: 100px;
				 position: absolute;
				  top: 15%;
				  left: 250px;
				  width: 400px;
				  "><h1 style="color: #333;
				  line-height: 100px;
				  ">劫财的拉布拉多</h1></div>
      <div style="width: 60px;
					height: 200px;
				   position: absolute;
				   background-color:  #333;
				   margin-top: 15%;
				   left: 290px;
				   width: 150px;
				   "><img :src="src" style="width: 150px; height: auto;"/>
        <div style="background-color: #333;
				   color: white;
					text-align: center;
					 height: 50px;
					 line-height: 50px;
					  border-radius: 10px;
					   margin-top: 15px;
					   cursor: pointer;
					   "><span style="font-size: 20px;text-align: center;font-weight: 500;">+点击订阅</span></div>
      </div>
      <div style="width: 300px;
				   height: 220px;
					position: absolute;
					left: 500px;
					 top: 35%;
					color:  #333;
					">
        <ul>
          <li><p>导演：里斯</p></li>
          <li><p>编剧：马克</p></li>
          <li><p>主演：Luis lso</p></li>
          <li><p>类型：恐怖</p></li>
          <li><p>国家/地区：法国</p></li>
          <li><p>上映日期：2021-5-22</p></li>
          <li><p>片长：94分钟</p></li>
        </ul>
      </div>
      <div class="wh" style=" width: 60%;
				  position: absolute;right: 0;
				  background:   linear-gradient(100deg,transparent 250px,#D84E13 0) top left;">
        <div style="position: absolute;  left: 30%;color: white; top: 28%;">
          <h2 style="left: -5%; position: absolute;">剧情简介</h2>
          <br>
          <br>
          <div style="width: 95%;
						 line-height: 30px;
						 font-size: 15px;">
            <p>直接拿到样式里，调整好角度就好了。M11 ,M12,M21，M22 这四个参数是调整倾斜角度的，M11和M22 数一样M12和M21数一样就可以控制成正方形了。正负是调整倾斜方向的。具体的自己用的时候多试试就明白了</p>
          </div>
          <br>
          <h2 style="left: -8%;
						position: absolute;">下载链接</h2>
          <br>
          <br>
          <div style="position: absolute;
							line-height: 50px;
						 height: 50px; width: 90%;">
            <span>劫财的拉布拉多.Seance.2021.BD1080P.X264.AAC.English.CHS-ENG.Mp4er</span>
            <br>
            <span>劫财的拉布拉多.Seance.2021.BD720P.X264.AAC.English.CHS-ENG.Mp4er</span>
          </div>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <h2 style="left: -12%;
						position: absolute;">猜你喜欢</h2>
          <br>
          <br>
          <div style="position: absolute;
							line-height: 50px;
						 height: 50px; width: 90%;">
            <span>坍缩（2022）</span>
            <span>他们</span>
          </div>
          <div class="next0" style="position: fixed;
						 height: 60px;
						 width: 120px;
						  background-color: #333;
						  color: white;
						   right: 10%;  bottom: 8%;
							line-height: 60px;
							 text-align: center;
							 cursor: pointer;
							 z-index: 100;
							 ">
            <span>下一部</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "mov",
  data(){
    return{
      heights:"",
      src:require('../../assets/img/Bloe/fmov.png'),
    }
  },
  mounted() {
    this.heights= document.documentElement.clientHeight+"px";
    document.getElementsByClassName("wh")[0].style.height=this.heights
    document.getElementsByClassName("wh")[1].style.height=this.heights
    window.onresize = () => {
      this.heights= document.documentElement.clientHeight+"px";
      document.getElementsByClassName("wh")[0].style.height=this.heights
      document.getElementsByClassName("wh")[1].style.height=this.heights
    }
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
li{
  list-style: none;
  font-size: 20px;
  line-height: 1.42857143;
  margin-bottom: 5px;
}
span{
  cursor: pointer
}
</style>
