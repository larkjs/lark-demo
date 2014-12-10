var dataService = require('lark-mvc').dataService
var demo = dataService.create('demo')
demo.getData = function(){
    // get data by dao
    articles = {}
    co (function *(){
        var articles = yeild this.dao.get(this.request.id);
        if articles
    })
    return articles
}

module.exports = demo
