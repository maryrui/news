<script src="main.js"></script>
<template>
  <div id="app">
    <loading v-show="loading"></loading>
    <HeadShow v-show="header">
    </HeadShow>

    <transition name="slide-down">
      <router-view class="router-view"></router-view>
    </transition>

    <FooterShow v-show="header"></FooterShow>
  </div>
</template>

<script>
    import HeadShow from "./components/Nav.vue"
    import {mapGetters,mapActions} from "vuex"
    //  import Home from "./components/Home.vue"
    import FooterShow from "./components/Footer.vue"
    export default {
        computed:mapGetters([
            "header",
            "loading"
        ]),
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                num:0
            }
        },
        watch:{
            $route:function(to){
                var toPath=to.path.substring(1);
                if(toPath.indexOf("article")!=-1||toPath=="user-info"||toPath=="login"||toPath=="reg"){
                    this.$store.dispatch("hideHead");
                }else{

                    this.$store.dispatch("showHead");
                }
            }
        },
        components:{
            HeadShow,
            FooterShow
        }
    }
</script>

<style>
  .slide-up-enter-active, .slide-up-leave-active {
    transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: .7;
    transform: translate3d(0, 4em, 0);
  }
  .slide-up-enter, .slide-up-leave-active {
    opacity: .3;
    transform: translate3d(0, 4em, 0);
  }

  .slide-down-enter-active, .slide-down-leave-active {
    transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: .7;
    transform: translate3d(0, 6em, 0);
  }
  .slide-down-enter, .slide-down-leave-active {
    opacity: .1;
    transform: translate3d(0, 6em, 0);
  }

  .slide-left-enter-active, .slide-left-leave-active {
    transition: all .2s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: .5;
    transform: translate3d(2em, 0, 0);
  }

  .slide-left-enter, .slide-left-leave-active {
    opacity: .3;
    transform: translate3d(2em, 0, 0);
  }

  .slide-right-enter-active, .slide-right-leave-active {
    transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: .5;
    transform: translate3d(5em, 0, 0);
  }
  .slide-right-enter, .slide-right-leave-active {
    opacity: .3;
    transform: translate3d(5em, 0, 0);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .4s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
