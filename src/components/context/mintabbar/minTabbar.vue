<template>
<tab-bar>
  <bar-items path="/home" activeColor="orange">
    <img slot="item-icon" src="~assets/img/tabar/nshouye.svg" alt="">
    <img slot="item-icon-active" src="~assets/img/tabar/ashouye.svg" alt="">
    <div slot="item-text">首页</div>
  </bar-items>
  <bar-items path="/category" activeColor="">
    <img  slot="item-icon" src="~assets/img/tabar/nfl.svg" alt="">
    <img  slot="item-icon-active" src="~assets/img/tabar/afl.svg" alt="">
    <div slot="item-text">分类</div>
  </bar-items>
  <bar-items path="/cart" activeColor="">
    <img slot="item-icon" src="~assets/img/tabar/ngwc.svg" alt="">
    <img slot="item-icon-active" src="~assets/img/tabar/agwc.svg" alt="">
    <div slot="item-text">购物车</div>
  </bar-items>
  <bar-items path="/profile" activeColor="">
    <img slot="item-icon" src="~assets/img/tabar/nwd.svg" alt="">
    <img  slot="item-icon-active" src="~assets/img/tabar/awd.svg" alt="">
    <div  slot="item-text">我的</div>
  </bar-items>
</tab-bar>
</template>

<script>

import tabBar from "@/components/incommon/inTabBar/tabBar";
import barItems from "@/components/incommon/inTabBar/barItems";
export default {
  name: 'minTabbar',
  components:{
    tabBar,
    barItems
  }
}
</script>

<style>

</style>
