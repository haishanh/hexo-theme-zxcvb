'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

const sassSrc = 'source/_scss/*.scss';

gulp.task('sass', function () {
  gulp.src(sassSrc)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('source/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch(sassSrc, ['sass']);
});

gulp.task('default', ['sass']);