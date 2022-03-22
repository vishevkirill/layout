const gulp = require('gulp');
const del = require('del');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

const clean = () => {
    return del('build');
};

const js = () => {
    return gulp.src(['source/js/main.js'])
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest('build/js'));
};

const build = gulp.series(clean, svgo, copy, css, js, html, optimizeImages);

exports.build = build;
