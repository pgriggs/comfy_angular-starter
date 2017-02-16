var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var bower = require('gulp-bower');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('app/js/**/*.js')
      .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

// image optimization
 gulp.task('images', function() {
  return gulp.src('app/assets/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('build/assests/img'));
});

// bower install to gulp task
gulp.task('bower', function() {
  return bower('./bower_components')
    .pipe(gulp.dest('app/lib/'))
});

// bower install to gulp task
gulp.task('bowerProd', function() {
  return bower('./bower_components')
    .pipe(gulp.dest('build/lib/'))
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
  	port: 3000,
    root: 'app/',	
    livereload: true,
    fallback: 'app/index.html'
  });
});

// production build task
gulp.task('production', ['bowerProd'], function() {
    gulp.watch('build/sass/**/*.scss',['styles']);
    gulp.run('scripts');
    gulp.run('images');
});

// Watch task 
gulp.task('default', ['bower', 'connect'], function() {
    gulp.watch('app/sass/**/*.scss',['styles']);
});