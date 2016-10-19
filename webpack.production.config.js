var webpack = require('webpack')

module.exports = {
    devtool: 'source-map',
    entry: {
        main: __dirname + '/src/entry.js'
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/static/dist/',
        filename: 'build.js'
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
            {   test: /\.css$/, 
                loader: 'style-loader!css-loader?sourceMap' 
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
}