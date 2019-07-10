import * as T from './actionTypes'
// import axios from 'axios'
// export const InitAction=(data)=>({
//     type:T.CHANGE_VALUE,
//     data:data
// })
// export const addAr=()=>{
//     return (dispatch)=>{
//         axios.get('/').then((res)=>{
//             let data=res.data;
//             console.log(data);
//             dispatch(InitAction(data))
//         }).catch(()=>{
//             console.log('error')
//         })
//     }
// }
let nextid=0;
export const postAr=(titleValue,messageValue)=>{//提交文章

    return {
        type:T.POST_ARTICLE,
        id:nextid++,
        titleValue:titleValue,
        messageValue:messageValue
    }
}
// export const changeValur=()=>{
//     return {
//         type:T.CHANGE_VALUE,
//     }
// }
