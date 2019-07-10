import Mock from 'mockjs';
let data=Mock.mock('/','get',{
    'list':[
        {
            'id|+1':1,
            'title':'mock',
            'message':'安装使用mock'
        }
    ]
})
export default data;