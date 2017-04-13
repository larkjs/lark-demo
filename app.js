/**
 * Example of using Lark constructing a web app
 **/
'use strict';

const Lark = require('lark');

const app = new Lark();

app.config.use('configs');
app.config.set('server/port', 8888);

app.on('error', (error, ctx) => ctx.logger.error(error.stack) && ctx.logger.log(error.stack));

module.exports = app.start()
    .then(({ port, server }) => {
        app.logger.notice(`SERVER[${process.pid}] listening on ${port} ...`);
        return { port, server };
    })
    .catch(e => app.logger.error(e.stack) && app.logger.log(e.stack));

// console.log(JSON.stringify(app.config.config, null, 4));
