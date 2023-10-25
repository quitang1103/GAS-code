const gulp = require('gulp');
const exec = require('child_process').exec;

gulp.task('push', gulp.series(function (done) {
    exec('clasp push', function () {
        done();
    });
}));

gulp.task('watch', gulp.series('push', function () {
    gulp.watch([
        '**/*.gs',
        '**/*.html'
    ], gulp.series('push'));
}));

gulp.task('default', gulp.series('watch'));
