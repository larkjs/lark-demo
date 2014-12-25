module.exports = function(mvc){
    var listPage = mvc.pageService.create('list')
        listPage.body = "you'r in listPage";
}
