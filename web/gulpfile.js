var gulp = require ('gulp'),
watch = require ('gulp-watch');

gulp.task('default', function( ){
  console.log('hooray - you created a gulp task.');

gulp.task('html', function( ){
    console.log('something useful created to ur html file.');
});
gulp.task('watch', function(){
  watch('.assets/index.html', function(){
    gulp.start('html');
  });
});
