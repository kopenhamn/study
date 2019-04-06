let path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
                //exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    //fallback: "style-loader",
                    use: "css-loader"
                })
                /*use: [
                    'style-loader',
                    'css-loader'
                ]*/
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
};

//module.exports можно настраивать на лету в зависимости от режима mode(production or development)
module.exports = (env, options) => {
    let production = options.mode === 'production';

    //добавляет eval-sourcemap только в режиме dev
    conf.devtool = production
                    ? false
                    : 'eval-sourcemap';

    return conf;
}
