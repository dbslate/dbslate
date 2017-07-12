/**
 * Compiles Tyspescript app to a single Javascript file. The app is built
 * by webpack.
 *
 * example:
 *    # results in build/sculpt/src/cmd/main.js
 *    node scripts/compile.js src/sculpt/src/cmd/main.ts
 */
const {spawn} = require('child_process');

const entryFile = process.argv[2];
if (!entryFile) {
  throw new Error('usage: node run compile ENTRYFILE');
}

const env = Object.assign({}, process.env, {
  entry_file: entryFile,
});

// inherit uses terminal fd resulting in ansi colors
const wp = spawn('webpack', ['--config', 'scripts/webpackConfig.js'], {env, stdio: 'inherit'});
wp.on('error', err => console.error);
