const sh = require('shelljs');

// webpackConfig.js below reads entry_file env as the file to compile
// to build/dist/gen.js
process.env.entry_file = 'src/tasks/gen.ts';

sh.exec('webpack --config scripts/webpackConfig.js');
if (sh.error()) process.exit();

sh.exec('node build/dist/gen.js');
