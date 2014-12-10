var router = require('lark-router').Router();
var models = require('lark-mvc')
router.get('/article/:id', models.demo.pageServer.article);
module.exports = router;
