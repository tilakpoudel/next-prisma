"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/movies";
exports.ids = ["pages/api/movies"];
exports.modules = {

/***/ "./pages/api/movies.js":
/*!*****************************!*\
  !*** ./pages/api/movies.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  const data = JSON.parse(req.body);\n  const createdMovie = await prisma.movie.create({\n    data\n  });\n  res.status(201).json(createdMovie);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbW92aWVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFKLEVBQWY7QUFFQSxpRUFBZSxPQUFNRSxHQUFOLEVBQVdDLEdBQVgsS0FBbUI7QUFDOUIsUUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osR0FBRyxDQUFDSyxJQUFmLENBQWI7QUFHQSxRQUFNQyxZQUFZLEdBQUcsTUFBTVAsTUFBTSxDQUFDUSxLQUFQLENBQWFDLE1BQWIsQ0FBb0I7QUFDM0NOLElBQUFBO0FBRDJDLEdBQXBCLENBQTNCO0FBSUFELEVBQUFBLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSixZQUFyQjtBQUNILENBVEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmlzbWEtbmV4dC8uL3BhZ2VzL2FwaS9tb3ZpZXMuanM/MzRmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVxLmJvZHkpXG5cbiAgICBcbiAgICBjb25zdCBjcmVhdGVkTW92aWUgPSBhd2FpdCBwcmlzbWEubW92aWUuY3JlYXRlKHtcbiAgICAgICAgZGF0YVxuICAgIH0pXG4gICAgXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oY3JlYXRlZE1vdmllKVxufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJyZXEiLCJyZXMiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsImNyZWF0ZWRNb3ZpZSIsIm1vdmllIiwiY3JlYXRlIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/movies.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/movies.js"));
module.exports = __webpack_exports__;

})();