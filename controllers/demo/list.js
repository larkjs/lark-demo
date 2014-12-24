module.exports = function(router){
    router.get('/list/:id', function*(next){
        this.body = this.pageService.list.body
        yield next;
    });
    return router
};
