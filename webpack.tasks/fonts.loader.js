const path = require('path');

module.exports = [
    {
        test: /\.otf$/,
        //include: path.resolve(__dirname, '../src/assets/fonts'),
        loader: 'file-loader'
    }
];
