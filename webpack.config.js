// export a config object, to develop our 

module.exports = {
    //main entry point
    entry: "./main.js",
    output: {
        path: '/',
        filename: 'index.js'
    },
    //create a development server
    devServer: {
        // we want it to reload on the fly:
        inline: true,
        port: 3333,
    },
    //get loader in place
    module : {
        //takes in an array of loaders:
        loaders: [
            {
                //test for files ending with .js:
                test: /\.js$/,
                //exclude node modules:
                exclude: /node_modules/,
                //loader that will be used:
                loader: 'babel',
                //presets that we wiil use using query object:
                query: {
                    presets: ['es2015', 'react']
                } 

            }
        ]
    }
}