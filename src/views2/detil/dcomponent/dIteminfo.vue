<template>
  <div v-if="Object.keys(itemInfo).length!=0" class="dItems">
    <p class="title">{{itemInfo.title}}</p>
    <div class="price">
      <span>{{itemInfo.price}}</span>
      <span >{{itemInfo.oldPrice}}</span>
      <span v-show="itemInfo.discount">{{itemInfo.discount}}</span>
    </div>
    <ul class="columns">
      <li v-for="(coItem,coIndex) in itemInfo.columns" :key="coIndex">{{coItem}}</li>
      </ul>
    <ul class="services">
      <li v-for="(serItem,serIndex) in itemInfo.services" :key="serIndex">
        <img  v-if="serItem.icon" :src="serItem.icon" alt="">
        <img class="noselect" v-else src="../../../assets/img/detil/dhead/noselect.png" alt="">
        <span>{{serItem.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "dIteminfo",
  props:{
    itemInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
li{
  list-style: none;
}
.dItems{
  color:#393939;
}
p{
  font-size:20px;
  margin:10px 0;
}
.price span:first-child{
  color:#E36C7C;
  font-size:22px;
  margin-right:5px;
}
.price span:nth-child(2){
  color:#A9A9A9;
  text-decoration: line-through;
  margin-right:5px;
}
.price span:last-child{
  font-size:16px;
  height: 20px;
  width: 18px;
  border-radius: 5px;
  color:#ffffff;
  background-color: #E36C7C;
  padding:2px;
}
.columns{
  display:flex;
  text-align: center;
  box-shadow: 0px 2px 5px #DEDEDE;
}

.columns li{
  flex:1;
  color:#A9A9A9;
  margin:15px 0px;
}

.services{
  width: 100%;
  display:table;
  padding:20px 0;
  box-shadow: 0px 2px 5px #DEDEDE;;
}
/*选取所有子代*/
.services >*{
  display: table-cell;
  text-align: center;
  font-size:14px;
}
.services img{
  height: 20px;
  width: 20px;
}
</style>