// module.exports=function override(config,env){

// }
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
       fixBabelImports('import', {//配置babel-plugin-import
         libraryName: 'antd',
         libraryDirectory: 'es',
         style: true,
       }),
       addLessLoader({
         javascriptEnabled: true,
         modifyVars: { '@primary-color': 'rgb(255, 0, 0)' },
        }),
        
);