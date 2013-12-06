module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    connect: {
      server: {
        options: {
          port: 9001,
          keepalive: true,
          base: "app"
        }
      }
    },
    concat: {
      dest: {
        files: {
          'generated-javascript.js': [
            'js/**/*.js',
            'js/app.js'
          ],                                                                                        'generated-styles.css': [
            'css/**/*.css',
            'css/styles.css'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-concat');

  return grunt.registerTask('default', [ "connect" ]);
};
