var Router = require('lark/node_modules/lark-router/node_modules/koa-router');

module.exports = function(router){
    var demo = function* (next){
        //this.body = '111' + this.pageServices.demo.render() 
        this.body = ' demo index'
        //this.body = "demo<br><a href='/demo/list/123'>list123</a><br><a href='/demo/article/123'>article123</a>"
        yield next;
    }

    router.get('/', demo);

    ///////////////////////

    var comp_router = new Router();
        comp_router.get('/test', demo);

    this.use(comp_router.routes());

    ///////////////////////

    return router;
};
