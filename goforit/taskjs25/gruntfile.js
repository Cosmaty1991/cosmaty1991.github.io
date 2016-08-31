module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      dist: {
        src: ['styles/src/variables.scss', 'styles/src/mixins.scss', 'styles/src/fonts.scss', 'styles/src/reset.scss', 'styles/src/mobile.scss', 'styles/src/tablet.scss', 'styles/src/desktop.scss'],
        dest: 'styles/dest/main.scss'
      }
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'styles/dest',
          src: ['main.scss'],
          dest: 'styles/dest',
          ext: '.css'
        }]
      }
    },

    watch: {
      sass: {
       files: ['styles/*.scss'],
       tasks: ['concat', 'sass'],
     }
   }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'sass']);
};
