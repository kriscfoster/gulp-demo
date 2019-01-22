const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const mocha = require('gulp-mocha');

gulp.task('sass', function() {
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed'}))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp
    .src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'))
    .pipe(browserSync.stream());
});

// Static Server & watching scss/js/html files
gulp.task('serve', gulp.series('sass', function() {
  browserSync.init({
    open: false,
    server: "./"
  });

  gulp.watch('src/scss/**/*.scss',
    gulp.series('sass'));
  gulp.watch('src/js/**/*.js',
    gulp.series('js'));
  gulp.watch("*.html").on('change', browserSync.reload);
}));

gulp.task('default',
  gulp.series('sass', 'js', 'serve'));

gulp.task('test', function() {
	return gulp
    .src(['test/**/*.js'], {read: false})
		.pipe(mocha({reporter: 'list', exit: true}))
		.on('error', console.error)
});

gulp.task('test-watch', function() {
  gulp.watch('fizzBuzz.js', gulp.series('test'));
});
