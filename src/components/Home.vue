<template>
	<div class="content">
		<Slider></Slider>
	    <div class="newsList">
	    	<ul>
	            <li v-for="(item,i) in arrList">
					<router-link :to="'/article/'+item.id">
						<h2>{{item.title}}</h2>
						<p>{{item.detail}}</p>
					</router-link>
	            </li>
	        </ul>
	    </div>
	</div>
</template>
<script>
	import Slider from './Slider.vue'
	export default {
		data(){
			return {
				arrList:[]
			}
		},
		components:{
			Slider
		},
		mounted(){
		    this.fetchdata();
		},
		methods:{
            fetchdata:function(){
		        var _this=this;
		        this.$http.get("./static/data/index.data").then(function(res){
		            _this.arrList=res.data;
				}).catch(function(err){
					console.log(111);
				}
				)
			}
		}
	}

</script>
<style>
	@import '../assets/css/index.css';
</style>