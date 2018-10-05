var gulp = require('gulp');
var bs = require('browser-sync').create();

gulp.task('default', ['watch']);

// Runs the browser sync server
gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./",
        },
    });
});

gulp.task('watch', ['browser-sync'], function () {
    // Error codes
    gulp.watch("./*.html").on('change', bs.reload);
});
