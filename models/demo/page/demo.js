
module.exports = function(models, res, params, callback){
    models.dataService.demo.getData(params, function(data){
        res.render('demo.html', data)
        callback();
    })
}
