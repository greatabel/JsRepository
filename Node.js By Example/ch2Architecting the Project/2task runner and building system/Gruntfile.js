module.experts = function(grunt) {
    grunt.initConfig(
            {
                concat: {
                    javascript: {
                        src: 'src/**/*.js',
                        dest: 'build/script.js'
                    }
                }
            }
        );
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default',['concat']);
}