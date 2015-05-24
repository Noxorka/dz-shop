'use strict';

var
    gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    minifyCSS = require('gulp-minify-css'),
    notify = require("gulp-notify"),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    merge = require('merge-stream'),
    connect = require('gulp-connect'),
    prettify = require('gulp-html-prettify'),
    jsmin = require('gulp-jsmin'),
    del = require('del');

gulp.task('connect', function() {
    connect.server({
        root: ['html', 'css'],
        livereload: true
    });
});

gulp.task('concat', function () {
    gulp.src('app/css/*.css')
        .pipe(concatCss("main.css"))
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(gulp.dest('css/'))
        .pipe(notify("Css Optimized!"));
    //.pipe(connect.reload());
});

gulp.task('jade', function () {
    gulp.src('app/templates/pages/*.html')
        .pipe(prettify({indent_char: '  ', indent_size: 2}))
        .pipe(gulp.dest('app/'))
        .pipe(notify("Jade Complete!"));
    //.pipe(connect.reload());
});

gulp.task('compress-plugins', function() {
    gulp.src('app/js/*.js')
        .pipe(concat('script.js'))
        .pipe(gulp.dest('js/_source/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('js/'))
        .pipe(notify("Plugins.js Optimized!"));
});

gulp.task('clean', function() {
    del(['_dev/_makeups/**/*.html', '_dev/_styles/**/*.css', '_dev/_bower']);
});

gulp.task('clean-total', function() {
    del(['_dev', 'node_modules', '.bowerrc', '.gitignore', 'gulpfile.js', 'package.json']);
});

//gulp.task('scripts', function() {
//
//	var main = gulp.src('./_dev/_scripts/_modules/*.js');
//	var plugins = gulp.src('./_dev/_scripts/_plugins/*.js');
//
//	return merge(main)
//		.pipe(concat('project.js'))
//		.pipe(gulp.dest('/js/_source/'))
//		.pipe(rename('project.min.js'))
//		.pipe(uglify())
//		.pipe(gulp.dest('/js/'))
//});


gulp.task('watch', function(){
    gulp.watch('_dev/_styles/**/*.css', ['concat']);
    gulp.watch('_dev/_makeups/**/*.html', ['jade']);
    gulp.watch('_dev/_scripts/_plugins/*.js', ['compress-plugins']);
    gulp.watch('_dev/_scripts/_modules/*.js', ['compress-modules']);
});

gulp.task('default', ['watch']);


