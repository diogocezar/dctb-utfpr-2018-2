const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

function es(){
  return gulp.src('./assets/*.js')
    .pipe(terser())
    .pipe(gulp.dest('./joao-pirolo'))
}

function css() {
    return gulp.src('./joao-pirolo/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css'));
}

function html() {
     return gulp.src('./joao-pirolo/*.html')
          .pipe(htmlclean({
              protect: /<\!--%fooTemplate\b.*?%-->/g,
              edit: function(html) { return html.replace(/\begg(s?)\b/ig, 'omelet$1'); }
            }))
        .pipe(gulp.dest('./joao-pirolo/'));
}

function watch() {

    gulp.watch("./joao-pirolo/*.css", css);
    gulp.watch("./assets/*.js", es);
    gulp.watch("./joao-pirolo/*.html", html);
}



function browserSyncReload(done) {
    browsersync.reload();
    done();
}

gulp.task('css', css);
gulp.task('js', es);
gulp.task('html', html);

gulp.task('compress', ['css', 'html'], es);
gulp.task('watch', ['compress'],  watch);

