const path = require('path');

const CLIENT_DEST = path.join(__dirname, './client/dist');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const bundleExtractPlugin = new ExtractTextPlugin({filename: 'css/bundle.css'});
const vendorsExtractPlugin = new ExtractTextPlugin({
    filename: 'css/vendors.css', allChunks: true
    });
const svgExtractPlugin = new ExtractTextPlugin({
    filename: 'css/devicon.css', allChunks: true
});

const iconExtractPlugin = new ExtractTextPlugin({
    filename: 'icons/svg',
    allChunks: true
})

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
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader'
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                use:[ 'url-loader?limit=100000', 'file-loader'] 
            },
            {
                test: /\.svg$/,
                use: iconExtractPlugin.extract({
                    use: [
                        {
                        loader: "babel-loader"
                        },
                        {
                        loader: "react-svg-loader",
                        options: {
                            jsx: true // true outputs JSX tags
                        }
                        },
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 100000,
                                mimetype: 'image/svg'
                            }
                        },
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[path][name].[ext]'
                            }
                        }
                    ]    
                })

              },
              {
                test: /\.inline\.svg$/,
                loader: require.resolve('svg-react-loader')
              },
            {
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.css$/,
                    /\.scss$/,
                    /\.svg$/,
                    /\.(png|woff|woff2|eot|ttf|svg)$/,
                    /\.(eot|svg|ttf|woff|woff2)$/
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
        bundleExtractPlugin
        // svgExtractPlugin
        // new CopyWebpackPlugin([
        //     {from:'client/src/images',to:'images'} 
        // ])
    ]
}