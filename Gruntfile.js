module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({

        connect: {
            options: {
                port: 8000,
                base: 'Practices'
            },
            server: {
                options: {
                    keepalive: true
                }
            }
        }

    });

    grunt.registerTask('server', ['connect:server']);

    grunt.registerTask('default', ['server']);
};
