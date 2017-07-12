require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(16));
__export(__webpack_require__(3));
__export(__webpack_require__(17));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(3));


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__(7);
// TODO is hacky, should probably follow relative path on def tree.
exports.extractRefTypeTitle = function ($ref) {
    return lodash_1.last($ref.split('/')) || '';
};
exports.lookupDef = function (d, $ref) {
    return d.definitions[exports.extractRefTypeTitle($ref)];
};
exports.getActions = function (d) {
    return d.definitions.Action.oneOf.map(function (a) {
        return exports.lookupDef(d, a.$ref || '');
    });
};
// TODO check recursively
// export const inheritsFrom = ($ref: string) => (
//   d: SchemaDefinition,
// ): boolean => !!d.allOf && d.allOf.some(a => a.$ref === $ref);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultResultsData = function () { return ({
    files: [],
}); };


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__(7);
exports.validateWriters = function (writers) {
    for (var _i = 0, writers_1 = writers; _i < writers_1.length; _i++) {
        var w = writers_1[_i];
        if (!w.name) {
            throw new Error("Expected writer(" + w + ") to have a name prop - try exporting it as a named function");
        }
    }
};
exports.validateResults = function (results) {
    for (var _i = 0, _a = results.files; _i < _a.length; _i++) {
        var f = _a[_i];
        if ((lodash_1.last(f.path.split('/')) || '').indexOf('.gen.') === -1) {
            throw new Error("Expected file path " + f.path + " from " + f.writerName + " to have \".gen.\"");
        }
    }
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Simple logger that should work in any env (not preferred for any of them, though)
exports.logger = function (tag) { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (process.env.NODE_ENV === 'test')
        return;
    args.unshift("[" + tag + "]");
    console.log.apply(console, args);
}; };


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("prettier");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname, __filename) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fp = __webpack_require__(2);
var jsonschema = __webpack_require__(27);
var minimist = __webpack_require__(28);
var prettier = __webpack_require__(8);
var lib_1 = __webpack_require__(13);
var helpers_1 = __webpack_require__(10);
// TODO this is a hack, we should be dynamically importing these
var writers_1 = __webpack_require__(18);
function printUsage() {
    // TODO read from package.json
    var version = '0.0.0';
    var usage = "\nsculpt " + version + " - next generation generation\nusage: sculpt [options] dir\n\noptions:\n  ?, help         Shows this screen\n  output-dir      Output directory\n  stack           Name of stack to use\n";
    console.log(usage);
}
/**
 * Parses CLI args.
 *
 * More info: https://github.com/substack/minimist
 */
