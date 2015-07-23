var demoLayer = function(mvc){
    var demo = mvc.dataService.create('demo')   
    demo.getData = function(){
        var articles = {'title': 'demo'}
        /*
        co (function *(){
            var articles = yeild this.dao.get(this.request.id);
            if (articles){
                // print data
            }
        })
        */
        return articles
    }

    demo.getCategroy = function*(next){
        return this.dao.demo.get('getCategroy')
    }

    demo.getArticles = function*(next){
        return this.dao.demo.get('getArticles')
    }
}

module.exports = demoLayer
