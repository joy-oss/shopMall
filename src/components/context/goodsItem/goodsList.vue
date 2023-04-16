<template>
  <div class="gdsList">
<!--    <button @click="showm">点我</button>-->
<!--    :gdsTtem="item"-->
<!--    <div v-for="(item,index) in gdsList">{{item}}</div>-->
<goodsItems  v-for="item in gdsList"  :gdsItems="item"></goodsItems>
  </div>
</template>

<script>
import goodsItems from "@/components/context/goodsItem/goodsItems";
export default {
  name: "goodsList",
  props:{
    gdsList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    goodsItems
  }
  // methods:{
  //  showm(){
  //    console.log(this.gdsList)
  //  }
  // }
}
</script>

<style scoped>
.gdsList{
  display:flex;
  width: 100%;
  height:auto;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 14px;
}
</style>