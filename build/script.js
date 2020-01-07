(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var accordionHandler = function accordionHandler(clickEvent) {
  var accordionEl = clickEvent.target.closest('.e-accordion');

  if (!accordionEl) {
    return;
  }

  var accordionShortEl = accordionEl.querySelector('.e-accordion__short');

  if (accordionShortEl) {
    var accordionMoreEl = accordionEl.querySelector('.e-accordion__more');

    if (accordionMoreEl) {
      accordionMoreEl.classList.toggle('e-accordion__more_view_default');
    }
  }
};

var _default = accordionHandler;
exports["default"] = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var onoffswitchHandler = function onoffswitchHandler(clickEvent) {
  var onoffswitchEl = clickEvent.target.closest('.onoffswitch');

  if (!onoffswitchEl) {
    return;
  }

  onoffswitchEl.classList.toggle('onoffswitch_checked');
  var themeElements = document.querySelectorAll('.theme');

  if (themeElements && themeElements.length) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = themeElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var themeEl = _step.value;
        themeEl.classList.toggle('theme_color_project-default');
        themeEl.classList.toggle('theme_color_project-inverse');
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
};

var _default = onoffswitchHandler;
exports["default"] = _default;

},{}],3:[function(require,module,exports){
"use strict";

var _onoffswitch = _interopRequireDefault(require("./blocks/content/onoffswitch/onoffswitch"));

var _eAccordeon = _interopRequireDefault(require("./blocks/base/interactive/e-accordeon/e-accordeon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', _onoffswitch["default"]);
  document.addEventListener('click', _eAccordeon["default"]);
});

},{"./blocks/base/interactive/e-accordeon/e-accordeon":1,"./blocks/content/onoffswitch/onoffswitch":2}]},{},[3]);
