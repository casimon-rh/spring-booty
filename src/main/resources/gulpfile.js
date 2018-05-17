var gulp = require('gulp');

var files = './build/**/*.*';

gulp.task('move', function(){
    // the base option sets the relative root for the set of files,
    // preserving the folder structure
    gulp.src(files, { base: './' })
    .pipe(gulp.dest('../../../target/gulp'));
  });