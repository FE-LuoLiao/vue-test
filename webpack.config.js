var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: '#evel-source-map',
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        compress: true,
        port: 8080,
        hot: true
    },
    entry: {
        index: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // {
            //     test: /\.vue$/,
            //     loader: 'vue-loader'
            // }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}