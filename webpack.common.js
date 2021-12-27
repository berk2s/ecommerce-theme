const path = require("path");

module.exports = {
    entry: {
        main: "./js/index.js",
    },
    output: {
        assetModuleFilename: "images/[hash][ext][query]",
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
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource",
                
            },
        ],
    },
};
