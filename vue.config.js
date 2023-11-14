const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/api': {
                target: 'https://uat.scholarshipsgateway.gov.sg',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/midware': {
                // target: 'http://192.168.122.19:8002',
                target: 'https://uat.scholarshipsgateway.gov.sg',
                changeOrigin: true,
                pathRewrite: {
                    '^/midware': ''
                }
            }
        }
    },
    lintOnSave: false, //关闭eslint检查
    // 生产环境需要启用
    // publicPath: '/midlogin'
});
