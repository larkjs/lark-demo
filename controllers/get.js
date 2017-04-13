'use strict';

const Lark = require('lark');

class MainController extends Lark.Controller {

    async main(ctx) {
        ctx.body = 'Welcome to the default page';
    }

}

module.exports = MainController;
