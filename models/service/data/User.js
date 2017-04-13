'use strict';

const Lark = require('lark');
const $    = global.$;

class User extends Lark.Model {

    constructor(name) {
        super();
        this.name = name || 'Anonymous';
    }

    async getInfo() {
        const info = await $.dao.user.getInfoByName(this.name);
        info.age = $.lib.mosaic(info.age);
        return info;
    }

}

module.exports = User;
