/*

    npm run gen

NOTE! Any changes to this file must be followed by a manual `npm run build:sculpt`.
TODO need better workflow

*/

import * as fp from 'path';
import * as jsonschema from 'jsonschema';
import * as minimist from 'minimist';
import * as prettier from 'prettier';

import {GenCtx, generate} from '../lib';
import {loadCommentedJson, log, saveFile} from './helpers';

import {Writer} from '../lib/types';

/**
 * Parses CLI args.
 *
 * More info: https://github.com/substack/minimist
 */
function parseArgs(): minimist.ParsedArgs {
  // TODO read from package.json
  const version = '0.0.0';
  const usage = `
sculpt ${version} - next generation generation
usage: sculpt [options]

options:
  ?, help         Shows this screen
  output-dir      Output directory
  stack           Name of stack to use
`;
  const defaults = {
    baseDir: process.env.cwd(),
    outputDir: process.env.cwd(),
    stack: '$webdev-genstack',
    defFile: 'defs/app.def.json'
  };
  const optionAliases = {
    defFile: ['f', 'def-file'],
    outputDir: ['d', 'output-dir'],
    verbose: ['v'],
  };
  const treatAsBools = ['help', 'verbose'];

  const argv = minimist(process.argv.slice(2), {
    alias: optionAliases,
    boolean: treatAsBools,
    default: defaults,
  });
  if (argv.help) {
    console.log(usage);
    process.exit(0);
  }
  return argv;
}

const argv = parseArgs();

async function buildContext(): Promise<GenCtx> {
  // TODO config/env
  const appDefPath = fp.join(argv.baseDir, argv.defFile);
  // TODO not sure if this should be part of GenCtx
  const prettierCfgPath = 'config/prettier.json';

  const prettierCfg = await loadCommentedJson(prettierCfgPath);

  // Load the app definition and generate some code
  const ctx = {
    defPath: appDefPath,
    def: await loadCommentedJson(appDefPath),
    prettierCfg,
    outputDir: argv.outputDir,
    stack: argv.stack,
  };

  validate(ctx);
  return ctx;
}

function printInfo(ctx: GenCtx): void {
  log('🗲 gen');
  log('app source', ctx.defPath);
  log('__dirname', __dirname);
  log('__filename', __filename, fp.join(__dirname, ctx.defPath));
}

async function validate(ctx: GenCtx): Promise<void> {
  // This validation step is not very useful at the moment,
  // but it can be expanded to better validate the definition file
  // by editing the `baseSchema` JSON file directly.
  const baseSchemaPath = fp.resolve(__dirname, '../lib/defs/jsonschema-meta.json');
  const baseSchema = await loadCommentedJson(baseSchemaPath);
  const validatorResult = jsonschema.validate(ctx.def, baseSchema);
  if (validatorResult.errors.length) {
    throw new Error(`Validator error: ${validatorResult.errors[0]}`);
  }
}

// The list of writers determines what gets written to the results data
async function getWritersList(ctx: GenCtx): Promise<Writer[]> {
  const {writers} = await import(ctx.stack);
  return writers;
}

async function main(): Promise<void> {
  const ctx = await buildContext();
  printInfo(ctx);

  const writers = await getWritersList(ctx);

  // `gen.generate` is a pure function - is does not perform any io actions or mutate anything external
  const resultsData = generate(ctx, writers);

  // write the results to the file system, to fit expected programmer workflow
  for (const file of resultsData.files) {
    let finalContents = file.contents;
    try {
      finalContents = prettier.format(file.contents, ctx.prettierCfg);
    } catch (err) {
      log(`failed to prettify, saving unprettified version: ${err}`);
    }
    saveFile(file.path, finalContents);
  }

  // all done
  log('✔ gen');
}

main().catch(err => {
  log('err', err);
  throw err;
});
