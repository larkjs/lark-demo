module.exports = function(router){
    router.get('/:id', function *(next){
        this.body = this.pageServices.demo.renderArticle(this.params.id)
        yield next;
    });
    return router
};
