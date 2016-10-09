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
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by chenanguo on 2016/9/29.
	 */
	function timerPromise(delay) {
	    return new Promise(function (resolve, reject) {
	        setTimeout(reject(delay), delay);
	    });
	}
	// Promise.race的含义是只要有一个promise对象进入FulFilled或者Rejected状态的话，程序就会停止，且会继续后面的处理逻辑；
	Promise.race([timerPromise(500), timerPromise(1000)]).then(function (value) {
	    console.log(value);
	}).then(function () {
	    return console.log("success");
	}, function () {
	    return console.log("error");
	});

/***/ }
/******/ ]);