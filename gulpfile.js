var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass');


var config = require('./gulp/config');

// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src(config.jsSrc)
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest(config.dist));
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src("demo/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("demo/css"))
        .pipe(browserSync.stream());
});

// use default task to launch Browsersync and watch JS files
gulp.task('serve', ['js', 'sass'], function () {

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

gulp.task('default', ['serve']);
