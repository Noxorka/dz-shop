"use strict";

var gulp = require('gulp'),
    sass = require('gulp-sass');



//Работа c js
gulp.task('js', function () {
  gulp.src('app/js/*.js')
    .pipe(connect.reload());
});

//Работа c html
gulp.task('html', function () {
    gulp.src('./app/*.html')
    .pipe(connect.reload());
});
 
 //Слежка
gulp.task('watch', function () {
    gulp.watch(['app/*.html'], ['html']);
    gulp.watch(['sass/*.sass'], ['sass']);
    gulp.watch(['app/js/*.js'], ['js']);
});
 
 //Запуск всех штукастей
gulp.task('default', ['watch']);