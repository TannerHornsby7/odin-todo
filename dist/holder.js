/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/holder.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "todo": () => (/* binding */ todo)
/* harmony export */ });
// Information holding object
var todo = function todo(arg) {
  var proto = {
    type: 'Todo',
    t: arg[0],
    d: arg[1],
    dd: arg[2],
    p: arg[3],
    getVal: function getVal(key) {
      return this.key;
    },
    setVal: function setVal(key, value) {
      this[key] = value;
    }
  };
  return Object.assign(Object.create(proto), {
    arg: arg
  });
};

var projects = function projects() {
  var proto = {
    type: 'Projects',
    initial: [],
    getVal: function getVal(key) {
      return this.key;
    },
    setVal: function setVal(key, v) {
      this[key] = v;
    }
  };
  return Object.create(proto);
};


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9sZGVyLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsR0FBRCxFQUFPO0VBQ2hCLElBQU1DLEtBQUssR0FBRztJQUNWQyxJQUFJLEVBQUUsTUFESTtJQUVWQyxDQUFDLEVBQUdILEdBQUcsQ0FBQyxDQUFELENBRkc7SUFHVkksQ0FBQyxFQUFHSixHQUFHLENBQUMsQ0FBRCxDQUhHO0lBSVZLLEVBQUUsRUFBR0wsR0FBRyxDQUFDLENBQUQsQ0FKRTtJQUtWTSxDQUFDLEVBQUdOLEdBQUcsQ0FBQyxDQUFELENBTEc7SUFNVk8sTUFOVSxrQkFNSEMsR0FORyxFQU1FO01BQ1IsT0FBTyxLQUFLQSxHQUFaO0lBQ0gsQ0FSUztJQVNWQyxNQVRVLGtCQVNIRCxHQVRHLEVBU0VFLEtBVEYsRUFTUztNQUNmLEtBQUtGLEdBQUwsSUFBWUUsS0FBWjtJQUNIO0VBWFMsQ0FBZDtFQWNBLE9BQU9DLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRCxNQUFNLENBQUNFLE1BQVAsQ0FBY1osS0FBZCxDQUFkLEVBQW9DO0lBQUNELEdBQUcsRUFBSEE7RUFBRCxDQUFwQyxDQUFQO0FBQ0gsQ0FoQkQ7O0FBa0JBLElBQU1jLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07RUFDbkIsSUFBTWIsS0FBSyxHQUFHO0lBQ1ZDLElBQUksRUFBRSxVQURJO0lBRVZhLE9BQU8sRUFBRyxFQUZBO0lBR1ZSLE1BSFUsa0JBR0hDLEdBSEcsRUFHRTtNQUNSLE9BQU8sS0FBS0EsR0FBWjtJQUNILENBTFM7SUFNVkMsTUFOVSxrQkFNSEQsR0FORyxFQU1FUSxDQU5GLEVBTUs7TUFDWCxLQUFLUixHQUFMLElBQVlRLENBQVo7SUFDSDtFQVJTLENBQWQ7RUFVQSxPQUFPTCxNQUFNLENBQUNFLE1BQVAsQ0FBY1osS0FBZCxDQUFQO0FBQ0gsQ0FaRCIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9ob2xkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBJbmZvcm1hdGlvbiBob2xkaW5nIG9iamVjdFxuXG5jb25zdCB0b2RvID0gKGFyZyk9PntcbiAgICBjb25zdCBwcm90byA9IHtcbiAgICAgICAgdHlwZTogJ1RvZG8nLFxuICAgICAgICB0IDogYXJnWzBdLFxuICAgICAgICBkIDogYXJnWzFdLFxuICAgICAgICBkZCA6IGFyZ1syXSxcbiAgICAgICAgcCA6IGFyZ1szXSxcbiAgICAgICAgZ2V0VmFsKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMua2V5O1xuICAgICAgICB9LFxuICAgICAgICBzZXRWYWwoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKHByb3RvKSwge2FyZ30pXG59O1xuXG5jb25zdCBwcm9qZWN0cyA9ICgpID0+IHtcbiAgICBjb25zdCBwcm90byA9IHtcbiAgICAgICAgdHlwZTogJ1Byb2plY3RzJyxcbiAgICAgICAgaW5pdGlhbCA6IFtdLFxuICAgICAgICBnZXRWYWwoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5rZXk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldFZhbChrZXksIHYpIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IHY7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUocHJvdG8pO1xufVxuXG5leHBvcnQgeyB0b2RvLCBwcm9qZWN0cyB9Il0sIm5hbWVzIjpbInRvZG8iLCJhcmciLCJwcm90byIsInR5cGUiLCJ0IiwiZCIsImRkIiwicCIsImdldFZhbCIsImtleSIsInNldFZhbCIsInZhbHVlIiwiT2JqZWN0IiwiYXNzaWduIiwiY3JlYXRlIiwicHJvamVjdHMiLCJpbml0aWFsIiwidiJdLCJzb3VyY2VSb290IjoiIn0=