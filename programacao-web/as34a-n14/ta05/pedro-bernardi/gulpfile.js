const Gulp = {
    gulp        : null,
    browserSync : null,
	sass        : null,
	gcmq		: null,
	wait        : null, 
    init: () => {
        Gulp.gulp        = require('gulp');
        Gulp.browserSync = require('browser-sync').create();
		Gulp.sass        = require('gulp-sass');
		Gulp.gcmq 		 = require('gulp-group-css-media-queries');
		Gulp.wait		 = require('gulp-wait');
        Gulp.setTasks();
    },
    setTasks: () => {
        Gulp.gulp.task('sass', () => {
			return Gulp.gulp.src(['./assets/scss/*.scss'])
				.pipe(Gulp.wait(500))
				.pipe(Gulp.sass())
				.pipe(Gulp.gcmq())
				.pipe(Gulp.gulp.dest('./assets/css'))
				.pipe(Gulp.browserSync.stream())
		})

		Gulp.gulp.task('serve', () => {
			Gulp.browserSync.init({
				server: './'
			})
			Gulp.gulp.watch('./assets/scss/*.scss', ['sass'])
			Gulp.gulp.watch('./*.html').on('change', Gulp.browserSync.reload)
		})

		Gulp.gulp.task('default', ['serve'])
    }
}

Gulp.init();