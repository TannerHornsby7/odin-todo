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
  !*** ./src/render.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

// Render UI from object Array
function render(objList) {
  var main = document.querySelector('.main');
  var tiles = document.getElementById('tiles');

  if (tiles) {
    tiles.remove();
  }

  main.appendChild(makeList(objList));
} // Make DOM list from object list 


function makeList(objList) {
  var tiles = document.createElement('div');
  tiles.id = 'tiles';

  for (var i = 0; i < objList.length; i++) {
    tiles.appendChild(makeTile(objList[i]));
  }

  return tiles;
} // Create DOM Element for Todo


function makeTile(obj) {
  var close = document.createElement('icon');
  var flag = document.createElement('icon');
  var headdiv = document.createElement('div');
  var tile = document.createElement('div');
  var title = document.createElement('h3');
  var description = document.createElement('p');
  var duedate = document.createElement('p');
  var flags = 1;
  tile.classList.add('tile');
  flag.classList.add('flag');
  close.classList.add('close'); // setting head div content

  if (obj.p == 2) {
    2, _readOnlyError("flags");
  } else if (obj.p == 3) {
    3, _readOnlyError("flags");
  }

  for (var i = 0; i < flags; i++) {
    headdiv.appendChild(flag);
  }

  headdiv.appendChild(close);
  tile.appendChild(headdiv); // setting tile content

  title.textContent = obj.t;
  description.textContent = obj.d;
  duedate.textContent = obj.dd;
  tile.appendChild(title);
  tile.appendChild(description);
  tile.appendChild(duedate);
  return tile;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE5QjtFQUNBUCxPQUFPLENBQUNLLFdBQVIsR0FBc0JaLEdBQUcsQ0FBQ2UsRUFBMUI7RUFDQVgsSUFBSSxDQUFDWCxXQUFMLENBQWlCWSxLQUFqQjtFQUNBRCxJQUFJLENBQUNYLFdBQUwsQ0FBaUJhLFdBQWpCO0VBQ0FGLElBQUksQ0FBQ1gsV0FBTCxDQUFpQmMsT0FBakI7RUFFQSxPQUFPSCxJQUFQO0FBQ0g7O0FBRUQsaUVBQWVuQixNQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvcmVuZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gUmVuZGVyIFVJIGZyb20gb2JqZWN0IEFycmF5XG5mdW5jdGlvbiByZW5kZXIob2JqTGlzdCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIGNvbnN0IHRpbGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbGVzJyk7XG5cbiAgICBpZih0aWxlcykge1xuICAgICAgICB0aWxlcy5yZW1vdmUoKTtcbiAgICB9XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWtlTGlzdChvYmpMaXN0KSk7XG59XG5cbi8vIE1ha2UgRE9NIGxpc3QgZnJvbSBvYmplY3QgbGlzdCBcbmZ1bmN0aW9uIG1ha2VMaXN0KG9iakxpc3QpIHtcbiAgICBjb25zdCB0aWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpbGVzLmlkID0gJ3RpbGVzJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iakxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGlsZXMuYXBwZW5kQ2hpbGQobWFrZVRpbGUob2JqTGlzdFtpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gdGlsZXM7XG59XG5cbi8vIENyZWF0ZSBET00gRWxlbWVudCBmb3IgVG9kb1xuZnVuY3Rpb24gbWFrZVRpbGUob2JqKSB7XG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpY29uJyk7XG4gICAgY29uc3QgZmxhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ljb24nKTtcbiAgICBjb25zdCBoZWFkZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBkdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGZsYWdzID0gMTtcblxuICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgIGZsYWcuY2xhc3NMaXN0LmFkZCgnZmxhZycpO1xuICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XG5cbiAgICAvLyBzZXR0aW5nIGhlYWQgZGl2IGNvbnRlbnRcbiAgICBpZihvYmoucCA9PSAyKSB7XG4gICAgICAgIGZsYWdzID0gMjtcbiAgICB9XG4gICAgZWxzZSBpZihvYmoucCA9PSAzKSB7XG4gICAgICAgIGZsYWdzID0gM1xuICAgIH1cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZmxhZ3M7IGkrKykge1xuICAgICAgICBoZWFkZGl2LmFwcGVuZENoaWxkKGZsYWcpO1xuICAgIH1cbiAgICBoZWFkZGl2LmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGhlYWRkaXYpO1xuXG4gICAgLy8gc2V0dGluZyB0aWxlIGNvbnRlbnRcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50O1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gb2JqLmQ7XG4gICAgZHVlZGF0ZS50ZXh0Q29udGVudCA9IG9iai5kZDtcbiAgICB0aWxlLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICB0aWxlLmFwcGVuZENoaWxkKGR1ZWRhdGUpO1xuXG4gICAgcmV0dXJuIHRpbGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjtcbiJdLCJuYW1lcyI6WyJyZW5kZXIiLCJvYmpMaXN0IiwibWFpbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRpbGVzIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmUiLCJhcHBlbmRDaGlsZCIsIm1ha2VMaXN0IiwiY3JlYXRlRWxlbWVudCIsImlkIiwiaSIsImxlbmd0aCIsIm1ha2VUaWxlIiwib2JqIiwiY2xvc2UiLCJmbGFnIiwiaGVhZGRpdiIsInRpbGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlZGF0ZSIsImZsYWdzIiwiY2xhc3NMaXN0IiwiYWRkIiwicCIsInRleHRDb250ZW50IiwidCIsImQiLCJkZCJdLCJzb3VyY2VSb290IjoiIn0=