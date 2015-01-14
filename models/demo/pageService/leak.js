//用来测试内存泄露的代码
var leakArray = [];   
var leak = function(mvc){
    var leakPage = mvc.pageService.create('leak')
    leakPage.leak = function () {  
        leakArray.push("leak" + Math.random());  
    };
}
module.exports = leak
