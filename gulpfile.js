'use strict';

const gulp = require('gulp');

const file = require('gulp-file');
const argv = require('yargs').argv;

const plumber = require('gulp-plumber');
const sass = require("gulp-sass");
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const minifycss = require('gulp-minify-css');

gulp.task('templater', async () => {
  const templater = require( './templater.js');

  if (!argv.path)
    return;

  const bemjson = require(argv.path);
  const fileName = argv.file || 'index.html';

  return file(fileName, templater(bemjson))
     .pipe(gulp.dest('build'));
});

gulp.task('build:css', async () => {
  return gulp.src('src/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('build'))
    //.pipe(csso())
    .pipe(minifycss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build'));
});

gulp.task('build:js', async () => {
  return;
});

gulp.task('build', gulp.series('build:css', 'build:js'));
