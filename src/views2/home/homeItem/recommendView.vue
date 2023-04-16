<template>
<div class="rcmdItems">
<!--  限定截取数据的长度-->
  <div v-for="(item,index) in recommends.slice(0,3)" class="rcmditem" >
    <a :href="item.item_url">
      <img :src="item.image" alt="">
      <div>{{rcmdtitle[index]}}</div>
    </a>
</div>
</div>
</template>

<script>
export default {
  name: "recommendView",
  props:{
   recommends:{
     type:Array,
     default(){
       return []
     }
   }
  },
  data(){
    return{
      rcmdtitle:['十点抢券','好物特卖','内购福利','初秋上新']
    }
  },
  methods:{

}}
</script>

<style scoped>
.rcmdItems{
  background-color: orange;
  padding: 10px 0;
  display:flex;
  flex-flow:row nowrap;
  justify-content: space-around;
  width: 100%;
  text-align: center;
}
.rcmditem{
  flex:1;

}
img{
  height: 120px;
  width: 120px;
  border-radius: 50%;
}
</style>