<template>
<div id="feature">
  <div class="fhead">本周上新</div>
  <ul class="fitem">
    <li><img src="~assets/img/fitemImg/1.png" alt="">
      <div>高级感职业套装</div>
    </li>
    <li><img src="~assets/img/fitemImg/2.png" alt="">
      <div>甜美可爱修身套装</div>
    </li>
    <li><img src="~assets/img/fitemImg/3.png" alt="">
      <div>抽绳设计泡泡袖</div>
    </li>
    <li><img src="~assets/img/fitemImg/4.png" alt="">
      <div>法式小众v领衬衫套装</div>
    </li>
    <li><img src="~assets/img/fitemImg/5.png" alt="">
      <div>小香风粉色俏皮套装</div>
    </li>
    <li><img src="~assets/img/fitemImg/6.png" alt="">
      <div>国风刺绣简约百搭套装</div>
    </li>
    <li><img src="~assets/img/fitemImg/7.png" alt="">
      <div>小个子工装薄款套装</div>
    </li>
    <li><img src="~assets/img/fitemImg/8.png" alt="">
      <div>温柔风灯笼泡泡袖套装</div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "FeatureView"
}
</script>

<style scoped>
#feature{
  height:300px;
  font-size:14px;
}
.fhead{
  height: 15%;
  padding-top:10px;
  box-sizing: border-box;
  text-align: center;
  font-size:15px;
}
.fitem{
  height: 85%;
  text-align: center;
}
ul{
  margin:0;
  padding:0;
}
li{
  display:inline-block;
  box-sizing: border-box;
  width: 25%;
  height: 50%;
}
img{
  border-radius: 50%;
  height:80px;
  width: 80px;
}
</style>