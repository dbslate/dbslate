const webpack = require('webpack');
const fp = require('path');
const util = require('util');
const nodeExternals = require('webpack-node-externals');
const compact = require('lodash/compact');
const NODE_ENV = process.env.NODE_ENV || 'development';

const entryFile = process.env.entry_file;
const outputFilename = fp.join(
  fp.dirname(entryFile).replace(/^src\//, ''),
  fp.basename(entryFile, fp.extname(entryFile)) + '.js'
);

console.log(`[compile] Compiling ${entryFile} to ${outputFilename}`);

const config = {
  entry: [fp.resolve(entryFile)], // must be filled in
  target: 'node',
  output: {
    path: fp.resolve(__dirname, '../build'), // needs to be at same depth as thing being built
    filename: outputFilename, // must be filled in
    publicPath: fp.resolve(__dirname, '../public'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
    alias: {
      $gen: fp.resolve(__dirname, '../src/gen'),
      '$webdev-genstack': fp.resolve(__dirname, '../src/webdev-genstack'),
      $utils: fp.resolve(__dirname, '../src/utils'),
      $USERPROJECT: fp.resolve(__dirname, '../src/_userProject'),
    },
  },
  module: {
    // preLoaders: [{test: /\.ts|\.tsx$/, loader: 'tslint'}],
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        include: fp.resolve(__dirname, '..'),
      },
    ],
  },
  externals: [nodeExternals()],
  devtool: NODE_ENV === 'development' ? 'sourcemap' : null,
  plugins: compact([
    // Install source maps for each file
    NODE_ENV === 'development' || NODE_ENV === 'production'
      ? new webpack.BannerPlugin({
          banner: 'require("source-map-support").install();',
          raw: true,
          entryOnly: false,
        })
      : null,

    // {
    //   apply(compiler) {
    //     function setModuleConstant(expressionName, fn) {
    //       compiler.parser.plugin('expression ' + expressionName, function() {
    //         this.state.current.addVariable(expressionName, JSON.stringify(fn(this.state.module)));
    //         return true;
    //       });
    //     }

    //     setModuleConstant('__filename', function(module) {
    //       return module.resource;
    //     });

    //     setModuleConstant('__dirname', function(module) {
    //       return module.context;
    //     });
    //   },
    // },
  ]),
};

module.exports = config;
