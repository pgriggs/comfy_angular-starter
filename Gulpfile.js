var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var bower = require('gulp-bower');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css'); 
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var ngAnnotate = require('gulp-ng-annotate');

// scss file paths for global styles and ind. view styles
var paths = {
  sass: ['app/scss/**/*.scss', 'app/**/**/*.scss']
};

// Concatenate & Minify JS for production build
gulp.task('scripts', function() {
    return gulp.src('app/*/*/*.js')
        .pipe(ngAnnotate())
        .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        //.pipe(uglify())
        .pipe(gulp.dest('build/js'));
});


// image optimization for production build
 gulp.task('images', function() {
  return gulp.src('app/assets/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('build/assets/img'));
});

// bower install to gulp task
gulp.task('bower', function() {
  return bower('./bower_components')
    .pipe(gulp.dest('build/lib/vendors'))
});


gulp.task('sass', function(done) {
  gulp.src('app/**/**/*.scss')
  .pipe(sass())
  .pipe(concat('styles.css'))
  .pipe(minifyCss({
    keepSpecialComments: 0
  }))
  .pipe(rename({ extname: '.min.css' }))
  .pipe(gulp.dest('build/css/'))
  .pipe(livereload())
  .on('end', done);
});

gulp.task('copyFonts', function() {
   gulp.src('app/assetsfonts/**/*.{ttf,woff,eof,svg}')
   .pipe(gulp.dest('build/assets/fonts'));
});

gulp.task('copyViews', function() {
   gulp.src('app/views/**/*.html')
   .pipe(gulp.dest('build/views/'));
});

gulp.task('copyIndex', function() {
    gulp.src('app/index.html')
    .pipe(gulp.dest('build/'));
});

gulp.task('copySitemap', function() {
    gulp.src('app/sitemap.xml')
    .pipe(gulp.dest('build/'));
});
// Concatenate & Minify app.JS for production build
gulp.task('copyAppjs', function() {
    return gulp.src('app/app.js')
     //   .pipe(rename({suffix: '.min'}))
     //   .pipe(uglify())
        .pipe(gulp.dest('build/'));
});


gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(paths.sass, ['sass']);
});

// production build tasks
gulp.task('production', ['bower'], function() {
    //run build tasks
    gulp.run('images');
    gulp.run('sass');
    gulp.run('scripts');
    gulp.run('copyAppjs');
    gulp.run('copyFonts');
    gulp.run('copyIndex');
    gulp.run('copySitemap');
    gulp.run('copyViews');

});

// gulp default (run 'gulp production' in stead of gulp to run these task w/o starting the dev server)
gulp.task('default', ['bower'], function() {
    //run build tasks
    gulp.run('images');
    gulp.run('sass');
    gulp.run('scripts');
    gulp.run('copyAppjs');
    gulp.run('copyFonts');
    gulp.run('copyIndex');
    gulp.run('copySitemap');
    gulp.run('copyViews');
    // development server task w/ fallback for html5 history API 
    // e.g. fallback for removing the # from angular routes
    connect.server({
    port: 3000,
    root: 'build/', 
    livereload: true,
    fallback: 'build/index.html'
  });
});