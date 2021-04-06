const path = require('path');
const fs = require('fs');
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
                filename: filename + '.html'
            })
        )
    };
});

module.exports = {
    entry:  "./src/index.js",
    plugins: [
        ...templates
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
            }
        ]
    },
};