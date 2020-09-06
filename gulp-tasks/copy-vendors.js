"use strict";

import gulp from "gulp";

gulp.task('copy-vendors-css', () => {
    return gulp.src('./src/vendor/styles/*.css')
            .pipe(gulp.dest('./dist/styles'));
});

gulp.task('copy-vendors-js', () => {
    return gulp.src('./src/vendor/js/*.js')
            .pipe(gulp.dest('./dist/js'));
});