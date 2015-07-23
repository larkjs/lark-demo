var logging = require('lark/logging')
var mvc = require('lark/mvc')

var render = function(){
    logging.info('list in pageService')
    return "you'r in listPage"
}

var list = mvc.pageService.create('list') 
list = render
