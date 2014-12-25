module.exports = function(router){
    router.get('/:id', function*(next){
        this.body = this.pageServices.list.body
        yield next;
    });
    return router
};
