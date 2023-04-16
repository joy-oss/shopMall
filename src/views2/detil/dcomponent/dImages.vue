<template>
  <div>
  <div id="i clearfix" v-if="Object.keys(info).length!==0">
    <div class="l leftLine"></div>
    <div class="desc">新款</div>
    <div class="l rightLine"></div>
  </div>
    <ul class="imgDetil">
      <li v-for="idetil in dImage">
        <p>{{idetil.key}}</p>
<!--        这里监听是为了dimage滑动时不卡顿-->
        <img v-for="iimg in idetil.list" :src="iimg" alt="" @load="dimglisten">
      </li>
    </ul>
  </div>
</template>

<script>
import {EventBus} from "@/main";

export default {
  name: "dImages",
  data(){
   return{
     dImage:[]
   }
  },
  props:{
    info:{
      type:Object,
      }
    },
  //由于父组件使用activated方法传递参数要对数据进行更新处理
updated(){
      this.dImage=this.info.detailImage
       // console.log(this.info.detailImage)
},
methods:{
  dimglisten(){
    EventBus.$emit("dimglisten")
  }
}
}

</script>

<style scoped>
li{
  list-style:none;
}
#clearfix{
  content: "";
  display: block;
  clear:both;
}
.l{
  width: 25%;
  height: 50px;
  /*设置伪类元素的位置*/
  position:relative;

}
.leftLine{
  float:left;
  border-top: solid #A9A9A9;
}
.desc{
  float:left;
  width: 50%;
  text-align: center;
  line-height: 50px;
}
.rightLine{
  float:right;
  border-bottom: solid #A9A9A9;
}
.leftLine::before,.rightLine::after{
  content: "";
  position: absolute;
  width: 5px;
  height:5px;
  background-color:#252525;
  border: 1px solid black;
}
.leftLine::before{
  left:0;
}
.rightLine::after{
  bottom:0;
  right:0;
}
.imgDetil img{
  width: 100%;
}
.imgDetil p{

}
</style>