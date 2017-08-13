var gulp = require ('gulp'),
watch = require ('gulp-watch');

gulp.task('html', function( ){
    console.log('something useful created to ur html file.');
});

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    /*.pipe(postcss([cssvars, nested, autoprefixer]))*/
    .pipe(gulp.dest('./app/temp/styles'));
});
gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });

});