function parseArgs() {
    var defaults = {
        stack: '$webdev-genstack',
        defFile: 'app.def.json',
    };
    var optionAliases = {
        defFile: ['f', 'def-file'],
        verbose: ['v'],
    };
    var treatAsBools = ['help', 'verbose'];
    var argv = minimist(process.argv.slice(2), {
        alias: optionAliases,
        boolean: treatAsBools,
        default: defaults,
    });
    if (argv.help) {
        printUsage();
        process.exit(0);
    }
    // the sole argument is the directory containing app schema
    var dir = argv._[0] ? argv._[0] : process.env.cwd();
    argv.workingDir = fp.resolve(dir);
    console.log('argv', JSON.stringify(argv, null, 2));
    return argv;
}
var argv = parseArgs();
function buildContext() {
    return __awaiter(this, void 0, void 0, function () {
        var appDefPath, prettierCfgPath, prettierCfg, ctx, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    appDefPath = fp.join(argv.workingDir, argv.defFile);
                    prettierCfgPath = 'config/prettier.json';
                    return [4 /*yield*/, helpers_1.loadCommentedJson(prettierCfgPath)];
                case 1:
                    prettierCfg = _b.sent();
                    _a = {
                        defPath: appDefPath
                    };
                    return [4 /*yield*/, helpers_1.loadCommentedJson(appDefPath)];
                case 2:
                    ctx = (_a.def = _b.sent(),
                        _a.prettierCfg = prettierCfg,
                        _a.outputDir = fp.join(argv.workingDir, '_sculpted'),
                        _a.stack = argv.stack,
                        _a);
                    validate(ctx);
                    return [2 /*return*/, ctx];
            }
        });
    });
}
function printInfo(ctx) {
    helpers_1.log('🗲 gen');
    helpers_1.log('app source', ctx.defPath);
    helpers_1.log('__dirname', __dirname);
    helpers_1.log('__filename', __filename, fp.join(__dirname, ctx.defPath));
}
function validate(ctx) {
    return __awaiter(this, void 0, void 0, function () {
        var baseSchemaPath, baseSchema, validatorResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    baseSchemaPath = fp.resolve(__dirname, '../lib/defs/jsonschema-meta.json');
                    return [4 /*yield*/, helpers_1.loadCommentedJson(baseSchemaPath)];
                case 1:
                    baseSchema = _a.sent();
                    validatorResult = jsonschema.validate(ctx.def, baseSchema);
                    if (validatorResult.errors.length) {
                        throw new Error("Validator error: " + validatorResult.errors[0]);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// The list of writers determines what gets written to the results data
function getWritersList(ctx) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // TODO this should import from compiled stack, we're jumping through hoops
            // to work with dirs as-is
            // console.log('ctx.stack', ctx.stack);
            // const {writers} = await import(ctx.stack);
            return [2 /*return*/, writers_1.writers()];
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var ctx, writers, resultsData, _i, _a, file, finalContents;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, buildContext()];
                case 1:
                    ctx = _b.sent();
                    printInfo(ctx);
                    return [4 /*yield*/, getWritersList(ctx)];
                case 2:
                    writers = _b.sent();
                    resultsData = lib_1.generate(ctx, writers);
                    // write the results to the file system, to fit expected programmer workflow
                    for (_i = 0, _a = resultsData.files; _i < _a.length; _i++) {
                        file = _a[_i];
                        finalContents = file.contents;
                        try {
                            finalContents = prettier.format(file.contents, ctx.prettierCfg);
                        }
                        catch (err) {
                            helpers_1.log("failed to prettify, saving unprettified version: " + err);
                        }
                        helpers_1.saveFile(file.path, finalContents);
                    }
                    // all done
                    helpers_1.log('✔ gen');
                    return [2 /*return*/];
            }
        });
    });
}
main().catch(function (err) {
    helpers_1.log('err', err);
    throw err;
});

