'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

gulp.task('default', function() {
});

gulp.task('sass', function () {
  return gulp.src('sass/**/*.{sass,scss}')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'));
});

gulp.task('sass:watch', function () {
 gulp.watch('sass/**/*.{sass,scss}', ['sass']);
});

