const path = require('path');


module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'js', 'app.js'),
    devServer: {
        port: 8080,
        static: './css'
    },
    
}