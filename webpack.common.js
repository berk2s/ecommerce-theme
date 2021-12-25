const path = require("path");

module.exports = {
    entry: {
        main: "./js/index.js",
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "svg-url-loader"//,
                        // options: {
                        //     limit: 10000,
                        // },
                    },
                ],
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                include: path.resolve(
                    __dirname,
                    "./node_modules/bootstrap-icons/font/fonts"
                ),
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "webfonts",
                        publicPath: "../webfonts",
                    },
                },
            },
        ],
    },
};
