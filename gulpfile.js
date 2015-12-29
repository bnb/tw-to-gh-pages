var gulp = require('gulp');
var deploy = require('gulp-gh-pages');

gulp.task('upload', function() {
  return gulp.src('./upload/**/*')
    .pipe(deploy());
});
