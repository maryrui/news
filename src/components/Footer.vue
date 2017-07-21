<template>
	<div class="foot">
		<ul>
<!--
			<li class="home"><a href="index.html"></a></li>
			<li class="write"><a href="javascript:;"></a></li>
			<li class="my"><a href="mydoc.html"></a></li>-->
			<router-link tag="li" to="/home" class="home">
				<a href="javascript:;"></a>
			</router-link>
			<router-link tag="li"to="/follow"  class="write">
				<a href="javascript:;"></a>
			</router-link>
			<router-link tag="li" to="/user-info" class="my">
				<a href="javascript:;"></a>
			</router-link>
	    </ul>
	</div>
</template>
<style>
	.foot{width:100%;height:0.8rem; background:#fff; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;}
	.foot ul{width:4.08rem; margin:0 auto;}
	.foot ul li{ float:left;}
	.foot ul li a{ display:block; width:100%;height:100%;}
	.foot ul .home{width:0.44rem;height:0.59rem; background:url(../assets/img/home.png) no-repeat 0 0; background-size:100%; margin-top:0.1rem;}
	.foot ul .write{width:0.82rem;height:0.81rem; background:url(../assets/img/write.png) no-repeat 0 0; background-size:100%; margin-left:1.18rem;}
	.foot ul .my{width:0.39rem;height:0.63rem; background:url(../assets/img/my.png) no-repeat 0 0;background-size:100%; margin-left:1.18rem; margin-top:0.07rem;}
</style>