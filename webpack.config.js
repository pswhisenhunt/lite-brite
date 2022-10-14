const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: "./main.tsx",
    devtool: "inline-source-map",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    devServer: {
        static: "./dist"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
                use: "ts-loader"
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader', 'postcss-loader']
            },
            { 
                test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/, 
                type: 'asset/resource',
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html"
        })
    ]
}