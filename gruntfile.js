module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            stylesheets: {
                options: {
                    style: 'compressed'
                },
                files: { // 'destination': 'source'
                    'build/css/stylesheets.min.css': 'src/scss/*.scss'
                }
            }
        }, //sass
        uglify: {
            scripts: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                files: { // 'destination': 'source'
                    'build/js/scripts.min.js': 'src/js/*.js'
                }
            }
        }, //uglify
        watch: {
            scripts: {
                files: ['src/js/*.js'],
                tasks: ['uglify']
            }, //watch:scripts
            stylesheets: {
                files: ['src/scss/*.scss'],
                tasks: ['sass']
            } //watch:stylesheets
        } //watch
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
};