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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/ts/index.ts":
/*!*************************!*\
  !*** ./lib/ts/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar action_binder_1 = __webpack_require__(/*! ./ui/event/action-binder */ \"./lib/ts/ui/event/action-binder.ts\");\n// CSS imports\n// require('tachyons/css/tachyons.min.css');\n__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'bootstrap/dist/css/bootstrap.min.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nfunction promisifySetInterval(cb, timeout) {\n    return new Promise(function (resolve, reject) {\n        setInterval(cb(resolve, reject), timeout);\n    });\n}\nwindow.addEventListener('load', function (evt) {\n    /* setupServiceWorker().then(success => {\n      console.log(success);\n    }); */\n    action_binder_1.ActionBinder.bindAll('[data-action]', 'data-action');\n    var headTypesetting = document.querySelector('.head-typesetting');\n    var text = 'Selamat datang';\n    var displayedText = '';\n    var idx = 0;\n    promisifySetInterval(function (resolve, reject) {\n        return function () { };\n        /* return () => {\n          if (idx != text.length) {\n            displayedText += text[idx++];\n            headTypesetting.textContent = displayedText;\n          } else {\n            resolve('done');\n          }\n        }; */\n    }, 100).then(function (success) {\n        return function () { };\n        /* promisifySetInterval((resolve, reject) => {\n          const text = displayedText.split('');\n          return () => {\n            if (text.length > 0) {\n              text.pop();\n              headTypesetting.textContent = text.join('');\n            }\n          };\n        }, 50); */\n    });\n});\n\n\n//# sourceURL=webpack:///./lib/ts/index.ts?");

/***/ }),

/***/ "./lib/ts/ui/event/action-binder.ts":
/*!******************************************!*\
  !*** ./lib/ts/ui/event/action-binder.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar utils_ui_1 = __webpack_require__(/*! ../utils-ui */ \"./lib/ts/ui/utils-ui.ts\");\nvar event_handlers_1 = __webpack_require__(/*! ./event-handlers */ \"./lib/ts/ui/event/event-handlers.ts\");\nvar ActionBinder = /** @class */ (function () {\n    function ActionBinder() {\n    }\n    ActionBinder.bindAll = function (selectorIdentifier, attributeName) {\n        var els = utils_ui_1.$$(selectorIdentifier);\n        if (!els) {\n            return;\n        }\n        els.forEach(function (el) {\n            var attr = el.getAttribute(attributeName);\n            var parsedIndentifier = ActionBinder._parseIdentifier(attr);\n            if (!parsedIndentifier) {\n                return;\n            }\n            el.addEventListener(parsedIndentifier.evt, function (e) {\n                var handler = event_handlers_1.EventHandlers[parsedIndentifier.namespace][parsedIndentifier.handler];\n                if (parsedIndentifier.filter &&\n                    ActionBinder._isValidFilter(parsedIndentifier.filter)) {\n                    ActionBinder._filterHandler(parsedIndentifier.filter, e, handler)();\n                }\n                else {\n                    handler(e);\n                }\n            });\n        });\n    };\n    ActionBinder._isValidFilter = function (filter) {\n        var isValidSelector;\n        try {\n            // @ts-ignore\n            isValidSelector = !!utils_ui_1.$$(filter).length;\n        }\n        catch (_a) {\n            isValidSelector = false;\n        }\n        return isValidSelector;\n    };\n    ActionBinder._filterHandler = function (filter, e, cb) {\n        // filter is a selector\n        return function () {\n            var filteredElements = utils_ui_1.$$(filter);\n            if (filteredElements &&\n                filteredElements.includes(e.target)) {\n                cb(e);\n            }\n        };\n    };\n    ActionBinder._parseIdentifier = function (identifier) {\n        // valid identifiers\n        // event:filter:handlerNamespace:handlerFn\n        // event:handlerNamespace:handlerFn\n        var entities = identifier.split(':');\n        if (!entities) {\n            console.error(\"Invalid identifier string\", identifier);\n            return null;\n        }\n        var evt, filter, namespace, handler;\n        evt = entities[0];\n        /* try {\n          evt = entities[0];\n          \n        } catch (e) {\n          console.error(e);\n          return null;\n        } */\n        try {\n            filter = entities[1];\n            // @ts-ignore\n            document.querySelector(filter).textContent.split('');\n        }\n        catch (e) {\n            if (filter && event_handlers_1.EventHandlers[filter]) {\n                namespace = entities[1];\n                handler = entities[2];\n            }\n            filter = '';\n        }\n        if (!namespace && !handler) {\n            namespace = entities[2];\n            handler = entities[3];\n        }\n        // @ts-ignore\n        return { evt: evt, filter: filter, namespace: namespace, handler: handler };\n    };\n    ActionBinder.boundNodes = [];\n    return ActionBinder;\n}());\nexports.ActionBinder = ActionBinder;\n\n\n//# sourceURL=webpack:///./lib/ts/ui/event/action-binder.ts?");

/***/ }),

/***/ "./lib/ts/ui/event/event-handlers.ts":
/*!*******************************************!*\
  !*** ./lib/ts/ui/event/event-handlers.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.EventHandlers = {};\n// testing\nexports.EventHandlers.EventHandlerBody = {\n    foo: function (e) {\n        alert('Alo!');\n    },\n};\n\n\n//# sourceURL=webpack:///./lib/ts/ui/event/event-handlers.ts?");

/***/ }),

/***/ "./lib/ts/ui/utils-ui.ts":
/*!*******************************!*\
  !*** ./lib/ts/ui/utils-ui.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction $(selector, parent) {\n    if (parent === void 0) { parent = document; }\n    return document.querySelector(selector);\n}\nexports.$ = $;\nfunction $$(selector, parent) {\n    if (parent === void 0) { parent = document; }\n    var els = document.querySelectorAll(selector);\n    return els.length ? Array.from(els) : null;\n}\nexports.$$ = $$;\n\n\n//# sourceURL=webpack:///./lib/ts/ui/utils-ui.ts?");

/***/ })

/******/ });