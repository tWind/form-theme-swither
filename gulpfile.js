const { src, dest, parallel, watch } = require('gulp');

// server
const browserSync = require('browser-sync').create();

// files
const concat = require('gulp-concat');

// scripts
const uglify = require('gulp-uglify-es').default;

// styles
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');

function browsersync() {
  browserSync.init({
    server: { baseDir: '/' },
    notify: false,
    online: true,
  });
}

function scripts() {
  return src([
    'src/js/app.js',
  ])
  .pipe(concat('app.min.js'))
  .pipe(uglify())
  .pipe(dest('build/js/'))
  .pipe(browserSync.stream())
}

function styles() {
  return src('src/less/main.less')
    .pipe(less())
    .pipe(concat('styles.min.css'))
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
    .pipe(cleancss( { level: { 1: { specialComments: 0 } } } ))
    .pipe(dest('build/css/'))
    .pipe(browserSync.stream())
}

function startwatch() {
  watch('src/less', styles);
  watch('src/js', scripts);
  watch('build/*.html').on('change', browserSync.reload);
}

exports.browsersync = browsersync;
exports.styles = styles;
exports.scripts = scripts;

exports.default = parallel(browsersync, startwatch);