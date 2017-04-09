var webpack = require("webpack");

const config = {
    entry: "./main.ts",
    output: {
        path: __dirname,
        filename: "./bundle.js"
    },
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        }]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
}

module.exports = config;