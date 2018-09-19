const path = require('path');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const css = require('./webpack/css');
const stylus = require('./webpack/stylus');
const images = require('./webpack/images');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const fonts = require('./webpack/fonts');
const tsBabel = require('./webpack/typescript-babel');
const webpack = require('webpack');
const getHtmlPages = require('./webpack/helpers');

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'bin'),
};

const POINTS = {
    build: PATHS.build,
    src: PATHS.source,
    htmlFileName: 'samples-slider-page',
    chunks: ['samples-slider-page', 'common'],
    entries: {
        'samples-slider-page': path.join(PATHS.source,
            './entry-point.js')
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    htmlPages: getHtmlPages(path.join(PATHS.source, 'pages'))
};

const common = merge([
    tsBabel(POINTS),
    pug(),
    stylus(),
    images(),
    fonts()
]);

module.exports = function(env) {
    if (env === 'production') {
        return merge([
            common,
            extractCSS(),
            uglifyJS()
        ])
    }
    if (env === 'develop') {
        return merge([
            common,
            css()
        ])
    }
}
