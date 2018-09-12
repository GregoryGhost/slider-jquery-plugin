const path = require('path');

module.exports = function(paths){
    return {
        context: path.resolve(__dirname, '../src'), // to automatically find tsconfig.json
        devtool: 'source-map',
        entry: paths.entries,
        output: {
            path: paths.build,
            filename: `./js/[name].js`
        },
        module: {
            rules: [
                {
                    test: /.js/,
                    enforce: "pre",
                    exclude: /node_modules/,
                    use: [{
                        loader: "jshint-loader",
                        options: {
                            camelcase: true,
                            emitErrors: false,
                            failOnHint: false
                        }
                    }]
                },
                {
                    test: /\.js$/,
                    exclude: [
                        /node_modules/
                    ],
                    loader: 'babel-loader',
                    options: {
                        babelrc: path.join(process.cwd(), './babelrc')
                    }
                },
                {
                    test: /\.ts$/,
                    enforce: "pre",
                    loaders: 'tslint-loader',
                    exclude: [
                        /node_modules/,
                    ],
                },
                {
                    test: /\.ts$/,
                    exclude: [
                        /node_modules/
                    ],
                    loader: 'ts-loader'
                }
            ]
        },
        resolve: {
            extensions: ['.config.js', '.web.js', '.ts', '.js'],
            alias: {
                plugins: path.resolve(paths.src, 'plugins')
            }
        },
        stats: {
            // suppress "export not found" warnings about re-exported types
            warningsFilter: /export .* was not found in/
        },
        plugins: paths.htmlPages.concat(paths.plugins),
    }
};
