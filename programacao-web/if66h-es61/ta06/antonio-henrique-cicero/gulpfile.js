const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function sassCompile() {
    return gulp
    .src('css/scss/*.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
}

function jsCompile() {
    return gulp
    .src('js/main/*.js')
    .pipe(concat('main.js'))
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream());
}

function openBrowser() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
}

function watch() {
    gulp.watch('css/scss/*.scss', sassCompile);
    gulp.watch(['js/main/*.js'], jsCompile);
    gulp.watch(['*.html']).on('change', browserSync.reload);
}

gulp.task('sass', sassCompile);
gulp.task('mainjs', jsCompile);
gulp.task('browser-sync', openBrowser);
gulp.task('watch', watch);
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'mainjs'));
