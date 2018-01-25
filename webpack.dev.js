const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './src/main.js'],
    resolve: {
        extensions: ['.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: './src',
        port: 8080,
        open: false
    },
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'bundle.js'
    }
}