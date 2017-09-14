var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync').create();

// Runs the browser sync server
gulp.task('browser-sync', ['sass'], function() {
    bs.init({
        server: {
            baseDir: "./",
        },
    });  
});

// Compiles the sass and logs error
gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compact'}))
    .pipe(gulp.dest('./css/'));
});
// Here to rerun the sass when a error happens
gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('watch', ['browser-sync'], function () {
    // Sass
    gulp.watch('./sass/*.scss', ['sass']);
    // CSS
    gulp.watch("./css/style.css").on('change', bs.reload);
    // JS
    gulp.watch("./js//script.js").on('change', bs.reload);
    // Error codes
    gulp.watch("./401/index.html").on('change', bs.reload);
    gulp.watch("./403/index.html").on('change', bs.reload);
    gulp.watch("./404/index.html").on('change', bs.reload);
    gulp.watch("./500/index.html").on('change', bs.reload);
    gulp.watch("./index.html").on('change', bs.reload);
});