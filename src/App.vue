<template>
  <div id="app">
<!--    <keep-alive exclude="detil">-->
<keep-alive>
  <router-view></router-view>
</keep-alive>
<min-tabbar/>
  </div>
</template>

<script>
import minTabbar from "@/components/context/mintabbar/minTabbar";
export default {
  name: 'App',
  components: {
     minTabbar
  }
}
</script>

<style>
@import '@/assets/css/cbase.css';
</style>
