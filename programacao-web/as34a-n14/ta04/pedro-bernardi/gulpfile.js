const Gulp = {
    gulp: null,
    browserSync: null,
    cleanCSS: null,
    rename: null,
    init: () => {
        Gulp.gulp = require('gulp');
        Gulp.cleanCSS = require('gulp-clean-css');
        Gulp.rename = require("gulp-rename");
        Gulp.browserSync = require('browser-sync').create();
        Gulp.setTasks();
    },
    setTasks: () => {

        // Minify CSS
        Gulp.gulp.task('minify-css', () => {
            return Gulp.gulp.src([
                './assets/css/*.css',
                '!./assets/css/*.min.css'
              ])
              .pipe(Gulp.cleanCSS())
              .pipe(Gulp.rename({
                suffix: '.min'
              }))
              .pipe(Gulp.gulp.dest('./assets/css'))
              .pipe(Gulp.browserSync.stream());
          })

        Gulp.gulp.task('serve', () => {
            Gulp.browserSync.init({
                server: './'
            })
            Gulp.gulp.watch('./*.html').on('change', Gulp.browserSync.reload)
            Gulp.gulp.watch("./assets/js/*.js").on('change', Gulp.browserSync.reload);
            Gulp.gulp.watch("./assets/css/*.css").on('change', Gulp.browserSync.reload);
			Gulp.gulp.watch('./assets/css/*.css', ['minify-css'])

        })
        Gulp.gulp.task('default', ['serve', 'minify-css'])
    }
}

Gulp.init();