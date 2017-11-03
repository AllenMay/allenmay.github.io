var gulp = require('gulp');


gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('jekyll', function() {
  require('child_process').spawn('jekyll', ['build'], {stdio: 'inherit'});
});


