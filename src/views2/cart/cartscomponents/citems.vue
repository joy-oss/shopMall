<template>
<div class="cgood">
  <div class="cimg">
    <img v-if="ishow" src="~assets/img/cartbutton/abutton.png" alt="" @click="cbuttonClick">
    <img v-else src="~assets/img/cartbutton/nbutton.png" alt="" @click="cbuttonClick">
    <img :src="cgood.image" alt=""></div>
  <div class="cdetil">
    <div>{{cgood.title}}</div>
    <div>{{cgood.desc}}</div>
    <div><span class="cprice">{{'￥'+cgood.price}}</span><span class="ccount">{{'x'+cgood.ccount}}</span></div>
  </div>
  {{cgood.checked}}
</div>
</template>

<script>

import {EventBus} from "@/main";

export default {
  name: "citems",
  data(){
    return{
      ishow:false
    }
  },
  props:{
    cgood:{
      type:Object
    }
  },
  mounted(){
    EventBus.$on('allselect',(allshow)=>{
      this.ishow=false
      this.ishow=allshow
      this.cgood.checked=!this.cgood.checked
    })
  },
  methods:{
    cbuttonClick(){
      this.ishow=!this.ishow
      this.cgood.checked=!this.cgood.checked
    }
  },

}
</script>

<style scoped>
.cgood:after,.cgood:before{
  content: "";
  display:block;
  clear:both;
}
.cgood{
  position: relative;
  padding-top:10px;
  border:1px #E5E5E5 solid;
}
.cimg{
float:left;
width: 30%;
}

.cimg img:first-child{
  height: 30px;
  width: 30px;
}
.cimg img:last-child{
  height: 120px;
  width: 60px;
  vertical-align: middle;
  border-radius: 5px;
}
.cdetil{
  width: 70%;
  float:right;
}

.cdetil div:not(:last-child){
  white-space: nowrap;
  overflow:hidden;
  text-overflow: ellipsis;
  margin-bottom: 35px;
}
.cdetil div:last-child{
  position: relative;
}
div .cprice{
  color:#FF5201;
}
.ccount{
  position: absolute;
  right:10px;
  bottom:0;
}
</style>