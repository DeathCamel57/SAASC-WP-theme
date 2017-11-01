var siteurl = 'http://172.18.0.3/';

module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {

                livereload: true,
            },
            scss: {
                files: ['includes/sass/*.scss'],
                tasks: ['newer:postcss', 'newer:sass', 'newer:copy', 'clean', 'webshot', 'penthouse', 'phantomas'],
                options: {
                    spawn: false,
                }   
            },
            php: {
                files: ['*.php', 'includes/themetacular/*.php'],
                tasks: ['newer:copy', 'clean', 'penthouse', 'webshot']
            },
            js: {
                files: ['includes/maptalks/maptalks-custom.js', 'includes/maptalks/maptalks.js', 'includes/js/custom.js'],
                tasks: ['newer:jshint', 'newer:copy', 'clean', 'penthouse', 'webshot', 'phantomas']
            }
        },

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
        
        copy: {
            main: {
                files: [
                    {expand: true, src: ['includes/**'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['screenshot.png'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['style.css'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['404.php'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['archive.php'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['comments.php'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['footer.php'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['format-aside.php'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['format-audio.php'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['format-gallery.php'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['format-image.php'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['format-link.php'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['format-meta.php'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['format-none.php'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['format.php'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['format-post_thumbnail.php'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['format-quote.php'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['format-status.php'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['format-video.php'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['functions.php'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['header.php'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['includes'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['index.php'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['node_modules'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['package.json'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['page.php'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['screenshot.png'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['searchform.php'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['sidebar.php'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'},
                    {expand: true, src: ['style.css'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme'}
                ]
            }
        },
        
        webshot: {  
            homepage_xl_themeimage: {  
                options: {  
                    phantomPath: require('phantomjs2').path,
                    siteType: 'url',  
                    site: siteurl + '',  
                    savePath: 'screenshot.png',  
                    windowSize: {  
                        width: 1280,  
                        height: 720  
                    },  
                    shotSize: {  
                        width: 1280,  
                        height: 'all'  
                    }  
                }  
            },
            homepage_xl: {  
                options: {  
                    phantomPath: require('phantomjs2').path,
                    siteType: 'url',  
                    site: siteurl + '',  
                    savePath: './docs/screenshots/desktop_xl-home.png',  
                    windowSize: {  
                        width: 1280,  
                        height: 720  
                    },  
                    shotSize: {  
                        width: 1280,  
                        height: 'all'  
                    }  
                }  
            },  
            homepage_l: {  
                options: {  
                    phantomPath: require('phantomjs2').path,
                    siteType: 'url',  
                    site: siteurl + '',  
                    savePath: './docs/screenshots/desktop_l-home.png',  
                    windowSize: {  
                        width: 992,  
                        height: 720  
                    },  
                    shotSize: {  
                        width: 992,  
                        height: 'all'  
                    }  
                }  
            },  
            homepage_m: {  
                options: {  
                    phantomPath: require('phantomjs2').path,
                    siteType: 'url',  
                    site: siteurl + '',  
                    savePath: './docs/screenshots/desktop_m-home.png',  
                    windowSize: {  
                        width: 768,  
                        height: 720  
                    },  
                    shotSize: {  
                        width: 768,  
                        height: 'all'  
                    }  
                }  
            },  
            homepage_s: {  
                options: {  
                    phantomPath: require('phantomjs2').path,
                    siteType: 'url',  
                    site: siteurl + '',  
                    savePath: './docs/screenshots/desktop_s-home.png',  
                    windowSize: {  
                        width: 576,  
                        height: 720  
                    },  
                    shotSize: {  
                        width: 576,  
                        height: 'all'  
                    }  
                }  
            },  
            homepage_xs: {  
                options: {  
                    phantomPath: require('phantomjs2').path,
                    siteType: 'url',  
                    site: siteurl + '',  
                    savePath: './docs/screenshots/desktop_xs-home.png',  
                    windowSize: {  
                        width: 575,  
                        height: 720  
                    },  
                    shotSize: {  
                        width: 575,  
                        height: 'all'  
                    }  
                }  
            },  
            notfound_xl: {  
                options: {  
                    phantomPath: require('phantomjs2').path,
                    phantomConfig: {
                        force: true,
                    },
                    siteType: 'url',  
                    site: siteurl + 'notfound',  
                    savePath: './docs/screenshots/desktop_xl-404.png',  
                    windowSize: {  
                        width: 1280,  
                        height: 720  
                    },  
                    shotSize: {  
                        width: 1280,  
                        height: 'all'  
                    }  
                }  
            },  
            notfound_l: {  
                options: {  
                    phantomPath: require('phantomjs2').path,
                    phantomConfig: {
                        force: true,
                    },
                    siteType: 'url',  
                    site: siteurl + 'notfound',  
                    savePath: './docs/screenshots/desktop_l-404.png',  
                    windowSize: {  
                        width: 992,  
                        height: 720  
                    },  
                    shotSize: {  
                        width: 992,  
                        height: 'all'  
                    }  
                }  
            },  
            notfound_m: {  
                options: {  
                    phantomPath: require('phantomjs2').path,
                    phantomConfig: {
                        force: true,
                    },
                    siteType: 'url',  
                    site: siteurl + 'notfound',  
                    savePath: './docs/screenshots/desktop_m-404.png',  
                    windowSize: {  
                        width: 768,  
                        height: 720  
                    },  
                    shotSize: {  
                        width: 768,  
                        height: 'all'  
                    }  
                }  
            },  
            notfound_s: {  
                options: {  
                    phantomPath: require('phantomjs2').path,
                    phantomConfig: {
                        force: true,
                    },
                    siteType: 'url',  
                    site: siteurl + 'notfound',  
                    savePath: './docs/screenshots/desktop_s-404.png',  
                    windowSize: {  
                        width: 576,  
                        height: 720  
                    },  
                    shotSize: {  
                        width: 576,  
                        height: 'all'  
                    }  
                }  
            },  
            notfound_xs: {  
                options: {  
                    phantomPath: require('phantomjs2').path,
                    phantomConfig: {
                        force: true,
                    },
                    siteType: 'url',  
                    site: siteurl + 'notfound',  
                    savePath: './docs/screenshots/desktop_xs-404.png',  
                    windowSize: {  
                        width: 575,  
                        height: 720  
                    },  
                    shotSize: {  
                        width: 575,  
                        height: 'all'  
                    }  
                }  
            }
        },
        
        clean: {
            screenshots: 'docs/screenshots/'
        },
        
        phantomas: {
            gruntsite: {
                options: {
                    indexPath: 'docs/phantomas/',
                    url: siteurl,
                    buildUi: true
                }
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
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-webshot');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-phantomas');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-penthouse');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('dev', ['watch','sass']);

};