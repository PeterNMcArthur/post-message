const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/app1/index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist1')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist1'),
        port: 3010,
        compress: false,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    { loader: 'babel-loader', }
                ],
            },
            {
                test: /\.(css|sass)$/,
                oneOf: [
                    {
                        resourceQuery: /external/,
                        use: [
                            { loader: 'style-loader' },
                            { loader: 'css-loader' }
                        ],
                    },
                    {
                        use: [
                            { loader: 'style-loader' },
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
                                }
                            }
                        ],
                    }
                ],
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)$/,
                use: [
                    { loader: 'file-loader', }
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/public/index.html"
        })
    ]
};