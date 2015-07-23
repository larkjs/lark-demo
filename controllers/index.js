/**
 * App routes
 */
module.exports = function(router){
    router.get('/', function*(next){
        this.body = 'hello index'
        yield next
    }).get('/:bar*', function * testp1(next){
        this.body = this.params.bar
        yield next
    });
    return router
}
