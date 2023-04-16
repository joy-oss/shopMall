export default{
    addCounter(state,payload){
        payload.ccount+=1
    },
    addProduct(state,payload){
        payload.ccount=1
        payload.checked=false
        state.productList.push(payload)
    }
}