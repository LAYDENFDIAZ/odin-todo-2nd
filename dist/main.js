/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Reset margins and paddings for consistency */\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Arial\", sans-serif; /* A more readable font */\n  background-color: #f0f4f8; /* A softer background color */\n}\n\n/* Main content styling */\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 100vh;\n  padding: 20px;\n}\n\n/* Common styles for headings */\nh1 {\n  text-align: center;\n  color: #333;\n  margin-bottom: 20px;\n}\n\n/* Styling for forms and their headings */\n.form,\n.form-heading,\n.todos-heading {\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  padding: 15px;\n  margin-bottom: 20px;\n  width: 80%;\n  max-width: 500px;\n  background-color: #fff;\n}\n\n/* Projects section styling */\n.projects {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 15px;\n  padding: 15px;\n  width: 100%;\n}\n\n/* Card styling within projects */\n.projects .card {\n  background-color: #68a2ec;\n  color: #333;\n  text-align: center;\n  min-height: 200px;\n  padding: 10px;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  transition: transform 0.3s ease;\n}\n\n.projects .card:hover {\n  transform: scale(1.03);\n}\n\n/* Common button styling */\nbutton {\n  padding: 10px 15px;\n  border: none;\n  border-radius: 5px;\n  color: white;\n  background-color: #007bff;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\nbutton:hover {\n  background-color: #0056b3;\n}\n\n/* Specific styles for add-todo button */\n.add-todo-button {\n  margin-top: 40px;\n  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);\n}\n\n/* Styles for checklist and todo list */\n.todo-ul,\n.check-list-label {\n  list-style-type: none;\n  padding: 0;\n}\n\n.todo-ul li {\n  background-color: #f9f9f9;\n  margin: 5px 0;\n  border: 1px solid #ddd;\n  padding: 8px;\n  border-radius: 4px;\n}\n\n/* Responsive Design */\n@media (max-width: 768px) {\n  .content {\n    padding: 10px;\n  }\n\n  .form,\n  .form-heading,\n  .todos-heading {\n    width: 100%;\n  }\n\n  .projects {\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo-2nd/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo-2nd/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo-2nd/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://odin-todo-2nd/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n  var number = Number(dirtyNumber);\n  if (isNaN(number)) {\n    return number;\n  }\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://odin-todo-2nd/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),\n/* harmony export */   daysInYear: () => (/* binding */ daysInYear),\n/* harmony export */   maxTime: () => (/* binding */ maxTime),\n/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),\n/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),\n/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),\n/* harmony export */   minTime: () => (/* binding */ minTime),\n/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),\n/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),\n/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),\n/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),\n/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),\n/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),\n/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),\n/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),\n/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),\n/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),\n/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)\n/* harmony export */ });\n/**\n * Days in 1 week.\n *\n * @name daysInWeek\n * @constant\n * @type {number}\n * @default\n */\nvar daysInWeek = 7;\n\n/**\n * Days in 1 year\n * One years equals 365.2425 days according to the formula:\n *\n * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.\n * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days\n *\n * @name daysInYear\n * @constant\n * @type {number}\n * @default\n */\nvar daysInYear = 365.2425;\n\n/**\n * Maximum allowed time.\n *\n * @name maxTime\n * @constant\n * @type {number}\n * @default\n */\nvar maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;\n\n/**\n * Milliseconds in 1 minute\n *\n * @name millisecondsInMinute\n * @constant\n * @type {number}\n * @default\n */\nvar millisecondsInMinute = 60000;\n\n/**\n * Milliseconds in 1 hour\n *\n * @name millisecondsInHour\n * @constant\n * @type {number}\n * @default\n */\nvar millisecondsInHour = 3600000;\n\n/**\n * Milliseconds in 1 second\n *\n * @name millisecondsInSecond\n * @constant\n * @type {number}\n * @default\n */\nvar millisecondsInSecond = 1000;\n\n/**\n * Minimum allowed time.\n *\n * @name minTime\n * @constant\n * @type {number}\n * @default\n */\nvar minTime = -maxTime;\n\n/**\n * Minutes in 1 hour\n *\n * @name minutesInHour\n * @constant\n * @type {number}\n * @default\n */\nvar minutesInHour = 60;\n\n/**\n * Months in 1 quarter\n *\n * @name monthsInQuarter\n * @constant\n * @type {number}\n * @default\n */\nvar monthsInQuarter = 3;\n\n/**\n * Months in 1 year\n *\n * @name monthsInYear\n * @constant\n * @type {number}\n * @default\n */\nvar monthsInYear = 12;\n\n/**\n * Quarters in 1 year\n *\n * @name quartersInYear\n * @constant\n * @type {number}\n * @default\n */\nvar quartersInYear = 4;\n\n/**\n * Seconds in 1 hour\n *\n * @name secondsInHour\n * @constant\n * @type {number}\n * @default\n */\nvar secondsInHour = 3600;\n\n/**\n * Seconds in 1 minute\n *\n * @name secondsInMinute\n * @constant\n * @type {number}\n * @default\n */\nvar secondsInMinute = 60;\n\n/**\n * Seconds in 1 day\n *\n * @name secondsInDay\n * @constant\n * @type {number}\n * @default\n */\nvar secondsInDay = secondsInHour * 24;\n\n/**\n * Seconds in 1 week\n *\n * @name secondsInWeek\n * @constant\n * @type {number}\n * @default\n */\nvar secondsInWeek = secondsInDay * 7;\n\n/**\n * Seconds in 1 year\n *\n * @name secondsInYear\n * @constant\n * @type {number}\n * @default\n */\nvar secondsInYear = secondsInDay * daysInYear;\n\n/**\n * Seconds in 1 month\n *\n * @name secondsInMonth\n * @constant\n * @type {number}\n * @default\n */\nvar secondsInMonth = secondsInYear / 12;\n\n/**\n * Seconds in 1 quarter\n *\n * @name secondsInQuarter\n * @constant\n * @type {number}\n * @default\n */\nvar secondsInQuarter = secondsInMonth * 3;\n\n//# sourceURL=webpack://odin-todo-2nd/./node_modules/date-fns/esm/constants/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ parseISO)\n/* harmony export */ });\n/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ \"./node_modules/date-fns/esm/constants/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n\n\n\n/**\n * @name parseISO\n * @category Common Helpers\n * @summary Parse ISO string\n *\n * @description\n * Parse the given string in ISO 8601 format and return an instance of Date.\n *\n * Function accepts complete ISO 8601 formats as well as partial implementations.\n * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601\n *\n * If the argument isn't a string, the function cannot parse the string or\n * the values are invalid, it returns Invalid Date.\n *\n * @param {String} argument - the value to convert\n * @param {Object} [options] - an object with options.\n * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2\n *\n * @example\n * // Convert string '2014-02-11T11:30:30' to date:\n * const result = parseISO('2014-02-11T11:30:30')\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert string '+02014101' to date,\n * // if the additional number of digits in the extended year format is 1:\n * const result = parseISO('+02014101', { additionalDigits: 1 })\n * //=> Fri Apr 11 2014 00:00:00\n */\nfunction parseISO(argument, options) {\n  var _options$additionalDi;\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);\n  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {\n    throw new RangeError('additionalDigits must be 0, 1 or 2');\n  }\n  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {\n    return new Date(NaN);\n  }\n  var dateStrings = splitDateString(argument);\n  var date;\n  if (dateStrings.date) {\n    var parseYearResult = parseYear(dateStrings.date, additionalDigits);\n    date = parseDate(parseYearResult.restDateString, parseYearResult.year);\n  }\n  if (!date || isNaN(date.getTime())) {\n    return new Date(NaN);\n  }\n  var timestamp = date.getTime();\n  var time = 0;\n  var offset;\n  if (dateStrings.time) {\n    time = parseTime(dateStrings.time);\n    if (isNaN(time)) {\n      return new Date(NaN);\n    }\n  }\n  if (dateStrings.timezone) {\n    offset = parseTimezone(dateStrings.timezone);\n    if (isNaN(offset)) {\n      return new Date(NaN);\n    }\n  } else {\n    var dirtyDate = new Date(timestamp + time);\n    // js parsed string assuming it's in UTC timezone\n    // but we need it to be parsed in our timezone\n    // so we use utc values to build date in our timezone.\n    // Year values from 0 to 99 map to the years 1900 to 1999\n    // so set year explicitly with setFullYear.\n    var result = new Date(0);\n    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());\n    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());\n    return result;\n  }\n  return new Date(timestamp + time + offset);\n}\nvar patterns = {\n  dateTimeDelimiter: /[T ]/,\n  timeZoneDelimiter: /[Z ]/i,\n  timezone: /([Z+-].*)$/\n};\nvar dateRegex = /^-?(?:(\\d{3})|(\\d{2})(?:-?(\\d{2}))?|W(\\d{2})(?:-?(\\d{1}))?|)$/;\nvar timeRegex = /^(\\d{2}(?:[.,]\\d*)?)(?::?(\\d{2}(?:[.,]\\d*)?))?(?::?(\\d{2}(?:[.,]\\d*)?))?$/;\nvar timezoneRegex = /^([+-])(\\d{2})(?::?(\\d{2}))?$/;\nfunction splitDateString(dateString) {\n  var dateStrings = {};\n  var array = dateString.split(patterns.dateTimeDelimiter);\n  var timeString;\n\n  // The regex match should only return at maximum two array elements.\n  // [date], [time], or [date, time].\n  if (array.length > 2) {\n    return dateStrings;\n  }\n  if (/:/.test(array[0])) {\n    timeString = array[0];\n  } else {\n    dateStrings.date = array[0];\n    timeString = array[1];\n    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {\n      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];\n      timeString = dateString.substr(dateStrings.date.length, dateString.length);\n    }\n  }\n  if (timeString) {\n    var token = patterns.timezone.exec(timeString);\n    if (token) {\n      dateStrings.time = timeString.replace(token[1], '');\n      dateStrings.timezone = token[1];\n    } else {\n      dateStrings.time = timeString;\n    }\n  }\n  return dateStrings;\n}\nfunction parseYear(dateString, additionalDigits) {\n  var regex = new RegExp('^(?:(\\\\d{4}|[+-]\\\\d{' + (4 + additionalDigits) + '})|(\\\\d{2}|[+-]\\\\d{' + (2 + additionalDigits) + '})$)');\n  var captures = dateString.match(regex);\n  // Invalid ISO-formatted year\n  if (!captures) return {\n    year: NaN,\n    restDateString: ''\n  };\n  var year = captures[1] ? parseInt(captures[1]) : null;\n  var century = captures[2] ? parseInt(captures[2]) : null;\n\n  // either year or century is null, not both\n  return {\n    year: century === null ? year : century * 100,\n    restDateString: dateString.slice((captures[1] || captures[2]).length)\n  };\n}\nfunction parseDate(dateString, year) {\n  // Invalid ISO-formatted year\n  if (year === null) return new Date(NaN);\n  var captures = dateString.match(dateRegex);\n  // Invalid ISO-formatted string\n  if (!captures) return new Date(NaN);\n  var isWeekDate = !!captures[4];\n  var dayOfYear = parseDateUnit(captures[1]);\n  var month = parseDateUnit(captures[2]) - 1;\n  var day = parseDateUnit(captures[3]);\n  var week = parseDateUnit(captures[4]);\n  var dayOfWeek = parseDateUnit(captures[5]) - 1;\n  if (isWeekDate) {\n    if (!validateWeekDate(year, week, dayOfWeek)) {\n      return new Date(NaN);\n    }\n    return dayOfISOWeekYear(year, week, dayOfWeek);\n  } else {\n    var date = new Date(0);\n    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {\n      return new Date(NaN);\n    }\n    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));\n    return date;\n  }\n}\nfunction parseDateUnit(value) {\n  return value ? parseInt(value) : 1;\n}\nfunction parseTime(timeString) {\n  var captures = timeString.match(timeRegex);\n  if (!captures) return NaN; // Invalid ISO-formatted time\n\n  var hours = parseTimeUnit(captures[1]);\n  var minutes = parseTimeUnit(captures[2]);\n  var seconds = parseTimeUnit(captures[3]);\n  if (!validateTime(hours, minutes, seconds)) {\n    return NaN;\n  }\n  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;\n}\nfunction parseTimeUnit(value) {\n  return value && parseFloat(value.replace(',', '.')) || 0;\n}\nfunction parseTimezone(timezoneString) {\n  if (timezoneString === 'Z') return 0;\n  var captures = timezoneString.match(timezoneRegex);\n  if (!captures) return 0;\n  var sign = captures[1] === '+' ? -1 : 1;\n  var hours = parseInt(captures[2]);\n  var minutes = captures[3] && parseInt(captures[3]) || 0;\n  if (!validateTimezone(hours, minutes)) {\n    return NaN;\n  }\n  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);\n}\nfunction dayOfISOWeekYear(isoWeekYear, week, day) {\n  var date = new Date(0);\n  date.setUTCFullYear(isoWeekYear, 0, 4);\n  var fourthOfJanuaryDay = date.getUTCDay() || 7;\n  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;\n  date.setUTCDate(date.getUTCDate() + diff);\n  return date;\n}\n\n// Validation functions\n\n// February is null to handle the leap year (using ||)\nvar daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];\nfunction isLeapYearIndex(year) {\n  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;\n}\nfunction validateDate(year, month, date) {\n  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));\n}\nfunction validateDayOfYearDate(year, dayOfYear) {\n  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);\n}\nfunction validateWeekDate(_year, week, day) {\n  return week >= 1 && week <= 53 && day >= 0 && day <= 6;\n}\nfunction validateTime(hours, minutes, seconds) {\n  if (hours === 24) {\n    return minutes === 0 && seconds === 0;\n  }\n  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;\n}\nfunction validateTimezone(_hours, minutes) {\n  return minutes >= 0 && minutes <= 59;\n}\n\n//# sourceURL=webpack://odin-todo-2nd/./node_modules/date-fns/esm/parseISO/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name startOfDay\n * @category Day Helpers\n * @summary Return the start of a day for the given date.\n *\n * @description\n * Return the start of a day for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @returns {Date} the start of a day\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // The start of a day for 2 September 2014 11:55:00:\n * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 00:00:00\n */\nfunction startOfDay(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://odin-todo-2nd/./node_modules/date-fns/esm/startOfDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfToday/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfToday/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfToday)\n/* harmony export */ });\n/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../startOfDay/index.js */ \"./node_modules/date-fns/esm/startOfDay/index.js\");\n\n/**\n * @name startOfToday\n * @category Day Helpers\n * @summary Return the start of today.\n * @pure false\n *\n * @description\n * Return the start of today.\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * @returns {Date} the start of today\n *\n * @example\n * // If today is 6 October 2014:\n * const result = startOfToday()\n * //=> Mon Oct 6 2014 00:00:00\n */\nfunction startOfToday() {\n  return (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Date.now());\n}\n\n//# sourceURL=webpack://odin-todo-2nd/./node_modules/date-fns/esm/startOfToday/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument);\n\n  // Clone the date\n  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(argument) === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\");\n      // eslint-disable-next-line no-console\n      console.warn(new Error().stack);\n    }\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://odin-todo-2nd/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo-2nd/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo-2nd/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo-2nd/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo-2nd/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo-2nd/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo-2nd/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo-2nd/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/blank-project-load.js":
/*!***********************************!*\
  !*** ./src/blank-project-load.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   blankProjectLoad: () => (/* binding */ blankProjectLoad),\n/* harmony export */   displayDefaultProject: () => (/* binding */ displayDefaultProject)\n/* harmony export */ });\n// Factory function to create blank project array list\nconst blankProjectLoad = () => {\n  console.log(\n    \"Called blankProjectLoad module...creating blank project array now\"\n  );\n  let projectsArray = [];\n  console.log(\"Pushing the title name of project to the projectArray....\");\n  let projectTitle = \"Default Project\";\n  projectsArray.push({ projectTitle });\n  console.log(projectsArray);\n  return { projectsArray, projectTitle };\n};\n\nfunction displayDefaultProject() {\n  const defaultProject = document.createElement(\"div\");\n  defaultProject.classList.add(\"project\");\n  defaultProject.textContent = \"Default Project\";\n\n  const projectsDiv = document.querySelector(\".projects\");\n  projectsDiv.appendChild(defaultProject);\n\n  let projectTitle = \"Default Project\";\n  console.log(projectTitle);\n  return { projectTitle };\n}\n\n\n//# sourceURL=webpack://odin-todo-2nd/./src/blank-project-load.js?");

