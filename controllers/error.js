'use strict';

const Lark = require('lark');

class CrashAction extends Lark.Controller {

    async main() {
        throw new Error('Faked Error');
    }

}

exports.get = CrashAction;
