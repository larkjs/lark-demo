module.exports = function(router){
    router.get('/', function *(next){
        this.body = this.pageServices.demo.render
        yield next;
    });
    return router;
};
