import axios from 'axios'
export function request(homeUrl){
    const instance=axios.create({
        baseURL:"http://152.136.185.210:7878/api/hy66",
    })
    instance.interceptors.request.use(
        homeUrl=>{return homeUrl},
        err=>{console.log(err)}
    )
    instance.interceptors.response.use(
        res=>{return res.data},
        err=> {console.log(err)}
)
    return instance(homeUrl)
}