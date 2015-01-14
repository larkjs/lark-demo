module.exports = function(router){
    router.get('/', function *(next){
        this.body = 'leak' + this.pageServices.leak.leak() 
        yield next;
    });
    return router;
};
