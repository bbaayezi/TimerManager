const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', './src/TimerManager.js'],
    resolve: {extensions: ['.js', '.json']},
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'TimerManager.min.js'
    }
}