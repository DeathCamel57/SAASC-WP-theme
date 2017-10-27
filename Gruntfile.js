module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {

                livereload: true,
            },
            css: {
                files: ['includes/sass/*.scss'],
                tasks: ['sass', 'copy'],
                options: {
                    spawn: false,
                }   
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
        
        copy: {
            main: {
                files: [
                    {expand: true, src: ['includes/**'], dest: 'docker/wordpress/wp-content/themes/SAASC-WP-theme/includes'},
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
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('dev', ['watch','sass']);

};