const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let templates = [];
let dir = 'pages';
let files = fs.readdirSync(dir);

files.forEach(file => {
    if (file.match(/\.pug$/)) {
        let filename = file.substring(0, file.length - 4);
        templates.push(
            new HtmlWebpackPlugin({
                template: dir + '/' + filename + '.pug',
                filename: filename + '.html',
                chunks: [filename]
            })
        )
    };
});

module.exports = {
    entry:  {
        'colors-type': './js/colors-type.js',
        'form-elements': './js/form-elements.js',
        'cards': './js/cards.js',
        'headers-footers': './js/headers-footers.js'
    },
    plugins: [
        ...templates,
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ["pug-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'imgs/[name][hash][ext]'
                  }
            },
            {
                test: /\.(svg|woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][hash][ext]'
                  }
            },
            {
                test: /\.css$/,
                use: ["style-loader",
                "css-loader"]
            }
        ]
    },
};