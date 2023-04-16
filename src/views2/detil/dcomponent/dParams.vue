<template>
<div>
<!--<button @click="test">dianwo</button>-->
  <p>{{rule.key}}</p>
  <table v-for="sizep in rule.tables" class="sizetb">
    <tr v-for="sitem in sizep">
     <td v-for="sitemp in sitem">{{sitemp}}</td>
    </tr>
  </table>
  <p>{{rule.disclaimer}}</p>
  <p>{{info.key}}</p>
  <table class="producttb">
    <tr v-for="productp in info.set">
      <td>{{productp.key}}</td>
      <td>{{productp.value}}</td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
  name: "dParams",
  props:{
    param:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    rule() {
      return this.param.rule
    },
    info() {
      return this.param.info
    }

  },
  // methods:{
  //   test(){
  //    console.log(typeof(this.info.set))
  //   }
  // }
}

</script>

<style scoped>
table{
  width: 100%;
}
table tr{
  display:block;
  margin:10px 0px;
  border-bottom: 2px solid #E0E0E0;
}
.sizetb td{
  width:10%;
}
.producttb td{
  display:inline-block;
  width: 50%;
}
.producttb td:last-child{
  color:#FF5778;
}
</style>