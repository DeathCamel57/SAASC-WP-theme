var siteurl = 'http://172.18.0.3/';

module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    //expanded,compact,nested,compressed
                    style: 'expanded',
                    compass: true,
                },
                files: {
                    // 'includes/stylesheets/reset.css': 'includes/sass/reset.scss',
                    'includes/stylesheets/main.css': 'includes/sass/main.scss'
                }
            } 
        },
        
        postcss: {
            options: {
                failOnError: true,
                syntax: require('postcss-scss'),
                map: false,
                processors: [
                    require('autoprefixer')({
                        browsers: [
                            '> 5%',
                            'last 2 versions',
                            'unreleased versions'
                        ]
                    })
                ]
            },
            dist: {
                src: 'includes/sass/*.scss'
            }
        },
        
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            }
        },
        
        penthouse: {
            extract: {
                outfile : 'includes/stylesheets/above-the-fold.css',
                css : 'includes/stylesheets/main.css',
                url : siteurl,
                width : 1920,
                height : 1080
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-penthouse');

};