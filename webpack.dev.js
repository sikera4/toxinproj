const path = require('path');
const common = require("./webpack.common");
const {merge} = require("webpack-merge");


module.exports = merge(common, {
    mode: "development",
    devServer: {
        publicPath: "/",
        contentBase: "./public",
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", // js => DOM.style (injects styles into DOM)
                "css-loader", // css => js
                "sass-loader"] // scss => css
            }
        ]
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    }
});