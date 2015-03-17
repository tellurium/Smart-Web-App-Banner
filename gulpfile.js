'use strict';

// gulp plugins
var gulp = require('gulp');
var snippets = require('gulp-snippets');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var replace = require('gulp-replace');

// project variables
var _base = 'jQuery.smartWebBanner.min';
var _jsFile = _base + '.js';
var _csssFile = _base + '.css';

/**
 * @task List all available tasks
 */
gulp.task('default', snippets.listTasks(gulp));

/**
 * @task Export target files
 */
gulp.task('dist', [ 'uglify-js', 'minify-css' ]);

/**
 * @task Minify javascript files
 */
gulp.task('uglify-js', function () {
    gulp.src(_jsFile)
        .pipe(uglify())
        .pipe(rename({
            basename: _base,
            extname: '.js'
        }))
        .pipe(gulp.dest('./'));
});

/**
 * @task Minify css files
 */
gulp.task('minify-css', function () {
    gulp.src(_csssFile)
        .pipe(minifycss())
        .pipe(rename({
            basename: _base,
            extname: '.css'
        }))
        .pipe(gulp.dest('./'));
});

/**
 * @task Watch file changes
 */
gulp.task('watch', function () {
    gulp.watch('./*.js', [ 'uglify-js' ]);
    gulp.watch('./*.css', [ 'minify-css' ]);
});
