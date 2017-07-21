/**
 * Created by Administrator on 2017/7/30.
 */
import Home from "./components/Home.vue"
import Column from "./components/Column.vue"
import Follow from "./components/Follow.vue"
import Info from "./components/UserInfo.vue"
import Detail from "./components/Article.vue"
import Login from "./components/UserLogin.vue"
import Reg from "./components/UserReg.vue"
export default[
    {
        path:"/home",
        component:Home
    },
    {
        path:"/column",
        component:Column
    },
    {
        path:"/follow",
        component:Follow
    },
    {
        path:"/user-info",
        component:Info
    },
    {
        path:"/login",
        component:Login
    },
    {
        path:"/reg",
        component:Reg
    },
    {
        path:"/article/:id",
        component:Detail
    },
    {
        path:"/",
        redirect:"/home",
    },
    {
        path:"*",
        redirect:"/home"
    }
]