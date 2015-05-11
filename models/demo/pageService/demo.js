var demoPage = function(mvc){
    var demo = mvc.pageService.create('demo')
    var co = require('co')
    demo.render = function(){
        // `this` is the layer proxy, which make the rule that only top layer
        // can request down layer between layers.
        // for example, in page layer, requesting this.pageServer.otherLayer
        // and this.dataServer.demo is ok, but requesting this.action
        // is invalid.
        co(function *(){
            var categroy = yield this.dataService.demo.getCategroy(this.params.id)
            var articles = yield this.dataService.demo.getArticles(categroy)
            var data = {
                'title': 'demo',
                'categroy': categroy,
                'articles': articles
            }
            return data
        }).then(function(data){
            console.log(data)
            console.log(this.render('demo.html', data))
            return this.render('demo.html', data)
        })
        this.log('demo')
    }

    demo.renderArticle = function(articleId){
        return "\n you are in article/" + articleId
     }
}

module.exports = demoPage
