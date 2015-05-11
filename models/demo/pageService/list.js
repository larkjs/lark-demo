var logging = require('lark').logging

module.exports = function(mvc){
    var listPage = mvc.pageService.create('list')
        listPage.render = function(){
            logging.info('list in pageService')
            return "you'r in listPage"
        }
        return listPage
}
