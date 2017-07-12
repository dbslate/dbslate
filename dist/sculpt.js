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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultResultsData = function () { return ({
    files: [],
}); };


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__(4);
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
/* 3 */
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
/* 4 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 5 */
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
var fp = __webpack_require__(0);
var jsonschema = __webpack_require__(14);
var minimist = __webpack_require__(15);
var prettier = __webpack_require__(17);
var lib_1 = __webpack_require__(10);
var helpers_1 = __webpack_require__(6);
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
        defFile: 'app.def.json'
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
        var writers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()); })];
                case 1:
                    writers = (_a.sent()).writers;
                    return [2 /*return*/, writers];
            }
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
/* 6 */
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
var fp = __webpack_require__(0);
var fs = __webpack_require__(13);
var mkdirp = __webpack_require__(16);
var promisify = __webpack_require__(12);
var stripJsonComments = __webpack_require__(18);
var log_1 = __webpack_require__(3);
// TODO this is expected to run only in node.. do something to enforce that or something
// TODO doesn't get the correct type, had to manually add
var readFile = promisify(fs.readFile);
exports.loadCommentedJson = function (path) { return __awaiter(_this, void 0, void 0, function () {
    var contents, stripped, parsed;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, readFile(path, { encoding: 'utf8' })];
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__(4);
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(7));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(1);
var validate_1 = __webpack_require__(2);
var log_1 = __webpack_require__(3);
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(8));
__export(__webpack_require__(9));
__export(__webpack_require__(1));
__export(__webpack_require__(2));
var fp = __webpack_require__(0);
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
/* 11 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 11;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("es6-promisify");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("jsonschema");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("minimist");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("mkdirp");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("prettier");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("strip-json-comments");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ })
/******/ ]);
//# sourceMappingURL=sculpt.js.map