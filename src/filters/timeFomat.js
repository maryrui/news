/**
 * Created by Administrator on 2017/8/14.
 */
export const normalTime=(time)=>{

    if(time){
        var odate=new Date();
        odate.setTime(time);
        var y=odate.getFullYear();
        var m=odate.getMonth()+1;
        var d=odate.getDate();
        var h=odate.getHours();
        var ms=odate.getMinutes();
        var mm=odate.getSeconds();
        return y+"-"+m+"-"+d+" "+h+":"+ms+":"+mm;
    }
}