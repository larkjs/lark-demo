module.exports = function(router){
    router.get('/', function *(next){
        this.body = '111' + this.pageServices.demo.render() 
        //this.body = "demo<br><a href='/demo/list/123'>list123</a><br><a href='/demo/article/123'>article123</a>"
        yield next;
    });
    return router;
};
