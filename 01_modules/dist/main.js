/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/files/multi-export_module.js":
/*!******************************************!*\
  !*** ./src/files/multi-export_module.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"module1_const\": () => /* binding */ module1_const,\n/* harmony export */   \"module1_function\": () => /* binding */ module1_function,\n/* harmony export */   \"MultiExportModuleClass\": () => /* binding */ MultiExportModuleClass\n/* harmony export */ });\nconsole.log('multi export module loaded');\r\n\r\nconst module1_const = 'multi export module'\r\nfunction module1_function () {\r\n    console.log('module_function');\r\n}\r\nclass MultiExportModuleClass {\r\n    constructor() {\r\n\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://modules/./src/files/multi-export_module.js?");

/***/ }),

/***/ "./src/files/no_module.js":
/*!********************************!*\
  !*** ./src/files/no_module.js ***!
  \********************************/
/***/ (() => {

eval("console.log('no module loaded');\r\n// эту переменную нигде кроме текущего модуля не видно\r\nvar innerVar = 12;\r\n// в глобальный scope (window) все таки можно писать\r\nglobalScopeVar = 13;\n\n//# sourceURL=webpack://modules/./src/files/no_module.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _files_multi_export_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./files/multi-export_module.js */ \"./src/files/multi-export_module.js\");\n/* harmony import */ var _files_no_module_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./files/no_module.js */ \"./src/files/no_module.js\");\n/* harmony import */ var _files_no_module_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_files_no_module_js__WEBPACK_IMPORTED_MODULE_1__);\n// 1. импортируем все что помечено как export\r\n\r\nconsole.log('import all api from module:', _files_multi_export_module_js__WEBPACK_IMPORTED_MODULE_0__);\r\n\r\n// 2. импортируем частично частично (модуль второй раз подгружаться не будет)\r\n\r\n\r\nconsole.log('import partial api from module', _files_multi_export_module_js__WEBPACK_IMPORTED_MODULE_0__.module1_const, _files_multi_export_module_js__WEBPACK_IMPORTED_MODULE_0__.module1_function);\r\nconsole.log('executing function from module:',(0,_files_multi_export_module_js__WEBPACK_IMPORTED_MODULE_0__.module1_function)());\r\n\r\n// 3. из js файла, который ничего не экспортирует, пробуем получить данные\r\n// выполняется только один раз, доступа к локальным переменным в no_module.js нет\r\n\r\n\r\n\r\nconsole.log('import from no module:', (_files_no_module_js__WEBPACK_IMPORTED_MODULE_1___default()));\r\nconsole.log('import from no module v2:', _files_no_module_js__WEBPACK_IMPORTED_MODULE_1__);\r\n// window.globalScopeVar объявлена в no_module.js\r\nconsole.log('var from global scope:', window.globalScopeVar);\r\n\n\n//# sourceURL=webpack://modules/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;