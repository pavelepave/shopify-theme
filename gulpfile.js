const gulp = require('gulp');
// Requires the gulp-sass plugin
const sass = require('gulp-sass');
// minify css
const cleanCSS = require('gulp-clean-css');
// auto prefixer
const autoprefixer = require('autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')



gulp.task('sass', function(){
  return gulp.src('src/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass()) // Using gulp-sass
    .pipe(postcss([autoprefixer({
      grid: true, 
      flexbox: true,
    })]))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('theme/assets'))
});


gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('src/scss/*.scss', gulp.series('sass'));
})