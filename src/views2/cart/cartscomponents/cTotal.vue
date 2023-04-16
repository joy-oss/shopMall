<template>
  <div class="compute">
    <span>全选</span>
    <img  v-if="ishow" src="~assets/img/cartbutton/abutton.png" alt="" @click="allselect">
    <img v-else src="~assets/img/cartbutton/nbutton.png" alt="" @click="allselect">
    <span class="total">{{'合计:￥'+totalPrice}}</span>
    <span class="calculate">{{'去结算('+csum+')'}}</span>
  </div>
</template>

<script>
import {EventBus} from "@/main";

export default {
  name: "cTotal",
  data(){
    return{
       csum:0,
       psum:0,
       ishow:false
    }
  },
  computed:{
    //处理总计价格和结算个数
    totalPrice(){
      let total=[]
      let countoal=[]
      for(let item of this.$store.state.productList)
      {
        if(item.checked===true){
          total.push(item.price*item.ccount)
          countoal.push(item.ccount)
        }
      }
      //循环之外获取最终结果，处理数组内元素求和
      let sum=0
      let csum=0
      for(let i of total)
      {
        sum+=i
      }
      for(let i of countoal){
        csum+=i
      }
      this.csum=csum
      return sum
  }
},
  methods:{
    allselect(){
      this.ishow=!this.ishow
      EventBus.$emit("allselect",this.ishow)
    }

  }

}
</script>

<style scoped>
.compute{
  position:fixed;
  bottom:46px;
  width: 100%;
  height: 30px;
  background-color:#F0F0F0;
  font-size:14px;
}
.compute img{
  height: 30px;
  width: 30px;
  vertical-align: middle;
}
.total{
  margin-left:20px
}


.calculate{
  float:right;
  line-height:200% ;
  height: 100%;
  width: 30%;
  text-align: center;
  background-color:#FF5201 ;
  padding-right:10px;
}
</style>