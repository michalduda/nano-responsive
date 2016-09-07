var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    cleanCSS = require('gulp-clean-css');

//sass
gulp.task('sass', function () {
    gulp.src('src/nano-responsive.scss')
        .pipe(sass({outputStyle: 'expanded', precision: 4}))
        .pipe(cleanCSS({advanced: false, aggressiveMerging: false, keepSpecialComments: '*', keepBreaks: true}))
        .pipe(rename('nano-responsive.min.css'))
        .pipe(gulp.dest('dist/'));
});

// Default task
gulp.task('default', function () {
    gulp.start('sass');
});