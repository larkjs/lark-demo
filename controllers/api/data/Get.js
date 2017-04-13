'use strict';

const Lark    = require('lark');

class GetDataController extends Lark.Controller {

    async main(ctx) {
        const user = new this.model.data.User(ctx.query.name);
        const info = await user.getInfo(ctx);
        ctx.body = info;
    }

}

module.exports = GetDataController;
