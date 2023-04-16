<template>
<div id="Control">
  <div class="Control-item" v-for="(item,index) in controlItems"
         :class="{active:index===currentIndex}" @click="controClick(index)">
    <span>{{item}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: "goodsControl",
  data(){
   return{
  currentIndex:''
}
  },
  props:{
   controlItems:{
     type:Array,
     default(){
       return[]
     }
   }

  },
  methods:{
    controClick(index){
      this.currentIndex=index
      //监听内部点击事件
      this.$emit('cClick',index)
    }
  }

}
</script>

<style scoped>
#Control{
  padding-top:15px;
  display:flex;
  height: 50px;
  text-align: center;
  box-sizing: border-box;
  font-size: 20px;
}
.Control-item{
  flex:1;
}
.Control-item span{
  padding-bottom: 5px;
}
.active{
color:#FFB6C1;
}
/*用动态的class关联了他的子元素属性*/
.active span{
  border-bottom:#FFB6C1 solid 3px;
}
</style>