/* WEBPACK VAR INJECTION */}.call(exports, "/", "/index.js"))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var fp = __webpack_require__(2);
var fs = __webpack_require__(26);
var mkdirp = __webpack_require__(29);
var promisify = __webpack_require__(25);
var stripJsonComments = __webpack_require__(30);
var log_1 = __webpack_require__(6);
// TODO this is expected to run only in node.. do something to enforce that or something
// TODO doesn't get the correct type, had to manually add
var readFile = promisify(fs.readFile);
exports.loadCommentedJson = function (path) { return __awaiter(_this, void 0, void 0, function () {
    var contents, stripped, parsed;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('loadCommentedJson:path', path);
                return [4 /*yield*/, readFile(path, { encoding: 'utf8' })];
            case 1:
                contents = _a.sent();
                stripped = stripJsonComments(contents);
                parsed = JSON.parse(stripped);
                return [2 /*return*/, parsed];
        }
    });
}); };
function saveFile(filename, contents) {
    exports.log('saving', filename);
    // ensure dir exists
    mkdirp.sync(fp.dirname(filename));
    fs.writeFileSync(filename, contents, {
        encoding: 'utf8',
    });
    exports.log('saved~', filename);
}
exports.saveFile = saveFile;
exports.log = log_1.logger('task:gen');


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(4);
var validate_1 = __webpack_require__(5);
var log_1 = __webpack_require__(6);
var log = log_1.logger('gen');
// TODO consider making this async, or at least allowing writers to use promises
// Writers are reducers, pure functions that return state as a function of,
// in this case, `Writers`. They can return whatever results at their stage of the pipeline.
exports.generate = function (ctx, writers) {
    validate_1.validateWriters(writers);
    return writers.reduce(function (results, writer) {
        log('writing', undefined, writer.name); // TODO the undefined smells
        var writerResults = writer(results, ctx);
        validate_1.validateResults(writerResults);
        // TODO could diff results
        log('wrote~~', undefined, writer.name); // TODO the undefined smells
        return writerResults;
    }, types_1.getDefaultResultsData());
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isJs = function (file) { return !!file.path.match(/^.+\.js$/g); };
exports.isTs = function (file) { return !!file.path.match(/^.+\.(ts|tsx)$/g); };
exports.isJsLike = function (file) { return !!file.path.match(/^.+\.(js|ts|tsx)$/g); };
exports.renderOpenMultilineComment = function (file) {
    return exports.isJsLike(file) ? '/*' : '/*';
};
exports.renderCloseMultilineComment = function (file) {
    return exports.isJsLike(file) ? '*/' : '*/';
};
exports.renderComment = function (file, contents) {
    return ("\n" + exports.renderOpenMultilineComment(file) + "\n" + contents + "\n" + exports.renderCloseMultilineComment(file) + "\n  ").trim();
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(1));
__export(__webpack_require__(11));
__export(__webpack_require__(4));
__export(__webpack_require__(5));
var fp = __webpack_require__(2);
//// TODO should be discovered
// user's working project dir
exports.userProjectDir = function () { return fp.resolve(__dirname, '../_userProject'); };
// TODO this should be package name not path
// user's chosen gen stack
//export const userStack = () => '$webdev-genstack';
//export const userStack = () => '$webdev-genstack';
// path to gen package dir which contains/*.def.json
exports.genPackageDir = function () { return '../../src/gen'; };

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var h = __webpack_require__(12);
exports.writeFileContents = function (ctx, file) {
    var header = h.renderComment(file, ("\n~!! WARNING !!~\n~!! This is an auto-generated file.\n~!! All edits will be lost!\n\n" + ctx.defPath + "\n    |> " + file.writerName + "\n    |> " + file.path + "\n\n~!! This is an auto-generated file.\n~!! All edits will be lost!\n~!! WARNING !!~\n  ").trim());
    var footer = header;
    return ("\n" + header + "\n\n" + file.contents + "\n\n" + footer + "\n  ").trim();
};
function fileWrapperWriter(results, ctx) {
    return __assign({}, results, { files: results.files.map(function (f) { return (__assign({}, f, { contents: exports.writeFileContents(ctx, f) })); }) });
}
exports.fileWrapperWriter = fileWrapperWriter;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(14));


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
`is` is useful for assertions, like in switch case default blocks, eg:
    switch (foo) {
      cases...
      default: is<never>(foo); // compile-time exhaustivity checking! if only there was pattern matching.
    }
