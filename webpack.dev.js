/* eslint-disable */
const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./html/index.html",
        }),

        new HtmlWebpackPlugin({
            template: "./html/products.html",
            filename: "./products.html",
        }),

        new HtmlWebpackPlugin({
            template: "./html/login.html",
            filename: "./login.html",
        }),

        new MiniCssExtractPlugin({ filename: "[name].css" }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, // inject CSS to page
                    },
                    {
                        loader: "css-loader", // translates CSS into CommonJS modules
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: function () {
                                    return [require("autoprefixer")];
                                },
                            },
                        },
                    },
                    {
                        loader: "sass-loader", // compiles Sass to CSS
                    },
                ],
            },
        ],
    },
});
