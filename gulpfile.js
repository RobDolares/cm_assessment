const gulp = require('gulp'),
      sass = require('gulp-sass'),
      postcss = require('gulp-postcss'),
      browserSync = require('browser-sync'),
      autoprefixer = require('autoprefixer'),
      cssnano = require('cssnano'),
      sourcemaps = require('gulp-sourcemaps');


//build paths

const paths = {
  styles: {
    src : 'src/scss/**/*.scss',
    dest : 'src/css'
  },
  html: {
    src: 'src/**/*.html'
  }
};


// Compile logic

function style(){
  return(
    gulp
        //source
      .src(paths.styles.src)
      .pipe(sourcemaps.init())
      .pipe(sass()).on('error', sass.logError)

      .pipe(postcss([autoprefixer(), cssnano()]))

      .pipe(sourcemaps.write())

        //destination
      .pipe(gulp.dest(paths.styles.dest))

      .pipe(browserSync.stream())
  )
}

// Setup Watchers

function watch(){
  browserSync.init({
    server: './src'
  })

  gulp.watch([paths.styles.src], style);
  gulp.watch([paths.html.src]).on('change', browserSync.reload);
}

gulp.task('default', gulp.parallel(style, watch));
