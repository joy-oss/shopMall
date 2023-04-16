<template>
<div id="gdsItem">
<!--  <button @click="showmessage">dianwo</button>-->
<!--  <img :src="gdsItems.show.img" alt="" @load="listenLoad" @click="jumpDetil">-->
    <img :src="showImg" alt="" @load="listenLoad" @click="jumpDetil" class="gdsimg">
  <div class="gdsDetail">
    <div class="gdsTitle">{{gdsItems.title}}</div>
    <span class="price">{{gdsItems.price}}</span>
    <span class="collect">
      <img v-if='ishow' src="~assets/img/goodsitem/collecTicon/ncollect.png" @click="changeCollect" alt="">
      <img v-else src="~assets/img/goodsitem/collecTicon/acollect.png" alt="" @click="changeCollect" alt="">
      <span>{{cfav}}</span>
    </span>
  </div>

</div>
</template>

<script>
import {EventBus} from "@/main";
export default {
  name: "goodsItems",
  data(){
    return{
      ishow:true,
      cfav:this.gdsItems.cfav
    }

  },
  props:{
    gdsItems:{
      type:Object,
      default(){

      }
    }
  },
computed:{
    //设置对home和detil页面不同的图片展示
    showImg(){
      return this.gdsItems.image || this.gdsItems.show.img
      }
    },
  methods:{
   // showmessage(){
   //   console.log(this.gdsItems)
   // }
    //处理点击收藏的计算和图标显示
    changeCollect(){
      this.ishow=!this.ishow
      // console.log(this.ishow)
      if(!this.ishow){
        this.cfav=(parseFloat(this.gdsItems.cfav))+1
      }else{
        this.cfav=this.cfav-1
      }
      },

    //监听每一张图片的加载状态并将事件传出
    listenLoad(){
      // if(this.$route.path.indexOf("/home")){
      //   EventBus.$emit('homelistener')
      // }else EventBus.$emit('detilListener')
      EventBus.$emit('listener')
    },
    jumpDetil(){
      // 跳转详情页并传递id
       this.$router.push('/detil/'+this.gdsItems.iid)
      // console.log(this.gdsItems)
    }
  }
}
</script>

<style scoped>
#gdsItem{
  width: 30%;
  text-align: center;
}
.gdsTitle{
  /*设置单行显示隐藏*/
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.price{
color:#E36049;
}
.collect img{
  height: 20px;
  width: 20px;
}
.gdsimg{
  height:80%;
  width:80%;
}
</style>