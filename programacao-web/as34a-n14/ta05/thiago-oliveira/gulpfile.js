
   // var scssFiles = './assets/scss/**/*.scss'
    //var cssDest = './assets/css/'
/*Gulp = {
    self: null,
    sass: null,
    init: function () {
        Gulp.self = require('gulp');
        Gulp.sass = require('gulp-sass');
        Gulp.default();
    },
    default: function () {
        Gulp.self.task('default', ['scss']);
    },
    scss: function () {
    */
   //     Gulp.self.src('./assets/scss/**/*.scss')
   /*         .pipe(Gulp.sass())
            .pipe(Gulp.self.dest('./assets/css/'));
    }
}; Gulp.init();*/

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename');
    //concat = require('gulp-concat'),
    //uglify = require('gulp-uglify'),
    
var paths = {
    styles: {
        src: '/assets/scss/**/*.scss',
        dest: '/assets/css/'
    }
    /*scripts: {
        src: '/script/src/*.js',
        dest: '/script/'
    }*/
};

function styles() {
    return gulp
        .src(paths.styles.src, {
            sourcemaps: true
        })
        .pipe(sass())
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.styles.dest));
}

function watch() {
    gulp.watch(paths.styles.src, styles);
}

var build = gulp.parallel(styles, watch);

gulp.task(build);
gulp.task('default', build);