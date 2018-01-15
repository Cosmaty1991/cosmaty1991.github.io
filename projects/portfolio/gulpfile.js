var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cssbeautify = require('gulp-cssbeautify');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

gulp.task('concat', function() {
  return gulp.src(['styles/src/variables.scss', 'styles/src/mixins.scss', 'styles/src/fonts.scss', 'styles/src/reset.scss', 'styles/src/mobile.scss', 'styles/src/tablet.scss', 'styles/src/desktop.scss'])
    .pipe(concat('style.scss'))
    .pipe(gulp.dest('styles/dest'));
});

gulp.task('sass', function() {
  return gulp.src('styles/dest/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles/dest'));
});

gulp.task('cssbeautify', function() {
  return gulp.src('styles/dest/style.css')
    .pipe(cssbeautify({
            indent: '  ',
            openbrace: 'end-of-line',
            autosemicolon: false
        }))
    .pipe(gulp.dest('styles/dest'));
});

gulp.task('minify-css', function() {
  return gulp.src('styles/dest/style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('styles/dest'));
});

gulp.task('scripts', function() {
  return gulp.src(['js/src/*.js'])
    .pipe(concat('script.js'))
    .pipe(gulp.dest('js/dest'));
});

gulp.task('compress', function(cb) {
  pump([
        gulp.src('js/dest/script.js'),
        uglify(),
        rename('script.min.js'),
        gulp.dest('js/dest')
      ],
    cb
  )
});

gulp.task('default', function() {
  gulp.run('concat', 'sass', 'cssbeautify', 'minify-css', 'scripts', 'compress');
});

gulp.task('watch', function() {
  gulp.watch('styles/src/*.scss', ['concat']);
  gulp.watch('styles/dest/*.scss', ['sass']);
  gulp.watch('styles/dest/*.css', ['cssbeautify']);
  gulp.watch('styles/dest/*.css', ['minify-css']);
  gulp.watch('js/src/*.js', ['scripts']);
  gulp.watch('js/dest/*.js', ['compress']);
});
