var gulp = require('gulp');
var pump = require('pump');
var rename = require('gulp-rename');
var composer = require('gulp-uglify/composer');;
var cssmin = require('gulp-cssmin');
var uglifyjs = require('uglify-js');
var minify = composer(uglifyjs, console);

function css() {
    return gulp.src('./*.css')
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'));
}

gulp.task('default', function(){
	gulp.task('css', css);
	
	var options = {};
	
	pump(
      gulp.src('./js/*.js'),
      minify(options),
      gulp.dest('./dist')
	  );
	
	gulp.watch('./js/*.js');
        gulp.watch('./*.css');
});



