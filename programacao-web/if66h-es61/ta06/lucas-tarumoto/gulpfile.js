var uglifyjs = require('uglify-js'); 
var composer = require('gulp-uglify/composer');
var pump = require('pump');
var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
 
var minify = composer(uglifyjs, console);

gulp.task('default', function () {
    gulp.src('./*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));

        var options = {};
 
  pump(
      gulp.src('./js/*.js'),
      minify(options),
      gulp.dest('./dist'));


        gulp.watch('./js/*.js');
        gulp.watch('./*.css');

});
