var gulp = require ('gulp'),
watch = require ('gulp-watch');

gulp.task('html', function( ){
    console.log('something useful created to ur html file.');
});

gulp.task('styles', function (){
  return gulp.src('.app/assets/styles/styles.css')
    .pipe(gulp.dest('assets/temp/styles'));
});
gulp.task('watch', function(){
  watch('.assets/index.html', function(){
    gulp.start('html');
  });
  watch('assets/styles/**/*.css', function(){
    gulp.start('styles');
  });
});
