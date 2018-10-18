var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    gp_cssmin = require('gulp-cssmin');
    watch = require('gulp-watch');

var caminho = './gulp/',
    js_path = 'src/*.js';
    css_path = 'src/*.css';

gulp.task('concat', function(){
    return gulp.src(js_path)
            .pipe(gp_concat('app.js'))
            .pipe(gulp.dest(caminho))

});

gulp.task('minify', function(){
    return gulp.src(js_path)
            .pipe(gp_rename('app.min.js'))
            .pipe(gp_uglify())
            .pipe(gulp.dest(caminho));
});

gulp.task('concat', function(){
    return gulp.src(css_path)
            .pipe(gp_concat('app.css'))
            .pipe(gulp.dest(caminho))

});

gulp.task('minify', function () {
    gulp.src(css_path)
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(caminho));
});



gulp.self.task('watch', function(){
		Gulp.self.watch('.src/*.js', ['js']);
		Gulp.self.watch('./src/*.css', ['css']);
	});

gulp.task('default', ['concat'], function(){});