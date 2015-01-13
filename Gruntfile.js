var conf = require('./config/index.js')

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: {
                'src': '**/*.js'
            }
         },
        watch: {
            src: {
                files: ['**/*.js', 'public/**/*.html', 'public/**/*.css'],
                tasks: ['build'],
                options: {
                    livereload: true
                }
            },
            /*
            test: {
                files: '<%= jshint.test.src %>',
                tasks: ['jshint:test', 'qunit']
            },
            */
        },
        open: { // open the url through browser
            "examples": {
                path: 'http://localhost:' + conf.port + '/'
            }
        },
        concurrent: {
            build: {
                tasks: ['jshint'],
                options: {
                    limit: 3,
                    logConcurrentOutput: true
                }
            }
        }
    });
    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
    grunt.registerTask('build', ['concurrent:build']);
    grunt.registerTask('default', ['build']);
    grunt.registerTask('run', 'Start a developing environment', [
        'watch'
    ]);
};
/* vim: set expandtab ts=4 sw=4 sts=4 tw=100: */
