var heapdump = require('heapdump');

var app = require('lark')();
 
app.run(function () {
      console.log('running on', app.config.port);
});

//heapdump.writeSnapshot('/Users/xyz/Codes/lark-demo' + Date.now() + '.heapsnapshot');
