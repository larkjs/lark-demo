var logging = require('lark').logging
var mvc = require('lark').mvc

module.exports = function(router){
    router.get('/:id', function*(next){
        logging.info("I'm in list")
        this.body = mvc.pageServices.list.render()
        yield next;
    });
    return router
};
