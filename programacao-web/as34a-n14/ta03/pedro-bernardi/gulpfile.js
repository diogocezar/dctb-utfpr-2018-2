const Gulp = {
    gulp        : null,
    browserSync : null,
    init: () => {
        Gulp.gulp        = require('gulp');
        Gulp.browserSync = require('browser-sync').create();
        Gulp.setTasks();
    },
    setTasks: () => {
		Gulp.gulp.task('serve', () => {
			Gulp.browserSync.init({
				server: './'
			})
            Gulp.gulp.watch('./*.html').on('change', Gulp.browserSync.reload)
            Gulp.gulp.watch("./assets/js/*.js").on('change', Gulp.browserSync.reload);
            Gulp.gulp.watch("./assets/css/*.css").on('change', Gulp.browserSync.reload);
		})
		Gulp.gulp.task('default', ['serve'])
    }
}

Gulp.init();