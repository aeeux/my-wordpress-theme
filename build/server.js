module.exports =
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./build/bundling/entry-points/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/bundling/entry-points/server.ts":
/*!***********************************************!*\
  !*** ./build/bundling/entry-points/server.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _frontity_core_src_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @frontity/core/src/server */ \"./node_modules/@frontity/core/src/server/index.ts\");\n/* harmony import */ var _frontity_mars_theme_src_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontity/mars-theme/src/index */ \"./packages/mars-theme/src/index.js\");\n/* harmony import */ var _frontity_wp_source_src_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/wp-source/src/index */ \"./node_modules/@frontity/wp-source/src/index.ts\");\n/* harmony import */ var _frontity_tiny_router_src_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontity/tiny-router/src/index */ \"./node_modules/@frontity/tiny-router/src/index.ts\");\n/* harmony import */ var _frontity_html2react_src_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @frontity/html2react/src/index */ \"./node_modules/@frontity/html2react/src/index.ts\");\nconst packages={frontity__mars_theme_default: _frontity_mars_theme_src_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"],frontity__wp_source_default: _frontity_wp_source_src_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"],frontity__tiny_router_default: _frontity_tiny_router_src_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"],frontity__html2react_default: _frontity_html2react_src_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"]};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_frontity_core_src_server__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({packages}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9idW5kbGluZy9lbnRyeS1wb2ludHMvc2VydmVyLnRzPzBlOTQiXSwibmFtZXMiOlsicGFja2FnZXMiLCJmcm9udGl0eV9fbWFyc190aGVtZV9kZWZhdWx0IiwiZnJvbnRpdHlfX3dwX3NvdXJjZV9kZWZhdWx0IiwiZnJvbnRpdHlfX3Rpbnlfcm91dGVyX2RlZmF1bHQiLCJmcm9udGl0eV9faHRtbDJyZWFjdF9kZWZhdWx0Iiwic2VydmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQSxLQUFNQSxTQUFRLENBQUcsQ0FDZkMsb0dBRGUsQ0FFZkMsa0dBRmUsQ0FHZkMsc0dBSGUsQ0FJZkMsb0dBSmUsQ0FBakIsQ0FPZUMsd0lBQU0sQ0FBQyxDQUFFTCxRQUFGLENBQUQsQ0FBckIiLCJmaWxlIjoiLi9idWlsZC9idW5kbGluZy9lbnRyeS1wb2ludHMvc2VydmVyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNlcnZlciBmcm9tIFwiQGZyb250aXR5L2NvcmUvc3JjL3NlcnZlclwiO1xuaW1wb3J0IGZyb250aXR5X19tYXJzX3RoZW1lX2RlZmF1bHQgZnJvbSBcIkBmcm9udGl0eS9tYXJzLXRoZW1lL3NyYy9pbmRleFwiO1xuaW1wb3J0IGZyb250aXR5X193cF9zb3VyY2VfZGVmYXVsdCBmcm9tIFwiQGZyb250aXR5L3dwLXNvdXJjZS9zcmMvaW5kZXhcIjtcbmltcG9ydCBmcm9udGl0eV9fdGlueV9yb3V0ZXJfZGVmYXVsdCBmcm9tIFwiQGZyb250aXR5L3Rpbnktcm91dGVyL3NyYy9pbmRleFwiO1xuaW1wb3J0IGZyb250aXR5X19odG1sMnJlYWN0X2RlZmF1bHQgZnJvbSBcIkBmcm9udGl0eS9odG1sMnJlYWN0L3NyYy9pbmRleFwiO1xuXG5jb25zdCBwYWNrYWdlcyA9IHtcbiAgZnJvbnRpdHlfX21hcnNfdGhlbWVfZGVmYXVsdCxcbiAgZnJvbnRpdHlfX3dwX3NvdXJjZV9kZWZhdWx0LFxuICBmcm9udGl0eV9fdGlueV9yb3V0ZXJfZGVmYXVsdCxcbiAgZnJvbnRpdHlfX2h0bWwycmVhY3RfZGVmYXVsdCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlcnZlcih7IHBhY2thZ2VzIH0pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./build/bundling/entry-points/server.ts\n");

/***/ }),

/***/ "./node_modules/@frontity/core/src/server/index.ts":
/*!*********************************************************!*\
  !*** ./node_modules/@frontity/core/src/server/index.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nError: ENOENT: no such file or directory, open 'C:\\\\Users\\\\Andre\\\\Desktop\\\\websites\\\\my-wordpress-theme\\\\node_modules\\\\@frontity\\\\core\\\\src\\\\server\\\\index.ts'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AZnJvbnRpdHkvY29yZS9zcmMvc2VydmVyL2luZGV4LnRzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@frontity/core/src/server/index.ts\n");

/***/ }),

/***/ "./node_modules/@frontity/html2react/src/index.ts":
/*!********************************************************!*\
  !*** ./node_modules/@frontity/html2react/src/index.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nError: ENOENT: no such file or directory, open 'C:\\\\Users\\\\Andre\\\\Desktop\\\\websites\\\\my-wordpress-theme\\\\node_modules\\\\@frontity\\\\html2react\\\\src\\\\index.ts'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AZnJvbnRpdHkvaHRtbDJyZWFjdC9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@frontity/html2react/src/index.ts\n");

/***/ }),

/***/ "./node_modules/@frontity/tiny-router/src/index.ts":
/*!*********************************************************!*\
  !*** ./node_modules/@frontity/tiny-router/src/index.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nError: ENOENT: no such file or directory, open 'C:\\\\Users\\\\Andre\\\\Desktop\\\\websites\\\\my-wordpress-theme\\\\node_modules\\\\@frontity\\\\tiny-router\\\\src\\\\index.ts'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AZnJvbnRpdHkvdGlueS1yb3V0ZXIvc3JjL2luZGV4LnRzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@frontity/tiny-router/src/index.ts\n");

/***/ }),

/***/ "./node_modules/@frontity/wp-source/src/index.ts":
/*!*******************************************************!*\
  !*** ./node_modules/@frontity/wp-source/src/index.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nError: ENOENT: no such file or directory, open 'C:\\\\Users\\\\Andre\\\\Desktop\\\\websites\\\\my-wordpress-theme\\\\node_modules\\\\@frontity\\\\wp-source\\\\src\\\\index.ts'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AZnJvbnRpdHkvd3Atc291cmNlL3NyYy9pbmRleC50cy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@frontity/wp-source/src/index.ts\n");

/***/ }),

/***/ "./packages/mars-theme/src/index.js":
/*!******************************************!*\
  !*** ./packages/mars-theme/src/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nError: ENOENT: no such file or directory, open 'C:\\\\Users\\\\Andre\\\\Desktop\\\\websites\\\\my-wordpress-theme\\\\packages\\\\mars-theme\\\\src\\\\index.js'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2luZGV4LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/index.js\n");

/***/ })

/******/ });