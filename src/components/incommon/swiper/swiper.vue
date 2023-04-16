<template>
  <div class="block">
    <el-carousel height="250px" trigger="click" >
      <el-carousel-item v-for="item in  swipersimg" :key="item">
        <img class="simgs" :src="item"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "swiper",
  data(){
      return {
        swipersimg:[
          'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2023/02/21/160/ias_2b01f281d0c7165cb4ff03283b83f19e_1135x545_85.jpg',
          'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2023/01/13/159/ias_4f5efcf5fca944b2aa5a297b5c596d97_1135x545_85.jpg',
          'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2022/12/02/90/ias_3e51f4769fd4807896ed657355cac81c_1135x545_85.jpg',
          'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2023/02/02/175/ias_01fb0a5d4a8cc722711e3de527a24db4_1135x545_85.jpg'
        ]
      }
  }
}
</script>

<style scoped>
.block{
  padding-top: 44px;
  box-sizing: border-box;
}
.swiper{
  padding-top:44px;
  height: 250px;
  margin:auto;
  box-sizing: content-box;
  overflow: hidden;
}
 .simgs{
  height:250px;
  width: 100%;
}
</style>