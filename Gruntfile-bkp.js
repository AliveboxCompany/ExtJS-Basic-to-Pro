'use strict';

var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    var mainConfig = {
        app: 'Practices'
    };

    grunt.initConfig({

        mainConfig: mainConfig,

        watch: {
            options: {
                nospawn: true
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '<%= mainConfig.app %>/*.html',
                    '{.tmp,<%= mainConfig.app %>}/styles/**/*.css',
                    '{.tmp,<%= mainConfig.app %>}/scripts/**/*.js',
                    '{.tmp,<%= mainConfig.app %>}/scripts/**/*.hbs',
                    '<%= mainConfig.app %>/images/**/*.{png,jpg,jpeg,gif,webp}'
                ],
                tasks: ['connect:livereload']
            }
        },

        connect: {
            options: {
                port: LIVERELOAD_PORT,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'Practices')
                        ];
                    }
                }
            }
        }

    });

//    grunt.initConfig({
//        watch: {},
//        express: {
//            options: {
//                port: 9000,
//                hostname: 'localhost'
//            },
//            livereload: {
//                livereload: true,
//                bases: [path.resolve('./.tmp'), path.resolve('Practices')]
//            }
//        },
//        open: {
//            server: {
//                url: 'http://localhost:<%= express.options.port %>',
//                app: 'Firefox'
//            }
//        }
//    });
//
//    grunt.loadNpmTasks('grunt-open');
//    grunt.loadNpmTasks('grunt-contrib-watch');
//    grunt.loadNpmTasks('grunt-express');
//
//    grunt.registerTask('server', function (target) {
//        grunt.task.run([
//            'express:livereload',
//            'open',
//            'watch'
//        ]);
//    });
//
//
    grunt.registerTask('default', ['connect:livereload','watch']);
};