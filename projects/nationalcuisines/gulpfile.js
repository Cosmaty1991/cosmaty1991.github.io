var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

gulp.task('concat', function() {
  return gulp.src(['styles/src/variables.scss', 'styles/src/mixins.scss', 'styles/src/fonts.scss', 'styles/src/reset.scss', 'styles/src/mobile.scss', 'styles/src/tablet.scss', 'styles/src/desktop.scss'])
      .pipe(concat('main.scss'))
      .pipe(gulp.dest('styles/dest'));
});

gulp.task('sass', function() {
  return gulp.src('styles/dest/main.scss')
      .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(gulp.dest('styles/dest'));
});

gulp.task('minify-css', function() {
  return gulp.src('styles/dest/main.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('styles/dest'))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('styles/dest'));
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('js/src/script.js'),
        uglify(),
        rename('script.min.js'),
        gulp.dest('js/dest')
      ],
    cb
  )
});

gulp.task('default', function() {
  gulp.run('concat', 'sass', 'minify-css', 'compress');
});

gulp.task('watch', function() {
  gulp.watch('styles/src/*.scss', ['concat']);
  gulp.watch('styles/src/*.scss', ['sass']);
  gulp.watch('styles/dest/*.css', ['minify-css']);
  gulp.watch('js/src/*.js', ['compress']);
});
