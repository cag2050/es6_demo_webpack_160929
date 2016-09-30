/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _export_var = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./export_var.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	console.log("name = " + _export_var.name); /**
	                                            * Created by chenanguo on 2016/9/30.
	                                            */
	// webpack编译es6 module报错，尚不知原因
	/*ERROR in ./es6/import_var.js
	Module not found: Error: a dependency to an ent
	ry point is not allowed
	@ ./es6/import_var.js 3:18-44*/

	console.log("age = " + _export_var.age);

/***/ }
/******/ ]);