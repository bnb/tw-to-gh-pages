var gulp   = require('gulp');
var deploy = require('gulp-gh-pages');
var del    = require('del');

gulp.task('build', function(){
  return gulp.src('./source/**/*')
    .pipe(gulp.dest('./upload'))
});

gulp.task('clean', function(){
  return del('./upload/**/*')
});

gulp.task('upload', function() {
  return gulp.src('./upload/**/*')
    .pipe(deploy());
});
