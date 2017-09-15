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
    gulp.watch("./401/index.html").on('change', bs.reload);
    gulp.watch("./403/index.html").on('change', bs.reload);
    gulp.watch("./404/index.html").on('change', bs.reload);
    gulp.watch("./500/index.html").on('change', bs.reload);
    gulp.watch("./index.html").on('change', bs.reload);
});