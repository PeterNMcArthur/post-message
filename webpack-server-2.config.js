const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/app2/index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist2')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist2'),
        port: 3020,
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