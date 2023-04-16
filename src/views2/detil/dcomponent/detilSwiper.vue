<template>
<div class="dswiper">
  <img :src="topImages[0]" alt="">
</div>
</template>

<script>
export default {
  name: "detilSwiper",
  props:{
    topImages:{
      type:Array,
      default(){
        return[]
      }
    }
  },

}
</script>

<style scoped>
.dswiper{
  padding-top:44px;
  height: 300px;
  width: 100%;
}
.dswiper img{
  width: 100%;
  height: 250px;
}

</style>