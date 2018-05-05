const path = require('path');

const CLIENT_DEST = path.join(__dirname, './client/dist');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const bundleExtractPLugin = new ExtractTextPlugin({filename: 'css/bundle.css'});
const vendorsExtractPlugin = new ExtractTextPlugin({
    filename: 'css/vendors.css', allChunks: true
    });

module.exports = {
    mode: 'development',
    entry: ['./client/src/index.js', './client/src/index.scss'],
    output: { path: CLIENT_DEST, 
        filename: 'bundle.js' 
            },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            }
                        },
                        'postcss-loader',
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.scss$/,
                exclude:/node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                sourceMap: true,
                                importLoaders: 2,
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            }
                        },{
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            // {
            //     test: /\.module.scss$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: [
            //             {
            //                 loader: 'css-loader',
            //                 options: {
            //                     modules: true,
            //                     sourceMap: true,
            //                     importLoaders: 2,
            //                     localIdentName: '[name]__[local]__[hash:base64:5]'
            //                 }
            //             },
            //             'sass-loader'
            //         ]
            //     })
            // },
            // {
            //     test: /^((?!\.module).)*scss$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: [
            //             {
            //                 loader: 'css-loader',
            //                 options: {
            //                     modules: true,
            //                     sourceMap: true,
            //                     importLoaders: 2,
            //                     localIdentName: '[local]'
            //                 }
            //             },
            //             'sass-loader'
            //         ]
            //     })
            // },
            {
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.css$/,
                    /\.scss$/,
                    // /\.module.scss$/
                ],
                loader: require.resolve('file-loader'),
                options: {
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            }
        ]
    },
    node: {
        __dirname: true,
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
    ,
    plugins: [
        new ExtractTextPlugin({ filename: 'index.css', allChunks: true }),
        bundleExtractPLugin
        // new CopyWebpackPlugin([
        //     {from:'client/src/images',to:'images'} 
        // ])
    ]
}