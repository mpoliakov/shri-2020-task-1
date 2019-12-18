'use strict';

const gulp = require('gulp');

const file = require('gulp-file');
const argv = require('yargs').argv;
const autoprefixer = require('autoprefixer');

const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const csso = require('gulp-csso');

const babelify = require('babelify');
const browserify = require('browserify');
const uglify = require('gulp-uglify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');

const server = require('browser-sync').create();

gulp.task('templater', async () => {
  const templater = require( './templater.js');

  if (!argv.path)
    return;

  const bemjson = require(argv.path);
  const fileName = argv.file || 'index.html';

  return file(fileName, templater(bemjson))
     .pipe(gulp.dest('build'));
});
/*
Example:
gulp templater --path './assets/pages/index.json' --file 'index_content.html'
gulp templater --path './assets/pages/product.json' --file product_content.html'
 */

gulp.task('build:css', async () => {
  return gulp.src('src/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('build'))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build'));
});

gulp.task('copy:images', async () => {
  return gulp.src('src/**/*.{svg,jpg,png}')
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('build/img'));
});

gulp.task('build:js', async () => {
  return browserify({
    entries: ['src/script.js']
  })
    .transform(babelify.configure({
      presets : ['@babel/preset-env']
    }))
    .bundle()
    .pipe(source("script.js"))
    .pipe(gulp.dest('build'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(rename('script.min.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('build', gulp.series('build:css', 'copy:images', 'build:js'));

gulp.task('refresh', async (done) => {
  server.reload();
  done();
});

gulp.task('server', async () => {
  server.init({
    server: './build',
    startPath: '/index.html',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('src/**/*.scss', gulp.series('build:css', 'refresh'));
  gulp.watch('src/**/*.js', gulp.series('build:js', 'refresh'));
});

gulp.task('start', gulp.series('build', 'server'));

