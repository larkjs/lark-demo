var router = require('lark-router').Router();
var models = require('lark-mvc')
router.get('/', models.demo.pageServer.index);
module.exports = router;
