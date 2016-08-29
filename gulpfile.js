var gulp = require('gulp'),
    browserSync = require('browser-sync');
    sass = require('gulp-sass');

gulp.task('browserSync', function() {
  browserSync.init({
  	port:3306,
  	proxy:'localhost/yinyin-anchor',

  })
})

gulp.task('sass', function(){
	return gulp.src('themes/shannon/scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('themes/shannon/css'))
	.pipe(browserSync.reload({
		stream: true
	}))
});


gulp.task('watch', ['browserSync'], function(){
	gulp.watch('themes/shannon/scss/*.scss', ['sass']);
	gulp.watch('themes/shannon/**/*.php', browserSync.reload);
	gulp.watch('themes/shannon/js/*.js', browserSync.reload)
});



