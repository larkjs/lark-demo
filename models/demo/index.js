modeule.exports = {
    'actions': require('actions'),
    'models': require('mvc')({
        'pageServer': './models/page',
        'dataServer': './models/data'
    }
)
