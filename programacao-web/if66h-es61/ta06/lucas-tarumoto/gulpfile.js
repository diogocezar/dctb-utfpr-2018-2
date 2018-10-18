var uglifyjs = require('uglify-js'); 
var composer = require('gulp-uglify/composer');
var pump = require('pump');
var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
 
var minify = composer(uglifyjs, console);
 
gulp.task('compress', function (cb) {
  var options = {};
 
  pump([
      gulp.src('lib/*.js'),
      minify(options),
      gulp.dest('dist')
    ],
    cb
  );
});

gulp.task('default', function () {
    gulp.src('src/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
    gulp.watch('./js/*.js');
    gulp.watch('./css/*.css');
});
