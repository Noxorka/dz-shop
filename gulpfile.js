"use strict";

var gulp = require('gulp'),
    jade = require('gulp-jade');

gulp.task('jade', function() {
    gulp.src('app/templates/pages/*.jade')
        .pipe(jade())
        .on('error', log)
        .pipe(prettify({indent_size: 2}))
        .pipe(gulp.dest('app/'))
        .pipe(reload({stream: true}));
});


// слежка и запуск задач
gulp.task('watch', function () {
    gulp.watch('app/jade/**/*.jade', ['jade']);
});

// Задача по-умолчанию
gulp.task('default');