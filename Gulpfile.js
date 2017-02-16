var gulp = require('gulp');
var sass = require('gulp-sass');
var serve = require('gulp-serve');
var livereload = require('gulp-livereload');
var bower = require('gulp-bower');
var connect = require('gulp-connect');

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
gulp.task('connect', function() {
  connect.server({
  	port: 8080,
    root: 'app/',	
    livereload: true,
    fallback: 'app/index.html'
  });
});

// Watch task 
gulp.task('default', ['bower', 'connect'], function() {
    gulp.watch('app/sass/**/*.scss',['styles']);
});