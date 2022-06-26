/* craco.config.js */
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
                '@primary-color': 'pink', //全局主色
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};