var pageService = require('lark-mvc').pageService
var demo = pageService.create('demo')
var co = require('co')
demo.render = function(){
    // `this` is the layer proxy, which make the rule that only top layer
    // can request down layer between layers.
    // for example, in page layer, requesting this.pageServer.otherLayer
    // and this.dataServer.demo is ok, but requesting this.action
    // is invalid.
    var res = ''
    co(function *(){
    var categroy = yield this.dataService.demo.getArticles(this.params.id)
    var articles = yield this.dataService.demo.getArticles(categroy)
    var data = {
        'categroy': categroy,
        'articles': articles
    }
    res = yield this.render('demo.html', data)
    })
    return res
})

module.exports = demo
