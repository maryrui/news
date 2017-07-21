<template>
	<div class="content mt40">
	    <div class="newsList">
	    	<ul>
	            <li v-for="(item,index) in arrList">
	            	<a href="javascript:;">
	                    <h2>{{item.title}}</h2>
	                    <p>{{item.detail}}</p>
	                </a>
	            </li>
	        </ul>
	    </div>
	</div>
</template>
<script>
	export default {
		data(){
		    return {
		        arrList:[]
			}
		},
		mounted(){
		    this.fetchData()
		},
		methods:{
            fetchData:function(){
		        var _this=this;
		        this.$http.get("./static/data/follow.data").then(function(res){
		            _this.arrList=res.data;
				})
			}
		}
	}
</script>
<style scoped>
	.mt40{
		margin-top:40px;
	}
</style>