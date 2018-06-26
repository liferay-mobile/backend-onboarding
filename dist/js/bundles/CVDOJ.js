var pageComponent =
webpackJsonppageComponent([13],{

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

var _stepSoy = __webpack_require__(313);

var _stepSoy2 = _interopRequireDefault(_stepSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CVDOJ = function (_Component) {
  _inherits(CVDOJ, _Component);

  function CVDOJ() {
    _classCallCheck(this, CVDOJ);

    return _possibleConstructorReturn(this, (CVDOJ.__proto__ || Object.getPrototypeOf(CVDOJ)).apply(this, arguments));
  }

  return CVDOJ;
}(_metalComponent2.default);

;

_metalSoy2.default.register(CVDOJ, _stepSoy2.default);

exports.default = CVDOJ;

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.CVDOJ = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from 2step.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace CVDOJ.
   * @public
   */

  goog.module('CVDOJ.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('tutorial.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?),
   *    elementClasses: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param971 = function param971() {
      ie_open('h2');
      var dyn55 = opt_data.page.title;
      if (typeof dyn55 == 'function') dyn55();else if (dyn55 != null) itext(dyn55);
      ie_close('h2');
      ie_open('ol', null, null, 'start', '2');
      ie_open('li');
      itext('Java JDK8');
      ie_open('ul');
      ie_open('li');
      itext('In the terminal:');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: ' \'$ curl -s "https://get.sdkman.io" | bash\'', mode: 'text' }, null, opt_ijData);
      ie_open('ul');
      ie_open('li');
      itext('Follow the instructions on-screen to complete installation.');
      ie_close('li');
      ie_open('li');
      itext('Next, open a new terminal or enter:');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: ' \'$ source "$HOME/.sdkman/bin/sdkman-init.sh"\'', mode: 'text' }, null, opt_ijData);
      ie_open('ul');
      ie_open('li');
      itext('Lastly, run the following code snippet to ensure that installation succeeded:');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: ' \'$ sdk version\'', mode: 'text' }, null, opt_ijData);
      ie_open('ul');
      ie_open('li');
      itext('If all went well, the version should be displayed. More info: ');
      ie_open('em');
      ie_open('a', null, null, 'href', 'http://sdkman.io/index.html');
      itext('sdkman.io');
      ie_close('a');
      ie_close('em');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_close('ol');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param971 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'CVDOJ.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var CVDOJ = function (_Component) {
  _inherits(CVDOJ, _Component);

  function CVDOJ() {
    _classCallCheck(this, CVDOJ);

    return _possibleConstructorReturn(this, (CVDOJ.__proto__ || Object.getPrototypeOf(CVDOJ)).apply(this, arguments));
  }

  return CVDOJ;
}(_metalComponent2.default);

_metalSoy2.default.register(CVDOJ, templates);
exports.CVDOJ = CVDOJ;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[312]);