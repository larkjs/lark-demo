/**
 * App routes
 */
module.exports = function(router){
    router.get('/', function*(next){
        this.body = 'hello index'
        yield next
    });
    return router
}
