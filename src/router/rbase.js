import vue from 'vue'
import vueRouter from 'vue-router'
import Home from '../views2/home/home'
import Profile from '../views2/profile/profile'
import Cart from '../views2/cart/cart'
import Category from '../views2/category/category'
import Detil from '../views2/detil/detil'
vue.use(vueRouter)
export default new vueRouter({
    routes:[{
        path:'',
        component:Home
    },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/profile',
            component:Profile
        },
        {
            path:'/cart',
            component:Cart
        },
        {
            path:'/category',
            component:Category
        },
        {
            //定义详情页传递的参数id
            path:'/detil/:id',
            component:Detil
        }]

})