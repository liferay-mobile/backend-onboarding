var pageComponent =
webpackJsonppageComponent([23],{

/***/ 296:
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

var _indexSoy = __webpack_require__(297);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pkfUe = function (_Component) {
  _inherits(pkfUe, _Component);

  function pkfUe() {
    _classCallCheck(this, pkfUe);

    return _possibleConstructorReturn(this, (pkfUe.__proto__ || Object.getPrototypeOf(pkfUe)).apply(this, arguments));
  }

  return pkfUe;
}(_metalComponent2.default);

;

_metalSoy2.default.register(pkfUe, _indexSoy2.default);

exports.default = pkfUe;

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.pkfUe = undefined;

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
   * @fileoverview Templates in namespace pkfUe.
   * @public
   */

  goog.module('pkfUe.incrementaldom');

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

  var $templateAlias1 = _metalSoy2.default.getTemplate('team.incrementaldom', 'render');

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
    var param458 = function param458() {
      ie_open('article', null, null, 'id', '1');
      ie_open('p');
      ie_open('strong');
      itext('Mission');
      ie_close('strong');
      itext(': Create excellent solutions that can be used everywhere to transform the Liferay ecosystem and the user\'s life.');
      ie_close('p');
      ie_open('h2');
      itext('Products with excellence');
      ie_close('h2');
      ie_open('ol');
      ie_open('li');
      itext('The act of writing software should be approached as an art. All the guild members should strive to produce, not only software that works, but software of excellent quality');
      ie_close('li');
      ie_open('li');
      itext('The software should have, not only excellent quality for the end user, but also for the developers writing it. That way we should always strive for quality in maintenance projects.');
      ie_close('li');
      ie_open('li');
      itext('Code reviews are part of the maintenance and development process. All developers should be able to review code from other guild member and keeping mutual respect.');
      ie_close('li');
      ie_open('li');
      itext('We should be able to respond to changes. Creating value in a constant and incremental way is always important.');
      ie_close('li');
      ie_open('li');
      itext('We value more responding to change over following a plan.');
      ie_close('li');
      ie_open('li');
      itext('We value more working software over comprehensive documentation.');
      ie_close('li');
      ie_close('ol');
      ie_open('h2');
      itext('Servant mindset');
      ie_close('h2');
      ie_open('ol');
      ie_open('li');
      itext('It\u2019s a duty of all guild members to share knowledge and information to the other guild members.');
      ie_close('li');
      ie_open('li');
      itext('When sharing knowledge, we should focus on the reasons and ways of benefitting of it.');
      ie_close('li');
      ie_open('li');
      itext('The guild should meet regularly to present the work currently in progress.');
      ie_close('li');
      ie_open('li');
      itext('The guild not only should share knowledge locally but also with the global guild.');
      ie_close('li');
      ie_close('ol');
      ie_open('h2');
      itext('Continuous improvement');
      ie_close('h2');
      ie_open('ol');
      ie_open('li');
      itext('All guild members should be aware of what is happening in the mobile world, inside and outside of their country.');
      ie_close('li');
      ie_open('li');
      itext('The guild members should attend to the best events, read the most important publications and know the key persons in the area.');
      ie_close('li');
      ie_open('li');
      itext('All guild members should always be motivated to learn new technologies, languages and frameworks that bring value to the guild.');
      ie_close('li');
      ie_open('li');
      itext('All should be open to give and receive suggestions and constructive feedback.');
      ie_close('li');
      ie_open('li');
      itext('All guild members should always be available to help each other. At the same time they should be curious and able to look for knowledge independently.');
      ie_close('li');
      ie_close('ol');
      ie_open('h2');
      itext('Value people');
      ie_close('h2');
      ie_open('p');
      itext('All guild members should be treated in the same way, independently of their performance, level or professional experience. The hierarchical structure should not trap communication. All guild members have the liberty to address to other project members, internal or external to the guild.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param458 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'pkfUe.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var pkfUe = function (_Component) {
  _inherits(pkfUe, _Component);

  function pkfUe() {
    _classCallCheck(this, pkfUe);

    return _possibleConstructorReturn(this, (pkfUe.__proto__ || Object.getPrototypeOf(pkfUe)).apply(this, arguments));
  }

  return pkfUe;
}(_metalComponent2.default);

_metalSoy2.default.register(pkfUe, templates);
exports.pkfUe = pkfUe;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[296]);