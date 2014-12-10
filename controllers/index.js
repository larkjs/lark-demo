/**
 * App routes
 */

var router = require('lark-router')();
router.get('/', function(req, res){
    res.send('hello index')
});

module.exports = router;
