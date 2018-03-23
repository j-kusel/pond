const path = require('path');

module.exports = [
    {
        test: /\.tpl\.html$/,
        include: path.resolve(__dirname, '../src/templates'),
        loader: 'html-loader'
    }
];

