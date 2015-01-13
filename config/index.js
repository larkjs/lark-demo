module.exports = {
    'appname': 'lark-demo-app',
    'server': require('./server'),
    'static_dir': __dirname + '/' + '../public',
    'favicon_path': __dirname + '/' + '../public/favicon.ico',
    'port': 8089,
    'log_format': 'common',
    'cluster': {
        'enable': true
    },
    "global": {
        "httpAgentMaxSocks": 500
    }
}
