'use strict';

const Lark = require('lark');

class Welcome extends Lark.Controller {

    async main(ctx) {
        const user = new this.model.data.User(ctx.query.name);
        const info = await user.getInfo(ctx);
        ctx.body = await this.view.render('welcome.tpl', info);
    }

}

exports.get = Welcome;
