<template>
  <div class="dhome">
<nav-bar>
  <div  class='dhimg' slot="nav-l"><img src="~assets/img/detil/dhead/lefticon.png" alt="" @click="dgoback"></div>
  <div class='dhead' slot="nav-c"><span v-for="(dHitem,index) in detilHead"
                                        :class="{active:currentIndex===index}"
                                        @click="ditemClick(index)">{{dHitem}}</span></div>
</nav-bar>
<inscroll class="content" :probe-type="3" ref="inscroll" @scrollP="posListen" >
  <detil-swiper :topImages="dTopImages"></detil-swiper>
    <div class="concenter">
    <d-iteminfo :itemInfo="dIteminfo"/>
    <d-shopinfo :shopInfo="dShopinfo"/>
    <d-images :info="dInfo"/>
    <d-params ref="dparmpos" :param="dParam"/>
    <d-rate ref="dratepos"  :rate="dRate"/>
    <goods-list  ref='drecopos' :gdsList="dRecom"/>
    </div>
</inscroll>
<go-top @click.native="gtClick"></go-top>
<!--    监听自定义事件-->
<dmin-tabbar class="tab" @addCartClick="doAddCart"></dmin-tabbar>
  </div>
</template>

<script>
import {Ditems, getDetail} from "@/onetwork/ihome";
// import goTop from "@/components/incommon/goTop/goTop";
import {gotopMixinItem,refreshMixinItem} from "@/components/mixinItems/MixinsItem";
import inscroll from "@/components/incommon/scroll/inscroll";
import navBar from "@/components/incommon/inNavBar/navBar";
import tabBar from "@/components/incommon/inTabBar/tabBar";
import barItems from "@/components/incommon/inTabBar/barItems";
import {getHomeMessage} from "@/onetwork/ihome";
import goodsList from "@/components/context/goodsItem/goodsList";
import dminTabbar from "@/views2/detil/dcomponent/dminTabbar";
import detilSwiper from "@/views2/detil/dcomponent/detilSwiper";
import dIteminfo from "./dcomponent/dIteminfo"
import dShopinfo from "./dcomponent/dShopinfo"
import dImages from "./dcomponent/dImages"
import dParams from "./dcomponent/dParams"
import dRate from "./dcomponent/drate";
import {EventBus} from "@/main";



export default {
  name: "detil",
  data(){
    return{
      id:null,
      detilHead:["商品","参数","评论","推荐"],
      currentIndex:0,
      resInfo:{},
      dSwiper:{},
      dIteminfo:{},
      dShopinfo:{},
      dInfo:{},
      dParam:{},
      dRate:{},
      dRecom:[],
      dTopImages:[],
      // imgListen:null,
      // titleConPos:[0,500,1000,1500],
      titleConPos:[],
      titleConPosFun:null,
    }
  },
  mixins:[gotopMixinItem,refreshMixinItem],
  components:{
    navBar,
    // goTop,
    inscroll,
    tabBar,
    barItems,
    goodsList,
    dminTabbar,
    detilSwiper,
    dIteminfo,
    dShopinfo,
    dImages,
    dParams,
    dRate,
  },

  methods:{
    //设置标题点击到对应内容
    ditemClick(index){
    this.currentIndex = index
          // console.log(index)
    this.$refs.inscroll.gTop(0,-this.titleConPos[index])
    },
    //返回首页
    dgoback(){
      this.$router.go(-1)
   },
    // gtClick(){
    //   this.$refs.inscroll.gTop(0,0)
    // },
    posListen(position){
      //设置内容和标题对应
    for(let i=0;i<this.titleConPos.length;i++){
          if(this.currentIndex!==i && -position.y>=this.titleConPos[i] && -position.y<this.titleConPos[i+1]){
           this.currentIndex = i
          //   console.log("yp：" +position.y);
          //   console.log("cindex:"+this.currentIndex);
          //   console.log("tp:"+this.titleConPos[i]);
        }
      }

 },
    doAddCart(){
      const product={}
      product.title=this.dIteminfo.title;
      product.image=this.dTopImages[0];
      product.price=this.dIteminfo.nowlowprice;
      product.desc=this.dIteminfo.desc;
      product.id=this.id
      this.$store.dispatch('dealWithPro',product).then(res=>{
        console.log(res)
      })
    },
  },
  //每次请求重新获取数据
  activated() {
    //每次进入页面自动刷新
    this.$refs.inscroll.scroll.refresh()
    //若多个页面同时使用相同位置的代码则可以使用mixin属性对公共函数进行提取
    // this.imgListen=()=>debounce(this.$refs.inscroll.scroll.refresh(),10)
    //监听滚动图片的加载刷新防止卡顿
    EventBus.$on('dimglisten',this.imgListen)
    //实现点击对应图片展示对应详情页面
    this.id=this.$route.params.id
    getDetail(this.id).then(res=>{
      const data=res.result;
      // console.log(data);
      this.dTopImages=data.itemInfo.topImages;
      this.dShopinfo=data.shopInfo;
      this.dInfo=data.detailInfo;
      this.dParam=data.itemParams;
      this.dRate=data.rate;
      this.dIteminfo=new Ditems(data.itemInfo,data.columns,data.shopInfo.services)

      //详情页点击信息
      getHomeMessage().then(res=>{
        this.dRecom=res.data.list
        //监听末尾推荐图片的加载，使得获取的各元素偏移量尽量准确
        EventBus.$on("listener", this.imgListen)
        //获取标题对应内容位置，由于recomimg是最后加载进来的所有监听要以他为参照
        this.titleConPos=[]
        this.titleConPos.push(0)
        this.titleConPos.push(this.$refs.dparmpos.$el.offsetTop)
        this.titleConPos.push(this.$refs.dratepos.$el.offsetTop)
        this.titleConPos.push(this.$refs.drecopos.$el.offsetTop)
        this.titleConPos.push(Number.MAX_VALUE)
  })
    })
  },
  deactivated() {
    EventBus.$off('listener',this.imgListen)
    EventBus.$off('dimglisten',this.imgListen)
  }
}
</script>

<style scoped>
.dhome{
  height: 100vh;
}
.content{
  height: calc(100% - 90px);
}
.concenter{
  margin:auto;
  width: 90%;
}
.dhimg{
  padding-top:10px;
}
img{
  height: 30px;
  width: 30px;
}
.dhead{
  color:#666666;
  display:flex;
}
.dhead span{
  flex:1
}
.active{
  color:#FFFFFF;
}
</style>