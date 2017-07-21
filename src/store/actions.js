/**
 * Created by Administrator on 2017/7/14.
 */
export default{
    showHead:({commit})=>{
        commit("showHeader");
    },
    hideHead:({commit})=>{
        commit("hideHeader");
    },
    showLoading:({commit})=>{
        commit("showLoading");
    },
   hideLoading:({commit})=>{
        commit("hideLoading");
    }
}