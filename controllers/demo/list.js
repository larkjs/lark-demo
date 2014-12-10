var router = require('lark-router').Router();
var models = require('lark-mvc')
router.get('/list/:id', models.demo.pageServer.list);
module.exports = router;
