const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
    entry:'./src/index.js',
    output:
        {
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        },
    mode: 'development',
    resolve: 
        {
        extensions:['.js','.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname, 'src/containers'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@routes': path.resolve(__dirname, 'src/routes'),
            '@styles': path.resolve(__dirname, 'src/styles'),
        }
        },
    module:
        {
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:
                    {
                        loader:'babel-loader'
                    }
            },
            {
                test:/\.html$/,
                use:[{loader:'html-loader'}]
            },
            {
                test:/\.(css|scss)$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'./index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        port: 3000,
        historyApiFallback: true,
    }
}