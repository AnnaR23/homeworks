const {src, dest, task, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const browserSync = require('browser-sync').create();

const PATH = {
    scssSource: './src/**/*.scss',
    htmlSource: './*.html',
    htmlDest: './**/*.html',
    projectDest: './assets',
    jsSource: './src/**/*.js',
}


const plugins = [
    autoprefixer({
        overrideBrowserslist: ['last 5 versions'],
        cascade: false
    }),
    cssnano({preset: 'default'})
];


function scssMin() {
    return src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))

        .pipe(postcss(plugins))
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./assets'));
}


function syncInit() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
}


async function sync() {
    browserSync.reload()
}


function watchFiles() {
    syncInit();
    scssMin();
    watch(PATH.scssSource, scssMin);
    watch(PATH.scssSource, sync);
    watch(PATH.htmlDest, sync);
    watch(PATH.jsSource, sync);
}


task('watch', watchFiles);