var webpack = require('webpack');
var path = require('path');
var config = require('./config/config');
console.log(webpack);

module.exports = {
    context: __dirname + '/src',
    entry: {
        app: './app/app.js',
        vendor: ['angular', 'angular-resource']
    },
    output: {
        publicPath: `http://${config.hostname}:${config.port}`,
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            ...require('./webpack.tasks/templates.loader'),
            ...require('./webpack.tasks/sass.loader'),
            ...require('./webpack.tasks/fonts.loader')
        ]
    }/*,
    plugins: [
        new webpack.optimize.SplitChunksPlugin('vendor', 'vendor.bundle.js')
    ]*/
};

