/**
 * Created by Administrator on 2017/7/14.
 */
import getters from "./getters.js"
const state={
    header:true,
    loading:true
}
const mutations={
    showHeader(state){
        state.header=true;
    },
    hideHeader(state){
        state.header=false;
    },
    showLoading(state){
        state.loading=true;
    },
    hideLoading(state){
        state.loading=false;
    }
}
export default{
    mutations,
    state,
    getters
}