/***/ }),

/***/ "./src/create-to-do.js":
/*!*****************************!*\
  !*** ./src/create-to-do.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createToDo: () => (/* binding */ createToDo)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/parseISO/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/startOfToday/index.js\");\n/* harmony import */ var _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manip.js */ \"./src/dom-manip.js\");\n/* harmony import */ var _manage_local_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-local-storage.js */ \"./src/manage-local-storage.js\");\n\n\n\n\n// Creating an array for ToDo, if needed down the road\nlet toDoArray = [];\n\n// Factory function to create todo list\nconst createToDo = () => {\n  let Title = document.getElementById(\"Title\").value;\n  let Description = document.getElementById(\"Description\").value;\n  let DueDate = document.getElementById(\"DueDate\").value;\n  let Priority = document.getElementById(\"Priority\").value;\n\n  // Check to see if empty fields exist\n  if (Title == \"\" || Description == \"\" || DueDate == \"\") {\n    alert(\n      \"Title, Description, and Due Date are required fields, please try again!\"\n    );\n    return;\n  }\n\n  // Check to see if a pre-date was entered\n  if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(DueDate) < (0,date_fns__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()) {\n    alert(\n      \"You have entered a date that has already passed!  Please enter a date greater than or equal to today.\"\n    );\n    console.log(\"due date\", (0,date_fns__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(DueDate));\n    console.log(\"date now\", (0,date_fns__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n    return;\n  }\n\n  // Loop over the nodelist for Check List items from the DOM and format to string\n  const nodeListCheckList = document.querySelectorAll(\".form-li\");\n  let _CheckListArray = [];\n  for (let i = 0; i < nodeListCheckList.length; i++) {\n    // Strip off the \"x\" from end of each li then push to temp array\n    let strippedCheckList = nodeListCheckList[i].textContent.replace(\n      \"\\u00D7\",\n      \"\"\n    );\n    _CheckListArray.push(strippedCheckList);\n  }\n\n  // Strip off the checklist array and convert to string with commas\n  let CheckList = _CheckListArray.join(\", \");\n\n  console.log(\"Called createToDo module...creating todo now\");\n  console.log({ Title, Description, DueDate, Priority, CheckList });\n  console.log(\"Pushing this object to the toDoArray....\");\n  // TODO: remove below two lines of code if array is not needed\n  toDoArray.push({ Title, Description, DueDate, Priority, CheckList });\n  console.log(toDoArray);\n\n  // Call storage module and push objects and string to local storage\n  (0,_manage_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveToDoToLocal)({ Title, Description, DueDate, Priority }, CheckList);\n\n  // Reset the form after successful submission\n  (0,_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__.clearForm)();\n\n  return { Title, Description, DueDate, Priority }, CheckList;\n};\n\n\n//# sourceURL=webpack://odin-todo-2nd/./src/create-to-do.js?");

