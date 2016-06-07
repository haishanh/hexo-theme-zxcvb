'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const sassSrc = 'source/_scss/*.scss';

gulp.task('sass', function () {
  return gulp.src(sassSrc)
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('source/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch(sassSrc, ['sass']);
});

gulp.task('sass:minify', function () {
  return gulp.src(sassSrc)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('source/css'));
});

gulp.task('default', ['sass:minify']);
