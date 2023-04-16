<template>
<div class="ccenter">
  <citems v-for="cgoods in $store.state.productList" :cgood="cgoods"></citems>
</div>
</template>

<script>
import citems from "./citems"
export default {
  name: "cartsItem",
  components:{
    citems
  },
}
</script>

<style scoped>

</style>