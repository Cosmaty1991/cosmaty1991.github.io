module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.main.js'
      },
    },

    concat_css: {
      options: {},
      dist: {
        src: ['css/src/*.css'],
        dest: "css/dist/style.main.css"
      },
    },

    uglify: {
      dist: {
        src: ['js/dist/script.main.js'],
        dest: 'js/dist/script.main.min.js'
      },
    },

      sass: {
        options: {
          sourceMap: true
        },
        dist: {
            src: ['css/dist/style.main.css'],
            dest: 'css/dist/style.main.scss'
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['concat', 'concat_css', 'uglify', 'sass']);
};
