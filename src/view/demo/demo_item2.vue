<template>
<div>
	<div class="top">
    <div class="top1">
	<div class="con">
	<div class="con_show2">
	<div class="slide">
  	<ul class="slide-auto">
    <li><a href="fun.html"><img src="../../assets/img/Bloe/111.jpg"/></a></li>
    <li><a href="new_file38.html"><img src="../../assets/img/Bloe/222.jpg"/></a></li>
    <li><a href=""><img src="../../assets/img/Bloe/333.jpg"/></a></li>
	  </ul>
	</div>

	<div style=" position: sticky;top:10px">
	<div class="box" @click="but()">
      <span class="box_span">Js学习内容简介</span>
	<div :class="isactiveshow">
			<span>最新</span>
			<span>发布时间:2021</span>
			<span>评论:80</span>
			<span>阅读量:60</span>
	</div>
	<br>
	</div>
	</div>
	</div>
  </div>
    </div>
<div class="top2">
  000000
</div>
  </div>
</div>
</template>

<script>
export default {
  name: "demo_item2",
  data(){
    return{
      isactiveshow:"box_show",
    }
  },
  methods:{
     but()
    {
        this.isactiveshow="box_show2";
   setTimeout(()=>{
     this.isactiveshow="box_show3";
     setTimeout(()=>{
       this.isactiveshow="box_show";
     },3010)
   },3000)
}
  }
}

</script>

<style scoped>
.top{
  display:flex;
  height: 1000px;
}
.top1{
  flex: 1;
  width: 50%;
  background-color: darkorchid;
}
.top2{
  flex: 1;
  width: 50%;
  background-color: coral;
}
	*{
			padding: 0;
			margin: 0;
		}
	.con{
	width: 600px;
	height: auto;
	position: relative;
    margin: 120px auto;
	}
.con_show2{
  width: 100%;
  height: 50%;
  text-align: center;
  margin-top: 15px;

}
	.box{
	position: absolute;
	width: 600px;
	height: 80px;
	background-color: coral;
	bottom: -80px;
	line-height:80px;
	margin-top: 60px;

	}
  .box span{
    flex: 1;
    text-align: center;
    font-size: 20px;
  }
  .box_span{
    color: white;
    padding-left: 10px;

  }
	.box_show2{
	top:-40px;
	height: 40px;
	background: coral;
	width: 100%;
	text-align: center;
	animation:mymove 3s infinite;
	-webkit-animation:mymove 3s infinite;
	position: absolute;
	animation-iteration-count:1;
	line-height: 40px;
	color: coral;
	display: flex;
	}
	.box_show
	{
		color: transparent;
		  display: none;
		  display: flex;
	}
	.box_show3{
	top:0px;
	height: 0px;
	background: coral;
	width: 100%;
	text-align: center;
	animation:mymove2 3s infinite;
	-webkit-animation:mymove2 3s infinite;
	position: absolute;
	animation-iteration-count:1;
	line-height: 40px;
		color: coral;
		display: flex;
	}
	@keyframes mymove
	{
	from {
	top:0px;height: 0px;
	color: transparent;
		  transition-duration: 3s;
	}
	to {
	top:-40px;
	height: 40px;
	color: white;
    line-height: 40px;
		  transition-duration: 3s;
	}
	}
	@keyframes mymove2
	{
	from {

	top:-40px;
	height: 40px;
	color: white;
    line-height: 40px;
    transition-duration: 3s;
	}
	to {
	top:0px;height: 0px;
		color: transparent;
		  transition-duration: 3s;
	}
	}
	.box_menu{
	color: white;
	float: right;
	z-index: 10;
	margin-right: 60px;
	}
	.con_show{
		width: 100%;
		color: brown;
		height: 40%;
		 overflow: hidden;

	}
	.slide {
    	margin: auto;
    	width: 100%;
		color: brown;
		height: 100%;
    	text-align: center;
    	font-family: Arial;
    	color: #FFF;
    	overflow: hidden;
}

.slide ul {
    margin: 10px 0;
    padding: 0;
    width: 9999px;
    transition: all 0.5s;
}
/*//自动播放*/
.slide .slide-auto {
    animation: marginLeft 10.5s infinite;
}

.slide li {
    float: left;
    width: 600px;
    height: 300px;
    list-style: none;
    line-height: 300px;
    font-size: 36px;
}
@keyframes marginLeft {
    0% {
        margin-left: 0;
    }

    28.5% {
        margin-left: 0;
    }

    33.3% {
        margin-left: -600px;
    }

    62% {
        margin-left: -600px;
    }

    66.7% {
        margin-left: -1200px;
    }

    95.2% {
        margin-left: -1200px;
    }

    100% {
        margin-left: 0;
    }
	}
	img{
		width: 100%;
		height: 100%;
		transition: all 2s;

	}


</style>
