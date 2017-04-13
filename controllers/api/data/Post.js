'use strict';

const Lark    = require('lark');

class PostDataController extends Lark.Controller {

    async main(ctx) {
        ctx.body = {
            data: 'OK',
        };
    }

}

module.exports = PostDataController;
