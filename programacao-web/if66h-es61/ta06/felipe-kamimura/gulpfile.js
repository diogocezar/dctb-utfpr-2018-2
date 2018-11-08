var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('css', function(){
    gulp.src('./css/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'));
});

//o Uglify não suporta arrow function
gulp.task('js', function() {
    pump( //no site do npm aconselha o uso do pump
        gulp.src('./js/*.js'),
        uglify(),
        gulp.dest('./dist/js')
        );
        /*
        return gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))*/
});

gulp.task('watch', function(){
    gulp.watch('./js/*.js');
    gulp.watch('./css/*.css');
});

//defaul task -> é o que é executado com o comando gulp
gulp.task('default', ['css','js','watch']);