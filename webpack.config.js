const path = require('path');
// const ZipPlugin = require('./plugins/zip-plugin');
// const StatsWebpackPlugin = require('./plugins/stats-webpack-plugin.js');
const ExportCompilerErrorPlugin = require('./plugins/export-compiler-error-plugin.js');//webpack4 之前的版本构建失败不不会抛出错误码 (error code)

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
    mode: 'production',
    plugins: [
        // new StatsWebpackPlugin()
        // new ZipPlugin({
        //     filename: 'offline'
        // })
        new ExportCompilerErrorPlugin()
    ]
}