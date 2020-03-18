/* global module: true */
module.exports = function (grunt) {
    grunt.initConfig({
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            files: {
                src: 'dist/index.html',
                dest: 'dist/index.html'
            }
        },
        cssmin: {
            'dist/register.css': 'register.css'
        },
        uglify: {
            release: {
                files: {
                    'dist/register.js': 'register.js'
                }
            }
        },
        copy: {
            html: {
                src: './index.html',
                dest: './dist/index.html'
            }
        },
        useminPrepare: {
            html: 'index.html',
            options: {
                dest: 'dist'
            }
        },
        usemin: {
            html: ['dist/index.html']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask('release', ['copy', 'useminPrepare', 'uglify', 'usemin', 'cssmin', 'htmlmin']);

};