/***/ }),

/***/ "./src/dom-manip.js":
/*!**************************!*\
  !*** ./src/dom-manip.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addItemToCheckList: () => (/* binding */ addItemToCheckList),\n/* harmony export */   clearForm: () => (/* binding */ clearForm),\n/* harmony export */   displayTheForm: () => (/* binding */ displayTheForm),\n/* harmony export */   displayToDo: () => (/* binding */ displayToDo)\n/* harmony export */ });\n/* harmony import */ var _blank_project_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blank-project-load.js */ \"./src/blank-project-load.js\");\n\n\n// Simplified DOM manipulation using modern JavaScript features\n\nconst displayTheForm = () => {\n  document.getElementById(\"add-todo-form\").style.display = \"\";\n};\n\nconst addItemToCheckList = () => {\n  const addItem = document.getElementById(\"add-to-checklist\").value;\n\n  if (addItem !== \"\") {\n    const ul = document.querySelector(\".todo-ul\");\n    const li = document.createElement(\"li\");\n    li.className = \"form-li\";\n    li.textContent = addItem;\n    const span = document.createElement(\"span\");\n    span.className = \"remove-checklist-item\";\n    span.textContent = \"\\u00D7\";\n    li.appendChild(span);\n    ul.appendChild(li);\n    document.getElementById(\"add-to-checklist\").value = \"\";\n\n    document.querySelectorAll(\".form-li\").forEach((checkListItem) => {\n      checkListItem.addEventListener(\"click\", () => checkListItem.remove());\n    });\n  }\n};\n\nconst clearForm = () => {\n  document.querySelectorAll(\".form-li\").forEach((li) => li.remove());\n  document.getElementById(\"add-todo\").reset();\n};\n\nconst displayToDo = () => {\n  const { Title, Description, DueDate, Priority, CheckList } = localStorage;\n  if (!Title || !Description || !DueDate || !Priority) return;\n\n  document.querySelectorAll(\".card\").forEach((div) => div.remove());\n\n  const card = document.createElement(\"div\");\n  card.classList.add(\"card\");\n  document.querySelector(\".projects\").appendChild(card);\n\n  const deleteToDoButton = document.createElement(\"button\");\n  deleteToDoButton.classList.add(\"remove-todo-button\");\n  deleteToDoButton.textContent = \"Delete/Complete ToDo\";\n  card.appendChild(deleteToDoButton);\n  deleteToDoButton.addEventListener(\"click\", () => {\n    card.remove();\n    localStorage.clear();\n  });\n\n  const displayArray = { Title, Description, DueDate, Priority };\n  Object.entries(displayArray).forEach(([key, value]) => {\n    const para = document.createElement(\"p\");\n    para.textContent = `${key}: ${value}`;\n    card.appendChild(para);\n  });\n\n  const CheckListLabel = document.createElement(\"p\");\n  CheckListLabel.textContent = \"CheckList Items (Click item when completed):\";\n  const ul = document.createElement(\"ul\");\n  CheckListLabel.classList.add(\"check-list-label\");\n  card.appendChild(ul);\n  ul.appendChild(CheckListLabel);\n\n  if (CheckList) {\n    CheckList.split(\",\").forEach((item) => {\n      const li = document.createElement(\"li\");\n      li.className = \"display-li\";\n      li.textContent = item;\n      li.addEventListener(\"click\", () => {\n        li.classList.toggle(\"done\");\n        localStorage.setItem(\n          li.textContent,\n          li.classList.contains(\"done\") ? \"true\" : \"false\"\n        );\n      });\n      ul.appendChild(li);\n    });\n  }\n\n  window.onload = () => {\n    document.querySelectorAll(\".display-li\").forEach((li) => {\n      if (localStorage.getItem(li.textContent) === \"true\") {\n        liNode.classList.add(\"done\");\n      }\n    });\n  };\n};\n\n\n//# sourceURL=webpack://odin-todo-2nd/./src/dom-manip.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_to_do_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-to-do.js */ \"./src/create-to-do.js\");\n/* harmony import */ var _blank_project_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blank-project-load.js */ \"./src/blank-project-load.js\");\n/* harmony import */ var _dom_manip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-manip.js */ \"./src/dom-manip.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n// Call blankProjectLoad on first land\n(0,_blank_project_load_js__WEBPACK_IMPORTED_MODULE_1__.blankProjectLoad)();\n(0,_blank_project_load_js__WEBPACK_IMPORTED_MODULE_1__.displayDefaultProject)();\n\n// TODO: Come back to this call if I build out this feature in the future\n// Call DOM Manipulation module to load default project\n\n// Call displayToDo on first land - pulls from web local storage API (if any)\n(0,_dom_manip_js__WEBPACK_IMPORTED_MODULE_2__.displayToDo)();\n\n// Click events module\nlet clickEventsModule = (function () {\n  // Click event for displaying the form\n  const addNewToDo = document.querySelector(\".add-todo-button\");\n  addNewToDo.addEventListener(\"click\", _dom_manip_js__WEBPACK_IMPORTED_MODULE_2__.displayTheForm);\n\n  // Click event for adding an item to the checklist on the form\n  const addToChecklist = document.querySelector(\".add-to-checklist\");\n  addToChecklist.addEventListener(\"click\", _dom_manip_js__WEBPACK_IMPORTED_MODULE_2__.addItemToCheckList);\n\n  // Click event to clear the form\n  const clearButton = document.querySelector(\".reset-button\");\n  clearButton.addEventListener(\"click\", _dom_manip_js__WEBPACK_IMPORTED_MODULE_2__.clearForm);\n\n  // Click event to submit a new todo form to project\n  const submitButton = document.querySelector(\".submit-button\");\n  submitButton.addEventListener(\"click\", _create_to_do_js__WEBPACK_IMPORTED_MODULE_0__.createToDo);\n})();\n\n\n//# sourceURL=webpack://odin-todo-2nd/./src/index.js?");

/***/ }),

/***/ "./src/manage-local-storage.js":
/*!*************************************!*\
  !*** ./src/manage-local-storage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   saveToDoToLocal: () => (/* binding */ saveToDoToLocal)\n/* harmony export */ });\n/* harmony import */ var _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manip.js */ \"./src/dom-manip.js\");\n\n\nfunction saveToDoToLocal(\n  { Title, Description, DueDate, Priority },\n  CheckList\n) {\n  console.log(\"Saving object to local storage....\");\n  localStorage.setItem(\"Title\", document.getElementById(\"Title\").value);\n  localStorage.setItem(\n    \"Description\",\n    document.getElementById(\"Description\").value\n  );\n  localStorage.setItem(\"DueDate\", document.getElementById(\"DueDate\").value);\n  localStorage.setItem(\"Priority\", document.getElementById(\"Priority\").value);\n  localStorage.setItem(\"CheckList\", CheckList);\n  (0,_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__.displayToDo)();\n  return { Title, Description, DueDate, Priority }, CheckList;\n}\n\n\n//# sourceURL=webpack://odin-todo-2nd/./src/manage-local-storage.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, _typeof(o);\n}\n\n//# sourceURL=webpack://odin-todo-2nd/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;