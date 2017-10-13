var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');
var rename = require("gulp-rename");
var minifyCSS = require('gulp-clean-css');

gulp.task('css', function() {
  gulp.src('./less/styles.less')
  .pipe(less({
    paths: [ path.join(__dirname, 'less', 'includes') ]
  }))
  .pipe(gulp.dest('./static/css'))
  .pipe(minifyCSS({keepBreaks:true}))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./static/css'));
});


gulp.task('watchers', function() {
  gulp.watch('less/**/*.less', ['css']);
  // gulp.watch('js/**/*.js', ['js']);
});

gulp.task('default', ['css',  'watchers']);
// gulp.task('default', ['css', 'templates', 'js', 'watchers']);