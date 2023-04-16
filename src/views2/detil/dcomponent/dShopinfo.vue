<template>
  <div>
    <div class="logo">
<!--      <button @click="tclick">dianwo</button>-->
      <img :src="shopInfo.shopLogo" alt=""><span>{{shopInfo.name}}</span>
    </div>
    <div class="clearfix">
      <div class="cshow">
        <div class="csells"><div>{{shopInfo.cSells}}</div><div>总销量</div></div>
        <div class="cgoods"><div>{{shopInfo.cGoods}}</div><div>全部宝贝</div></div>
      </div>
      <table class="score">
        <tr v-for="(scoItem, scoIndex) in shopInfo.score" :key="scoIndex">
        <td >{{scoItem.name}}</td>
        <td >{{scoItem.score}}</td>
        <td v-if="scoItem.isBetter" class="hscore">高</td>
        <td v-else class="lowscore">低</td>
      </tr>
      </table>
    </div>
    <div class="hangshow">进店逛逛</div>
  </div>
</template>

<script>
export default {
  name: "dShopinfo",
  props:{
    shopInfo:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  // methods:{
  //   tclick(){
  //     console.log(this.shopInfo)
  //   }
  // }
}
</script>

<style scoped>
.logo{
  margin:10px 0;
}
.logo img{
  /*实现图片文字居中对齐*/
  vertical-align: middle;
  height: 50px;
  width: 50px;
}
.logo span{
display: inline-block;
  margin-left:10px;
}
.cshow{
  text-align: center;
  width: 50%;
  float:left;
}
.cshow>*{
  display:inline-block;
  width: 50%;
}
.score{
  width: 50%;
  float:right;
  border-left:  2px solid #DEDEDE;
}
.csells div:first-child{
  margin:10px 0;
}
.cgoods div:first-child{
  margin:10px 0;
}
.hangshow{
  margin: 10px 30%;
  text-align: center;
  padding: 5px 0;
  background-color: #E0E0E0;
  border-radius: 5px;
}
/*清除浮动*/
.clearfix:after,.clearfix:before{
  content: "";
  display: block;
  clear: both;
}
.lowscore{
  color:#ED5643;
}
.hscore{
  color:#76BF46;
}
</style>