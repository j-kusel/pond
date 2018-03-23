process.env.NODE_ENV = process.env.NODE_ENV || 'home';

const app = require('./config/express')(process.env.NODE_ENV);
const config = require('./config/config');

app.listen(config.port);
module.exports = app;

console.log(`Lab running at http://localhost:${config.port}/`);

