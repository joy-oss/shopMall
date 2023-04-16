//防抖动处理,当频繁执行某个函数时调用
export function debounce(func,delay){
    let timer=null
    return function(...args){
        if(timer) clearTimeout(timer)
        timer=setTimeout(()=>{
            func.apply(this,args)
        },delay)
    }
}