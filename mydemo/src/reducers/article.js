import {  POST_ARTICLE } from '../actions/actionTypes';

// const addArticle=(state={id:1,title:'lalala',message:'hahaha'},action)=>{
//     switch(action.type){
//         case ADD_ARTICLE:
//             return {...state,}
//         default:
//             return state
//     }
     
// }
const initState={
    postarti:[]
}
const postArticle=(state=initState,action)=>{//提交文章reducer
    console.log('L1')//调试
    console.log(action.titleValue!=='')//调试
    console.log(action.messageValue)//调试   
        console.log('list')//调试
        /* switch(action.type){
            case POST_ARTICLE:
                return {...state,postarti:[
                    ...state.postarti,
                    {
                        id:action.id,
                        titleValue:action.titleValue,
                        messageValue:action.messageValue
                    }
                ]}
            default:
                return state
        }    */
        // if(action.titleValue!==''||action.messageValue!==''){//会导致ArticleList的postarti未定义？？？但是会解决重复渲染问题
            if(action.type===POST_ARTICLE){
                return {...state,postarti:[
                    ...state.postarti,
                    {
                        id:action.id,
                        titleValue:action.titleValue,
                        messageValue:action.messageValue
                    }
                ]}
            }else{
                return state
            }
        // }      
}
export default postArticle
// const article=(state,action)=>{
//     switch(action.type){
//         default:
//             return{
//                 // addArticle:addArticle(state,action),
//                 postArticle:postArticle(state,action)
//             } 
//     }
// }
// export default article