<template>
  <div >
    <div class="rHead clearfix"><span>用户评价</span><span href="#" >更多</span></div>
      <ul class="rBody" v-for="ritem in rlist">
       <li class="uinfo"><img :src="ritem.user.avatar" alt=""><span>{{ritem.user.uname}}</span></li>
        <li>{{ritem.content}}</li>
<!--        使用filters处理date数据-->
        <li>{{ ritem.created | showDate}}</li>
<!--        使用计算属性处理date-->
<!--       <li>{{ rdate(ritem.created)}}</li>-->
        <li>{{ritem.style}}</li>
        <li v-for="rinfo in ritem.extraInfo">{{rinfo}}</li>
        <li class="upic"><img v-for="rimg in  ritem.images" :src="rimg" alt=""></li>
      </ul>
  </div>
</template>

<script>
import {formateDate} from '@/components/utils/Dateformate'
export default {
  name: "dRate",
  props: {
    rate: {
      type: Object,
      default() {
        return {}
      }
    }
    },
    filters:{
      showDate(value){
        const date=new Date(value*1000)
        return formateDate(date,'yyyy/MM/dd hh:mm:ss')
      }
  },
  computed:{
    rlist(){
       return this.rate.list
    },
    // rdate(value){
    //  return function showDate(value){
    //       const date=new Date(value*1000)
    //       return formateDate(date,'yyyy/MM/dd hh:mm:ss')}
    // }
  },
}
</script>

<style scoped>
li{
  list-style: none;
}
.rHead{
  height: 30%;
  padding:10px 0;
  box-shadow:0 -2px 5px #A9A9A9;
}
.clearfix:after, .clearfix:before{
  content:"";
  display:block;
  clear:both;
}
.rHead span:first-child{
  float:left
}
.rHead span:last-child{
  float:right
}
.rBody{
  height: 70%;
}
.rBody li{
  margin: 10px 0;
}
.uinfo img{
  vertical-align: middle;
  height: 50px;
  width: 50px;
}
.uinfo span{
  margin-left:10px;
}
.upic img{
  display:inline-block;
  margin:0 5px;
  width: 30%;
}
</style>