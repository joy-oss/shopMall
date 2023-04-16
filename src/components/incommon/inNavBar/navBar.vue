<template>
<div class="nav-bar">
  <div class="nav-l"><slot name="nav-l"></slot></div>
  <div class="nav-c"><slot name="nav-c"></slot></div>
  <div class="nav-r"><slot name="nav-r"></slot></div>
</div>
</template>

<script>
export default {
  name: "navBar"
}
</script>

<style scoped>
.nav-bar {
  color:#F6F6F6;
  text-align: center;
  line-height: 44px;
  position:fixed;
  top:0;
  display:flex;
  height: 44px;
  width: 100%;
  flex-flow: row nowrap;
  align-items:flex-start;
  justify-content: space-around;
  background-color: lightpink;
  z-index:9;
}
.nav-bar::after{
  clear:both;
  content:'';
  display:block;
  width: 0;
  height:0;
  visibility: hidden;
}
.nav-l{
  height: 100%;
  width: 20%;
}
.nav-c{
  height: 100%;
  width: 60%;
}
.nav-r{
  height: 100%;
  width: 20%;
}
</style>