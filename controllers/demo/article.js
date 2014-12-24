module.exports = function(router){
    router.get('/article/:id', function *(next){
        this.body = this.pageService.demo.render()
        yield next;
    });
    return router
};
