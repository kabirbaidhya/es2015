var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('compile', function () {
    return gulp.src('src/**/*')
        .pipe(babel())
        .pipe(gulp.dest('public/build/js'));
});

gulp.task('default', ['compile']);

gulp.task('watch', ['default'], function() {
    gulp.watch('src/**/*.js*', ['compile']);
});
