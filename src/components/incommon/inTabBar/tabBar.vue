<template>
  <div id="tabBar">
  <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabBar",
}
</script>

<style scoped>
#tabBar{
  height:46px;
  position:fixed;
  bottom:0;
  right:0;
  left:0;
  background-color: #76C5EF;
  display:flex;
  flex-flow:row wrap;
  align-items: center;
  justify-content: space-around;
}
</style>
