const path = require('path')
require("babel-polyfill")
const rules = [
    {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: ['babel-loader','awesome-typescript-loader']
    },
    {
        test: /\.(png|gif|svg)$/,
        loader: ['file-loader', 'url-loader']
    },
    {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
    }
]

module.exports = {
    target: 'web',
    mode: 'development',
    entry: ['babel-polyfill', './src/index.tsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: { rules },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        contentBase: './public',
        port: 5000
    }
}