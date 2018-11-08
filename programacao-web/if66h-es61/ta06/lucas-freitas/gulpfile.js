const gulp = require('gulp');
const terser = require('gulp-terser');
const cleanCSS = require('gulp-clean-css');
const htmlclean = require('gulp-htmlclean');

function es(){
  return gulp.src('./src/js/*.js')
    .pipe(terser())
    .pipe(gulp.dest('./dist/js'))
}

function css() {
    return gulp.src('./src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css'));
}

function html() {
     return gulp.src('./src/*.html')
          .pipe(htmlclean({
              protect: /<\!--%fooTemplate\b.*?%-->/g,
              edit: function(html) { return html.replace(/\begg(s?)\b/ig, 'omelet$1'); }
            }))
        .pipe(gulp.dest('./dist/'));
}

function watch() {

    
    gulp.watch("./src/css/*.css", css);
    gulp.watch("./src/js/*.js", es);
    gulp.watch("./src/*.html", html);
}


gulp.task('css', css);
gulp.task('js', es);
gulp.task('html', html);

gulp.task('compress', ['css', 'html'], es);
gulp.task('watch', ['compress'],  watch);