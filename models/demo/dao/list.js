module.exports = function(mvc){
    var demo = mvc.dao.create('demo')
    demo.getData = function(){
        return 'dao dataServices is loaded!'
    }
    demo.get = function(msg) {
        return 'this is '+ msg + ' from dao'
    }
}
