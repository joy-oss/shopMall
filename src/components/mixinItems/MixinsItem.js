import goTop from "@/components/incommon/goTop/goTop";
import {debounce} from "@/components/utils/debounce";
export const gotopMixinItem={
    // 混合组件，数据，方法
    components:{
        goTop
    },
    data(){
        return{
            ishow:false
        }
    },
    methods:{
        gtClick(){
            this.$refs.inscroll.gTop(0,0)
        }
    }
}
export const refreshMixinItem={
    data(){
        return{
            imgListen:null
        }
    },
    activated(){
        this.imgListen=()=>debounce(this.$refs.inscroll.scroll.refresh(),50)
    }
}