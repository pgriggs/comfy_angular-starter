var gulp = require('gulp');
var sass = require('gulp-sass');
var serve = require('gulp-serve');
var livereload = require('gulp-livereload');
var bower = require('gulp-bower');

// bower install to gulp task
gulp.task('bower', function() {
  return bower('./bower_components')
    .pipe(gulp.dest('app/lib/'))
});

// Styles task
gulp.task('styles', function() {
    gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css/'))
        .pipe(livereload());
});

// http server task
gulp.task('serve', serve('app'));

// Watch task 
gulp.task('default', ['bower', 'serve'], function() {
	livereload.listen();
    gulp.watch('app/sass/**/*.scss',['styles']);
});