<template>
  <div class="home">
  <nav-bar>
    <div slot="nav-c">
      购物街
    </div>
  </nav-bar>
<in-scroll :probe-type="3" :pull-up-load="true" class="content" ref="inscroll"  @scrollP="listenPosition" @pullUp="loadData">
  <swiper/>
  <recommend-view :recommends="recommends"></recommend-view>
  <feature-view/>
  <goods-control class="controlFix" :controlItems="controls" @cClick="doControl"></goods-control>
  <goods-list :gdsList="getCurrenType"> </goods-list>
</in-scroll>
   <go-top class="gt" @click.native="gtClick" v-show="ishow"> </go-top>
  </div>
</template>

<script>
import featureView from "@/views2/home/homeItem/FeatureView";
import recommendView from './homeItem/recommendView'
import goodsList from "@/components/context/goodsItem/goodsList";
import goodsControl from "@/components/context/goodsControl/goodsControl";
import navBar from '@/components/incommon/inNavBar/navBar'
import swiper from "@/components/incommon/swiper/swiper";
import inScroll from "@/components/incommon/scroll/inscroll";
// import goTop from "@/components/incommon/goTop/goTop";
import {gotopMixinItem,refreshMixinItem} from "@/components/mixinItems/MixinsItem";
import {debounce} from "@/components/utils/debounce";
import {getHomeMessage,getControlMessage} from "@/onetwork/ihome";
import {EventBus} from "@/main";
export default {
  name: "home",
  data(){
    return{
      // banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'sell':{page:0,list:[]},
        'new':{page:0,list:[]}
      },
      controls:['流行','新款','精选'],
      currenType:'pop',
      // ishow:false,
      saveY:0,
      // EventLister:null
    }
  },
  mixins:[gotopMixinItem,refreshMixinItem],
  created(){
    this.getHomeMessage()
    this.getControlMessage('pop')
    this.getControlMessage('sell')
    this.getControlMessage('new')
  },
// mounted(){
//     this.EventLister=()=> debounce(this.$refs.inscroll.scroll.refresh(),50)
//    //监听图片的加载状态并刷新页面保存状态
//   EventBus.$on('listener',this.EventLister)
//    },

  methods:{
    // 获取请求中的商品信息
    getHomeMessage(){
    getHomeMessage().then(res=>{
      // this.banners=res.data.banner.list
      this.recommends=res.data.list
      // console.log(this.recommends);
    })
  },
    //处理商品展示相关信息
    getControlMessage(type){
      //请求时传参
      let page=this.goods[type].page+1
      getControlMessage(type,page).then(res=>
          //增加dom里的信息
      {
        console.log(res)
        this.goods[type].list.push(...res.data.list)
        // console.log(this.goods[type].list);
        this.goods[type].page+=1
        // console.log(this.goods[type].page)
      })
      },
    //监听分类里的点击事件
    doControl(index){
      // console.log(index);
      switch(index){
        case 0:
          this.currenType='pop'
              break
        case 1:
          this.currenType='new'
              break
        case 2:
          this.currenType='sell'
      }
    },
    listenPosition(position){
      // console.log(position)
      this.ishow=-position.y>1000
    },
    // gtClick(){
    //   this.$refs.inscroll.gTop(0,0)
    //   // console.log('hello')
    // },
    //上拉加载更多数据
    loadData(){
      this.getControlMessage(this.currenType)
      //默认只加载一次，结束上拉加载之后继续下一次加载
      this.$refs.inscroll.finishUp()
    }
    },
  computed:{
    getCurrenType(){
      return this.goods[this.currenType].list
    }
  },
  destroyed(){

  },
  //结合keep-alive
  activated(){
   //  this.EventLister=()=> debounce(this.$refs.inscroll.scroll.refresh(),50)
   // //监听首页图片的加载状态并刷新页面保存状态
     EventBus.$on('listener',this.imgListen)
    this.$refs.inscroll.gTop(0,this.saveY,2000)
  },
  deactivated() {
    // 离开页面保存当前scroll，并删除图片加载监听事件
   this.saveY=this.$refs.inscroll.scroll.y
    EventBus.$off('listener',this.imgListen)
  },
  components:{
    navBar,
    swiper,
    recommendView,
    featureView,
    goodsControl,
    goodsList,
    inScroll,
    // goTop
  }
}
</script>

<style scoped>
/*.controlFix{*/
/*  position:sticky;*/
/*  top:44px;*/
/*}*/
.home{
  height:100vh;
}
.content{
  height:calc(100%);
  overflow: hidden;
}
</style>
