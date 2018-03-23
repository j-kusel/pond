const path = require('path');

module.exports = [
    {
        test: /\.scss$/,
        include: path.resolve(__dirname, '../src/sass'),
        loaders: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
    }
];
