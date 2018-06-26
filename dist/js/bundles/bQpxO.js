var pageComponent =
webpackJsonppageComponent([19],{

/***/ 302:
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

var _indexSoy = __webpack_require__(303);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bQpxO = function (_Component) {
  _inherits(bQpxO, _Component);

  function bQpxO() {
    _classCallCheck(this, bQpxO);

    return _possibleConstructorReturn(this, (bQpxO.__proto__ || Object.getPrototypeOf(bQpxO)).apply(this, arguments));
  }

  return bQpxO;
}(_metalComponent2.default);

;

_metalSoy2.default.register(bQpxO, _indexSoy2.default);

exports.default = bQpxO;

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.bQpxO = undefined;

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
   * @fileoverview Templates in namespace bQpxO.
   * @public
   */

  goog.module('bQpxO.incrementaldom');

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
    var param489 = function param489() {
      ie_open('h6');
      var dyn33 = opt_data.page.description;
      if (typeof dyn33 == 'function') dyn33();else if (dyn33 != null) itext(dyn33);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('About Liferay');
      ie_close('h2');
      ie_open('blockquote');
      ie_open('p');
      itext('Liferay makes software that helps companies create digital experiences on web, mobile and connected devices. The platform is open source, which makes it more reliable, innovative and secure. Besides that, the company try to leave a positive mark on the world through business and technology.');
      ie_close('p');
      ie_close('blockquote');
      ie_open('h4');
      itext('Mission:');
      ie_close('h4');
      ie_open('p');
      itext('Building a vibrant business that makes technology useful and invests in communities.');
      ie_close('p');
      ie_open('h4');
      itext('Vision:');
      ie_close('h4');
      ie_open('p');
      itext('See people realize their full potential to serve others.');
      ie_close('p');
      ie_open('h4');
      itext('Values:');
      ie_close('h4');
      ie_open('ul');
      ie_open('li');
      itext('Produce by Excellence');
      ie_close('li');
      ie_open('li');
      itext('Lead by Serving');
      ie_close('li');
      ie_open('li');
      itext('Value People');
      ie_close('li');
      ie_open('li');
      itext('Grow and Get Better');
      ie_close('li');
      ie_open('li');
      itext('Stay Nerd');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://www.youtube.com/playlist?list=PLKb_gn-WO_KoJhgf3pYvFUQ-bl4NU36U4');
      itext('Here');
      ie_close('a');
      itext(' you can have access to introductory videos about the Liferay culture and teams. It is recommended that you start with the list below:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://www.youtube.com/watch?v=OztvykIA9cU');
      itext('What\'s Liferay');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://www.youtube.com/watch?v=ZdR7DZP4kBw&index=2&list=PLKb_gn-WO_KoJhgf3pYvFUQ-bl4NU36U4');
      itext('Liferay\'s Vision');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://www.youtube.com/watch?v=xXDXRwxNk0s&index=3&list=PLKb_gn-WO_KoJhgf3pYvFUQ-bl4NU36U4');
      itext('Value Proposition');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://www.youtube.com/watch?v=CJ-9gTc0ykQ&index=10&list=PLKb_gn-WO_KoJhgf3pYvFUQ-bl4NU36U4');
      itext('Introduction to Engineering');
      ie_close('a');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param489 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'bQpxO.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var bQpxO = function (_Component) {
  _inherits(bQpxO, _Component);

  function bQpxO() {
    _classCallCheck(this, bQpxO);

    return _possibleConstructorReturn(this, (bQpxO.__proto__ || Object.getPrototypeOf(bQpxO)).apply(this, arguments));
  }

  return bQpxO;
}(_metalComponent2.default);

_metalSoy2.default.register(bQpxO, templates);
exports.bQpxO = bQpxO;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[302]);