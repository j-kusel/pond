const express = require('express');
const config = require('./config');
const path = require('path');

module.exports = function(env) {
    const app = express();
    app.use('/dist', express.static('./dist'));


    app.get('/', (req, res) => {
        res.sendFile(path.resolve(`./src/templates/${env}.html`));
    });

    return app;
}
