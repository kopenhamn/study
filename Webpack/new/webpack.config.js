let path = require('path')

let conf = {
    //entry:'./src/index.js',
    output: {
        //path: path.resolve(__dirname, './dist'),
        //filename: 'main.js',
        publicPath: 'dist/' //path for server without dist folder
    }
};

module.exports = conf;
