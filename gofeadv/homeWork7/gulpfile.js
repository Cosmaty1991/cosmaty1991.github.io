var gulp = require('gulp');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

gulp.task('concat', function() {
  return gulp.src(['styles/src/variables.scss', 'styles/src/mixins.scss', 'styles/src/fonts.scss', 'styles/src/reset.scss', 'styles/src/mobile.scss', 'styles/src/tablet.scss', 'styles/src/desktop.scss'])
    .pipe(concat('main.scss'))
    .pipe(gulp.dest('styles/dest'));
});

gulp.task('default', function() {
  gulp.run('concat');
});

gulp.task('watch', function() {
  gulp.watch('styles/src/*.scss', ['concat']);
});
