import {request} from './inrequest'
export function getHomeMessage(){
    return request({url:"/recommend"})
}
export function getControlMessage(type,page){
    return request({url:"/home/data",
    params:{
        type,
        page
    }})
}
export function getDetail(iid){
    return request({url:'/detail',
        params:{
        iid
        }
        }

    )
}
//定义详情页获取数据的类
export class Ditems{
    constructor(itemInfo,columns,services) {
        this.title=itemInfo.title
        this.price=itemInfo.price;
        this.nowlowprice=itemInfo.lowNowPrice;
        this.oldPrice=itemInfo.oldPrice;
        this.discount=itemInfo.discountDesc;
        this.columns=columns;
        this.services=services;
        this.desc=itemInfo.desc;
    }
}