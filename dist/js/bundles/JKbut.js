var pageComponent =
webpackJsonppageComponent([15],{

/***/ 308:
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

var _indexSoy = __webpack_require__(309);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JKbut = function (_Component) {
  _inherits(JKbut, _Component);

  function JKbut() {
    _classCallCheck(this, JKbut);

    return _possibleConstructorReturn(this, (JKbut.__proto__ || Object.getPrototypeOf(JKbut)).apply(this, arguments));
  }

  return JKbut;
}(_metalComponent2.default);

;

_metalSoy2.default.register(JKbut, _indexSoy2.default);

exports.default = JKbut;

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.JKbut = undefined;

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

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace JKbut.
   * @public
   */

  goog.module('JKbut.incrementaldom');

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

  var $templateAlias1 = _metalSoy2.default.getTemplate('tips.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param794 = function param794() {
      ie_open('h6');
      var dyn48 = opt_data.page.description;
      if (typeof dyn48 == 'function') dyn48();else if (dyn48 != null) itext(dyn48);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Clean Code');
      ie_close('h2');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('Simple:');
      ie_close('strong');
      itext(' easy to understand code.');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Straight:');
      ie_close('strong');
      itext(' go straight to the point, do not "loop" to achieve your goal.');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Efficient:');
      ie_close('strong');
      itext(' code that does what is proposed.');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('No duplicity:');
      ie_close('strong');
      itext(' it does not do what another part of the code already does.');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Elegant:');
      ie_close('strong');
      itext(' because it is different from other codes.');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Done with care:');
      ie_close('strong');
      itext(' those who did had concern in producing that code.');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Programming Practices');
      ie_close('h2');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      ie_open('strong');
      itext('Add new methods in alphabetical order relative to the existing code. [JS]');
      ie_close('strong');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('strong');
      itext('Do not deploy with any running breakpoints.');
      ie_close('strong');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('strong');
      itext('Check the need to create unit tests before performing the pull request.');
      ie_close('strong');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('strong');
      itext('Perform unit and integration tests before performing the pull request.');
      ie_close('strong');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('strong');
      itext('Each line of code can not exceed 80 characters.');
      ie_close('strong');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('strong');
      itext('Do not perform method chaining:');
      ie_close('strong');
      ie_close('p');
      $templateAlias2({ code: 'person.setName("Peter").setAge(21).introduce();', mode: 'javascript' }, null, opt_ijData);
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('strong');
      itext('Verify that the branch is updated before committing.');
      ie_close('strong');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('strong');
      itext('Make sure to write JavaDocs when it needed.');
      ie_close('strong');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('strong');
      itext('Pay attention to finished your task before start new ones.');
      ie_close('strong');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param794 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'JKbut.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var JKbut = function (_Component) {
  _inherits(JKbut, _Component);

  function JKbut() {
    _classCallCheck(this, JKbut);

    return _possibleConstructorReturn(this, (JKbut.__proto__ || Object.getPrototypeOf(JKbut)).apply(this, arguments));
  }

  return JKbut;
}(_metalComponent2.default);

_metalSoy2.default.register(JKbut, templates);
exports.JKbut = JKbut;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[308]);