var app = require('lark')();
 
app.listen(app.config.port, function () {
      console.log('running on', app.config.port);
});

