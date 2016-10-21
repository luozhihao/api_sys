/* eslint-disable */
const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: './src/entry.js',
    output: {
        path: __dirname + '/dist',
        filename: 'build.js',
        publicPath: '/static/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            { 
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            },
            {   
                test: /\.css$/, 
                loader: 'style-loader!css-loader?sourceMap' 
            },
            {   
                test: /\.json$/, 
                loader: 'json-loader?sourceMap' 
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        })
    ]
}
