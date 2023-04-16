<template>
  <div class="dtabitems">
    <ul class="dtabul">
      <li>
        <img src="~assets/img/detil/dtab/nkefu.png" alt="">
        <p>客服</p>
      </li>
      <li>
        <img src="~assets/img/detil/dtab/ndpu.png" alt="">
        <p>店铺</p>
      </li>
      <li>
        <img v-if="ishow"  @click="selectClick" src="~assets/img/detil/dtab/nsc.png" alt="">
        <img v-else @click="selectClick"  src="~assets/img/detil/dtab/asc.png" alt="">
        <p>收藏</p></li>
      <li class=" buy addcart" @click="addCartClick"><p>加入购物车</p></li>
      <li class="buy dobuy"><p>购买</p></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'dminTabbar',
  data(){
    return{
      ishow:true
    }
  },
  methods:{

    selectClick(){
      this.ishow=!this.ishow
    },
    addCartClick(){
      this.$emit("addCartClick")
    }
  }
}
</script>

<style scoped>
.dtabitems{
  z-index: 100;
  height: 46px;
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #76C5EF;
}
.dtabul{
  display:flex;
  text-align: center;
 }
li{
  list-style:none;
  flex:1;
}
.buy{
  height: 46px;
  line-height: 46px;
}
.addcart{
  background-color: orange;
}
.dobuy{
  color:#F6F6F6;
  background-color:#FFB6C1;
}
.dtabitems img{
  height: 24px;
  width: 25px;
  vertical-align: middle;
}
</style>