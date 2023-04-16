<template>
  <div class="chome">
    <nav-bar>
      <div slot="nav-c">购物车</div>
    </nav-bar>
      <inscroll class="content" refs='inscroll'>
        <c-item-list></c-item-list>
      </inscroll>
    <c-total/>
  </div>
</template>

<script>
import cItemList from"./cartscomponents/cItemList"
import navBar from "@/components/incommon/inNavBar/navBar";
import inscroll from "@/components/incommon/scroll/inscroll"
import cTotal from './cartscomponents/cTotal'
export default {
  name: "cart",
  components:{
    navBar,
    inscroll,
    cItemList,
    cTotal
  },
  updated(){
    this.$refs.inscroll.scroll.refresh()
  },

}

</script>

<style scoped>
.chome{
  height: 100vh;
}
.content{
  margin-top:44px;
  height: calc(100% - 136px);
}

</style>
