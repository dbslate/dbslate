/**
 * Compiles Tyspescript app to a single Javascript file. The app is built
 * by webpack.
 *
 * example:
 *    # results in dist/sculpt.js
 *    node scripts/compile.js src/sculpt/src/cmd/main.ts dist/sculpt.js
 */
const {spawn} = require('child_process');

const entryFile = process.argv[2];
if (!entryFile) {
  throw new Error('usage: node run compile ENTRYFILE OUTPUTFILE');
}

const outputFile = process.argv[3];
if (!outputFile) {
  throw new Error('usage: node run compile ENTRYFILE OUTPUTFILE');
}

const env = Object.assign({}, process.env, {
  entry_file: entryFile,
  output_file: outputFile,
  ts_config: 'sculpt.tsconfig.json',
});

// inherit uses terminal fd resulting in ansi colors
const wp = spawn('webpack', ['--config', 'scripts/webpackConfig.js'], {env, stdio: 'inherit'});
wp.on('error', err => console.error);
