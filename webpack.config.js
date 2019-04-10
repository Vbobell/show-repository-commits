const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: './bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: __dirname + '/src/view/index.html'
        })
    ]
};