*/
exports.is = function (a) { return a; };


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var h = __webpack_require__(0);
var defs_1 = __webpack_require__(1);
/*

This code is really rough - it's a bunch of helpers for TypeScript code generation.
It needs a lot more features and clarity of design.
Most of it should probably be made more generic over the file type and moved to `./helpers.ts.

*/
exports.primitiveTypes = ['string', 'number', 'boolean', 'null', 'undefined', 'object', 'any'];
function renderQmark(prop, propName) {
    return prop.required && prop.required.includes(propName) ? '' : '?';
}
exports.renderQmark = renderQmark;
function renderArrayType(prop) {
    return prop.items && prop.items.$ref ? defs_1.extractRefTypeTitle(prop.items.$ref) : ''; // TODO this is a huge hack
}
exports.renderArrayType = renderArrayType;
function renderTypeUnion(prop, refTypePrefix) {
    if (refTypePrefix === void 0) { refTypePrefix = 't.'; }
    return prop.oneOf ? prop.oneOf.map(function (v) { return renderPropertyType(v, refTypePrefix); }).join(' | ') : '';
}
exports.renderTypeUnion = renderTypeUnion;
function renderEnumType(prop, refTypePrefix, isDeclaration) {
    if (refTypePrefix === void 0) { refTypePrefix = 't.'; }
    if (isDeclaration === void 0) { isDeclaration = false; }
    if (!prop.enum) {
        return '';
    }
    if (!prop.title) {
        return prop.enum.map(function (v) { return "'" + v + "'"; }).join(' | ');
    }
    if (isDeclaration) {
        return ("\n      {\n        " + prop.enum.map(function (v) { return "" + v; }).join(',\n') + "\n      }\n    ").trim();
    }
    return "" + refTypePrefix + prop.title;
}
exports.renderEnumType = renderEnumType;
function renderEnumTypeUnion(prop) {
    return prop.enum ? prop.enum.map(function (v) { return "'" + v + "'"; }).join(' | ') : '';
}
exports.renderEnumTypeUnion = renderEnumTypeUnion;
function renderEnumValues(prop, refTypePrefix) {
    if (refTypePrefix === void 0) { refTypePrefix = 't.'; }
    return prop.enum
        ? prop.enum.map(function (v) { return (prop.title ? "" + refTypePrefix + prop.title + "." + v : "'" + v + "'"); }).join(', ')
        : '';
}
exports.renderEnumValues = renderEnumValues;
function renderPrimitivePropertyType(prop) {
    if (prop.type === 'object') {
        // return prop.type;
        return "\n      {\n        " + renderPropList(prop, undefined, '', renderPropertyPairNameToType) + "\n      }\n    ";
    }
    else {
        return prop.type || '';
    }
}
exports.renderPrimitivePropertyType = renderPrimitivePropertyType;
function renderPropertyType(prop, refTypePrefix, isDeclaration) {
    if (refTypePrefix === void 0) { refTypePrefix = 't.'; }
    if (isDeclaration === void 0) { isDeclaration = false; }
    if (prop.$ref) {
        return prop.value !== undefined // TODO could replace all of this branching with a switch() over a declarative kind
            ? "" + refTypePrefix + defs_1.extractRefTypeTitle(prop.$ref) + "." + prop.value
            : "" + refTypePrefix + defs_1.extractRefTypeTitle(prop.$ref);
    }
    else if (prop.value !== undefined) {
        return "" + JSON.stringify(prop.value);
    }
    else if (prop.type && exports.primitiveTypes.includes(prop.type)) {
        return renderPrimitivePropertyType(prop);
    }
    else if (prop.type === 'array') {
        return renderArrayType(prop) + "[]";
    }
    else if (prop.oneOf) {
        return renderTypeUnion(prop, refTypePrefix);
    }
    else if (prop.enum) {
        return renderEnumType(prop, refTypePrefix, isDeclaration);
    }
    else {
        return "'" + prop.type + "'";
    }
}
exports.renderPropertyType = renderPropertyType;
function renderInterfaceExtendType(prop, refTypePrefix, isDeclaration) {
    if (refTypePrefix === void 0) { refTypePrefix = 't.'; }
    if (isDeclaration === void 0) { isDeclaration = false; }
    return prop.allOf
        ? "extends " + prop.allOf
            .map(function (p) { return renderPropertyType(p, refTypePrefix, isDeclaration); })
            .join(', ')
        : '';
}
exports.renderInterfaceExtendType = renderInterfaceExtendType;
function renderRandomValue(prop, refTypePrefix) {
    if (refTypePrefix === void 0) { refTypePrefix = 't.'; }
    // TODO huge temp hack ...wait that's everything, and it's not temp at all
    if (prop.properties) {
        return ("\n      {\n        " + renderPropList(prop) + "\n      }\n    ").trim();
    }
    else if (prop.$ref) {
        return prop.value !== undefined
            ? "" + refTypePrefix + h.extractRefTypeTitle(prop.$ref) + "." + prop.value // TODO this is hardcoded for enums, or namespacing at least
            : refTypePrefix + "mock" + defs_1.extractRefTypeTitle(prop.$ref) + "()"; // TODO hmm? could do this at gen-time
    }
    else if (prop.value !== undefined) {
        return typeof prop.value === 'string' ? "'" + prop.value + "'" : JSON.stringify(prop.value);
    }
    else if (prop.oneOf) {
        return "sample([" + prop.oneOf
            .map(function (p) { return renderRandomValue(p, refTypePrefix); })
            .join(', ') + "]) as " + (prop.title ? "" + refTypePrefix + prop.title : renderTypeUnion(prop)); // TODO is hack to get around string literal problem from sample
    }
    else if (prop.enum) {
        return "sample([" + renderEnumValues(prop) + "]) as " + renderEnumType(prop); // TODO is hack to get around string literal problem from sample
    }
    else {
        switch (prop.type) {
            case 'string':
                return prop.title === 'Id' ? 'rand.id()' : 'rand.str()'; // TODO refactor
            case 'integer':
                return 'rand.int()';
            case 'number':
                return 'rand.num()';
            case 'object':
                return "{}";
            case 'null':
                return 'null';
            case 'boolean':
                return 'sample([true, false]) as boolean';
            case 'array':
                return "[]";
            default:
                return "'FIXMEtype:" + prop.type + "'";
        }
    }
}
exports.renderRandomValue = renderRandomValue;
function renderPropertyPairNameToValue(prop, propName, parentProp, refTypePrefix) {
    if (refTypePrefix === void 0) { refTypePrefix = 't.'; }
    return propName + ": " + renderRandomValue(prop, refTypePrefix);
}
exports.renderPropertyPairNameToValue = renderPropertyPairNameToValue;
function renderPropertyPairNameToType(prop, propName, parentProp, refTypePrefix) {
    if (refTypePrefix === void 0) { refTypePrefix = 't.'; }
    return "" + propName + renderQmark(parentProp, propName) + ": " + renderPropertyType(prop, refTypePrefix);
}
exports.renderPropertyPairNameToType = renderPropertyPairNameToType;
function renderCallingArgs(prop, propName, parentProp, refTypePrefix) {
    if (refTypePrefix === void 0) { refTypePrefix = 't.'; }
    return renderRandomValue(prop, refTypePrefix);
}
exports.renderCallingArgs = renderCallingArgs;
// TODO callingPropList vs declarationPropList
function renderPropList(prop, separator, refTypePrefix, fn) {
    if (separator === void 0) { separator = ',\n'; }
    if (refTypePrefix === void 0) { refTypePrefix = 't.'; }
    if (fn === void 0) { fn = renderPropertyPairNameToValue; }
    return prop.properties
        ? Object.keys(prop.properties)
            .map(function (propName) {
            // tslint:disable-next-line:no-non-null-assertion
            return fn(prop.properties[propName], propName, prop, refTypePrefix);
        })
            .filter(function (p) { return p; })
            .join(separator)
        : '';
}
exports.renderPropList = renderPropList;
var TypeDeclarationKind;
(function (TypeDeclarationKind) {
    TypeDeclarationKind[TypeDeclarationKind["TypeLiteral"] = 0] = "TypeLiteral";
    TypeDeclarationKind[TypeDeclarationKind["Enum"] = 1] = "Enum";
    TypeDeclarationKind[TypeDeclarationKind["Interface"] = 2] = "Interface";
})(TypeDeclarationKind = exports.TypeDeclarationKind || (exports.TypeDeclarationKind = {}));
// TODO makes me think `SchemaProperty` should be a union type, instead of inferring it
exports.inferTypeDeclarationKind = function (definition) {
    if (definition.oneOf ||
        (definition.type && definition.type !== 'array' && definition.type !== 'object')) {
        return TypeDeclarationKind.TypeLiteral;
    }
    else if (definition.enum) {
        return TypeDeclarationKind.Enum;
    }
    else {
        return TypeDeclarationKind.Interface;
    }
};
function renderTypeDeclaration(definition) {
    // TODO this should be a helper
    var typeDeclarationKind = exports.inferTypeDeclarationKind(definition);
    switch (typeDeclarationKind) {
        case TypeDeclarationKind.TypeLiteral:
            return ("\n        export type " + definition.title + " = " + renderPropertyType(definition, '') + ";\n      ").trim();
        case TypeDeclarationKind.Enum:
            return ("\n        export enum " + definition.title + renderPropertyType(definition, '', true) + ";\n      ").trim();
        case TypeDeclarationKind.Interface:
            return ("\n        export interface " + definition.title + " " + renderInterfaceExtendType(definition, '', false) + " {\n          " + renderPropList(definition, ';\n', '', renderPropertyPairNameToType) + "\n        }\n      ").trim();
        default:
            h.is(typeDeclarationKind);
            throw Error();
    }
}
exports.renderTypeDeclaration = renderTypeDeclaration;
function renderActionCreatorCall(def, refTypePrefix) {
    if (refTypePrefix === void 0) { refTypePrefix = 't.'; }
    return ("\n  " + refTypePrefix + renderActionCreatorName(def) + "(\n    " + renderPropList((def.properties && def.properties.payload) || {}, undefined, refTypePrefix, renderCallingArgs) + "\n  )\n  ").trim();
}
exports.renderActionCreatorCall = renderActionCreatorCall;
function renderPropertiesObjectLiteral(prop, separator) {
    if (separator === void 0) { separator = ',\n'; }
    return prop.type === 'object'
        ? ("\n      {\n        " + ((prop.properties && Object.keys(prop.properties).join(separator)) || '') + "\n      }\n      ").trim()
        : 'null';
}
exports.renderPropertiesObjectLiteral = renderPropertiesObjectLiteral;
var ACTION_SUFFIX = 'Action';
var ACTION_SUFFIX_LENGTH = ACTION_SUFFIX.length;
function renderActionCreatorName(def) {
    return def.title[0].toLowerCase() + def.title.slice(1, def.title.length - ACTION_SUFFIX_LENGTH);
}
exports.renderActionCreatorName = renderActionCreatorName;
function renderActionTypeValue(def, refTypePrefix) {
    if (refTypePrefix === void 0) { refTypePrefix = 't.'; }
    return "" + refTypePrefix + def.title;
}
exports.renderActionTypeValue = renderActionTypeValue;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var writers_1 = __webpack_require__(15);
var tsActionTestWriter_1 = __webpack_require__(19);
var tsActionWriter_1 = __webpack_require__(20);
var tsDefWriter_1 = __webpack_require__(21);
var tsMockWriter_1 = __webpack_require__(22);
var tsReducerTestWriter_1 = __webpack_require__(23);
var tsTypeWriter_1 = __webpack_require__(24);
exports.writers = function () { return [
    tsDefWriter_1.tsDefWriter,
    tsTypeWriter_1.tsTypeWriter,
    tsMockWriter_1.tsMockWriter,
    tsActionWriter_1.tsActionWriter,
    tsActionTestWriter_1.tsActionTestWriter,
    tsReducerTestWriter_1.tsReducerTestWriter,
    writers_1.fileWrapperWriter,
]; };


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var h = __webpack_require__(0);
var defs_1 = __webpack_require__(1);
var writeContents = function (path, def, results) {
    return ("\n    // TODO make these tests more robust - like with snapshot testing\n\n    import * as rand from '$utils/rand';\n    import * as u from '$utils/is';\n    import * as a from './actions.gen';\n    import * as t from './types.gen';\n\n    " + defs_1.getActions(def)
        .map(function (a) {
        return ("\n        it('calls the " + a.title + " creator', () => {\n          const action = " + h.renderActionCreatorCall(a, 'a.') + ";\n          u.is<" + h.renderActionTypeValue(a, 't.') + ">(action);\n        });\n        ").trim();
    })
        .join('\n\n') + "\n  ").trim();
};
function tsActionTestWriter(results, ctx) {
    var path = ctx.outputDir + "/actions.gen.test.ts";
    return __assign({}, results, { files: results.files.concat({
            path: path,
            contents: writeContents(path, ctx.def, results),
            writerName: tsActionTestWriter.name,
        }) });
}
exports.tsActionTestWriter = tsActionTestWriter;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var h = __webpack_require__(0);
var defs_1 = __webpack_require__(1);
// TODO should probably be renamed
var writeContents = function (def) {
    return ("\n  import * as t from './types.gen';\n\n  " + defs_1.getActions(def)
        .map(function (a) {
        return ("\n      export const " + h.renderActionCreatorName(a) + " = (\n        " + h.renderPropList((a.properties && a.properties.payload) || {}, undefined, undefined, function (prop, propName, parentProp) {
            return propName === 'type' ? '' : h.renderPropertyPairNameToType(prop, propName, parentProp);
        }) + "\n      ): t." + a.title + " => ({\n        type: t.ActionType." + a.title + ",\n        " + (a.properties && a.properties.payload
            ? "payload: " + h.renderPropertiesObjectLiteral(a.properties.payload) + ","
            : '') + "\n      })\n      ").trim();
    })
        .join('\n\n') + "\n\n  ").trim();
};
function tsActionWriter(results, ctx) {
    var path = ctx.outputDir + "/actions.gen.ts";
    return __assign({}, results, { files: results.files.concat({
            path: path,
            contents: writeContents(ctx.def),
            writerName: tsActionWriter.name,
        }) });
}
exports.tsActionWriter = tsActionWriter;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var h = __webpack_require__(0);
var prettier = __webpack_require__(8);
var writeContents = function (def, prettierCfg) {
    return ("\n  import {AppDef} from '$sculpt';\n\n  export const " + def.name + "Def: AppDef = {\n    " + Object.keys(def).map(function (d) {
        if (d === 'definitions') {
            return "\n          " + d + ": {\n              " + Object.keys(def[d]).map(function (defName) { return "\n                    " + defName + ": " + JSON.stringify(__assign({}, def[d][defName], { code: {
                    declaration: prettier.format(h.renderTypeDeclaration(def.definitions[defName]), prettierCfg),
                }, title: defName }), null, 2) + "\n              "; }) + "\n          }\n            ";
        }
        else {
            return d + ": " + JSON.stringify(def[d], null, 2);
        }
    }) + "\n  };\n  ").trim();
};
function tsDefWriter(results, ctx) {
    var path = ctx.outputDir + "/def.gen.ts";
    return __assign({}, results, { files: results.files.concat({
            path: path,
            contents: writeContents(ctx.def, ctx.prettierCfg),
            writerName: tsDefWriter.name,
        }) });
}
exports.tsDefWriter = tsDefWriter;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var h = __webpack_require__(0);
var writeContents = function (path, def, results) {
    return ("\n  import {sample} from 'lodash';\n\n  import * as t from './types.gen';\n\n  " + Object.keys(def.definitions)
        .map(function (d) {
        var definition = def.definitions[d];
        return ("\n        export const mock" + definition.title + " = (): t." + d + " => (\n          " + h.renderRandomValue(definition) + "\n        );\n      ").trim();
    })
        .join('\n\n') + "\n  ").trim();
};
function tsMockWriter(results, ctx) {
    var path = ctx.outputDir + "/mocks.gen.ts";
    return __assign({}, results, { files: results.files.concat({
            path: path,
            contents: writeContents(path, ctx.def, results),
            writerName: tsMockWriter.name,
        }) });
}
exports.tsMockWriter = tsMockWriter;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var h = __webpack_require__(0);
var defs_1 = __webpack_require__(1);
var writeContents = function (path, def, results) {
    return ("\n    // TODO make these tests more robust - like with snapshot testing\n    // problem is snapshot testing doesn't play nicely with ids\n\n    import * as rand from '$utils/rand';\n    import * as t from './types.gen';\n\n    import {reducer} from './index';\n\n    " + defs_1.getActions(def)
        .map(function (a) {
        return ("\n        it('applies a " + a.title + " against the store state', () => {\n          const state = reducer(undefined, " + h.renderActionCreatorCall(a) + ");\n          t.is<t.ClientState>(state);\n        });\n        ").trim();
    })
        .join('\n\n') + "\n  ").trim();
};
function tsReducerTestWriter(results, ctx) {
    var path = ctx.outputDir + "/reducer.gen.test.ts";
    return __assign({}, results, { files: results.files.concat({
            path: path,
            contents: writeContents(path, ctx.def, results),
            writerName: tsReducerTestWriter.name,
        }) });
}
exports.tsReducerTestWriter = tsReducerTestWriter;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var h = __webpack_require__(0);
var writeContents = function (path, def, results) {
    return ("\n  " + Object.keys(def.definitions).map(function (d) { return h.renderTypeDeclaration(def.definitions[d]); }).join('\n\n') + "\n  ").trim();
};
function tsTypeWriter(results, ctx) {
    var path = ctx.outputDir + "/types.gen.ts";
    return __assign({}, results, { files: results.files.concat({
            path: path,
            contents: writeContents(path, ctx.def, results),
            writerName: tsTypeWriter.name,
        }) });
}
exports.tsTypeWriter = tsTypeWriter;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("es6-promisify");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("jsonschema");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("minimist");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("mkdirp");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("strip-json-comments");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ })
/******/ ]);
//# sourceMappingURL=sculpt.js.map