var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    browserify = require('browserify'),
    uglify = require('gulp-uglify'),
    through2 = require('through2'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename');


var config = require('./gulp/config');




// ################################################################################

// The protractor task
var protractor = require('gulp-protractor').protractor;

// Start a standalone server
var webdriver_standalone = require('gulp-protractor').webdriver_standalone;

// Download and update the selenium driver
var webdriver_update = require('gulp-protractor').webdriver_update;


var args = require('yargs').argv;
var express = require('express');
var http = require('http');
var server = http.createServer(express().use(express.static(__dirname + '/demo/')));
var isCI = args.type === 'ci';


// Downloads the selenium webdriver
gulp.task('webdriver_update', webdriver_update);

// Start the standalone selenium server
// NOTE: This is not needed if you reference the
// seleniumServerJar in your protractor.conf.js
gulp.task('webdriver_standalone', webdriver_standalone);


// Setting up the test task
gulp.task('protractor', ['e2etests:server'], function(cb) {

    gulp.src(['tests/e2e/**/*.js'], { read:false })
  		.pipe(protractor({
  			configFile: './protractor.conf.js',
  			args: ['--baseUrl', 'http://' + server.address().address + ':' + server.address().port]
  		})).on('error', function(e) {
  			server.close();
  			if(isCI) {
  				throw e;
  			} else {
  				console.log(e);
  			}
  			cb();
  		}).on('end', function() {
  			server.close();
  			cb();
  		});




});


gulp.task('e2etests:server', function(cb) {
	server.listen(9001, cb);
});


//################################################################################
















// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src([config.jsSrc, './node_modules'])
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest(config.dist));
});

gulp.task('browserify', function () {
    return gulp.src(config.jsSrc + '/angular-substance-editor.js')
        .pipe(through2.obj(function (file, enc, next) {
            browserify(file.path)
                .bundle(function (err, res) {
                    if (err) {
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
        .pipe(uglify().on('error', function (err) {
            console.log(err);
        }))
        .pipe(gulp.dest(config.dist));

});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['browserify'], function (done) {
    browserSync.reload();
    done();
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src("./demo/sass/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('app.css'))
        .pipe(gulp.dest("./demo/css"))
        .pipe(browserSync.stream());
});

// use default task to launch Browsersync and watch JS files
gulp.task('serve', ['browserify', 'sass', 'assets'], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: "./demo"
    });

    gulp.watch("demo/scss/*.scss", ['sass']);
    gulp.watch("demo/*.html").on('change', browserSync.reload);

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("./src/*.js", ['js-watch']);
});


gulp.task('assets', function () {

    gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('./demo/fonts'));
    gulp.src('node_modules/ace-builds/src-min/*')
        .pipe(gulp.dest('./demo/ace'));
});

gulp.task('default', ['serve']);
