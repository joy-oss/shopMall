<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "inScroll",
  data(){
    return {
      scroll:null
    }
  },
  props:{
    probeType:{
     type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
      mouseWheel: true,
    })
    this.scroll.on('scroll', position => {
      this.$emit('scrollP', position)
    })
    // 必须添加参数否则会出现未定义报错
    this.scroll.scrollTo(0, 0),
        this.scroll.on('pullingUp', () => {
          this.$emit('pullUp')
        }),
        this.scroll.finishPullUp(),
        this.scroll.refresh()
  },
  methods:{
      gTop(x, y, time =1000)
      {
        //确定scroll已经创建再调用方法
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finishUp()
      {
        this.scroll.finishPullUp()
      },
    }
  }
</script>

<style scoped>

</style>