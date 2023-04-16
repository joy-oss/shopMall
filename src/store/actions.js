export default{
    dealWithPro(context,payload){
        return new Promise((resolve,reject)=>{
            let oldproduct=null
            //检查商品是否存在（操纵已有数据）
            //使用for in遍历出来的为key值，获取值使用for（let k in obj）{console.log(obj[k])}
            //使用for of可以直接获取元素
            for(let i of context.state.productList){
                if(payload.id===i.id){
                    oldproduct=i
                }
            }
            //如果存在count+1
            if(oldproduct){
                context.commit("addCounter",oldproduct)
                resolve('当前商品数量+1')
            }else{
                //如果商品不存在记录商品个数并添加新商品
                context.commit("addProduct",payload)
                resolve('添加了新的商品')
            }
        })

    }
}