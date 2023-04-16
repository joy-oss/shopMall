const webpack=require('webpack')
module.exports = {
    transpileDependencies: true,
    configureWebpack:{
        resolve:{
            alias:{
                'assets':'@/assets',
                'views2':'@/views2'
            },
        },
}
}
