var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    browserify = require('browserify'),
    babelify = require('babelify'),
    path = require('path'),
    uglify = require('gulp-uglify'),
    through2 = require('through2'),
    sass = require('gulp-sass'),
    cssimport = require("gulp-cssimport"),
    cleanCSS = require('gulp-clean-css'),
    bower = require('gulp-bower'),
    rename = require('gulp-rename'),
    runSequence = require('run-sequence'),
    protractor = require('gulp-protractor').protractor,
    webdriver_standalone = require('gulp-protractor').webdriver_standalone,
    webdriver_update = require('gulp-protractor').webdriver_update,
    args = require('yargs').argv,
    express = require('express'),
    jasmine = require('gulp-jasmine'),
    http = require('http');


var config = require('./gulp/config');
// The protractor task
var server = http.createServer(express().use(express.static(__dirname)));
var isCI = args.type === 'ci';

// Tests Setup: ################################################################################

// Downloads the selenium webdriver
gulp.task('webdriver_update', webdriver_update);

// Start the standalone selenium server
// NOTE: This is not needed if you reference the
// seleniumServerJar in your protractor.conf.js
gulp.task('webdriver_standalone', webdriver_standalone);

// Setting up the test task
gulp.task('protractor', ['webdriver_update', 'e2etests:server'], function (cb) {


    gulp.src(['tests/e2e/**/*.js'], {read: false})
        .pipe(protractor({
            configFile: (isCI) ? config.protractorCiConfigFile : config.protractorDevConfigFile,
            args: ['--baseUrl', 'http://' + server.address().address + ':' + server.address().port]
        })).on('error', function (e) {
        server.close();
        if (isCI) {
            throw e;
        } else {
            console.log(e);
        }
        cb();
    }).on('end', function () {
        server.close();
        cb();
    });


});

gulp.task('e2etests:server', function (cb) {
    server.listen(9001, cb);
});


// Build setup ################################################################################


gulp.task('browserify', function () {

    gulp.src('./src/angular-substance-editor.js')
        .pipe(through2.obj(function (file, enc, next) {
            var bundler = browserify(file.path);
            bundler.transform(babelify, {presets: ["es2015"]});

            bundler.bundle(function (err, res) {
                if (err) {
                    console.log(err);
                    return next(err);
                }
                file.contents = res;

                next(null, file);
            });
        }))
        .on('error', function (error) {
            console.log(error.stack);
            this.emit('end');
        })
        .pipe(uglify({
            mangle: false,
            compress: true
        }).on('error', function (err) {
            console.log(err);
        }))
        .pipe(gulp.dest('./dist'));
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['browserify'], function (done) {
    browserSync.reload();
    done();
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src("./dist/sass/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(cssimport({matchPattern: "!./css/_index.css"}))
        .pipe(rename('angular-substance-editor.css'))
        .pipe(gulp.dest("./dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('minify-css', function () {
    return gulp.src('./dist/css/angular-substance-editor.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('angular-substance-editor-min.css'))
        .pipe(gulp.dest('dist/css'));
});


gulp.task('bower', function () {
    return bower();
});

gulp.task('build', function () {
    runSequence('bower', 'browserify', 'sass', 'minify-css', 'assets');
});


// use default task to launch Browsersync and watch JS files
gulp.task('serve', ['build'], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: "./"
    });

    gulp.watch("dist/sass/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./dist/css/*.css").on('change', browserSync.reload);

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("./src/**/*.js", ['js-watch']);
});

gulp.task('assets', function () {

    gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('default', ['serve']);
