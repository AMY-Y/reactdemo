/* module.exports = function override(config, env) {
    // do stuff with the webpack config...
    return config;
  }; */
// const { override, fixBabelImports } = require('customize-cra');
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
      fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      }),
      addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#d85f87' },
      }),
    );
