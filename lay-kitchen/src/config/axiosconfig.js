import qs from 'qs'
import axios from 'axios'
// import { reject } from 'q';

let http={
    post:'',
    get:''
}
// 封装axios
http.post=(api,data)=>{
    let params=qs.stringify(data)
    return new Promise((resolve,reject)=>{
        axios.post(api,params).then(res=>{
            resolve(res)

        })
    })
}
http.get=(api,data)=>{
    let params=qs.stringify(data) 
    return new Promise((resolve,reject)=>{
        axios.get(api,params).then(res=>{
            console.log(res)
            console.log(1)
        }).catch(err=>{
            console.log('err')
        })
    })
}
export default http