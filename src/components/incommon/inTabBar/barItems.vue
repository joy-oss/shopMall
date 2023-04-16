<template>
<div id="barItems" @click="itemClick">
<div v-if="isActive" ><slot name="item-icon-active"></slot></div>
<div v-else><slot name="item-icon"></slot></div>
<!--<div :class="{active:isActive}"><slot name="item-text"></slot></div>-->
<div :class="{active:isActive}"> <slot name="item-text"></slot></div>
</div>
</template>

<script>
export default {
  name: "barItems",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#D81E06'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
    methods: {
      itemClick() {
        //通过父组件传递path路径然后赋值给router实现页面切换
        this.$router.replace(this.path)
      }
    }
}
</script>

<style scoped>
#barItems img{
  height: 30px;
  width: 30px;
  /*图片居住显示*/
  vertical-align: middle;
  padding-left:5px;
}
.active{
  color:#D81E06;
}
</style>
