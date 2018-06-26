var pageComponent =
webpackJsonppageComponent([2],{

/***/ 330:
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

var _generalSoy = __webpack_require__(331);

var _generalSoy2 = _interopRequireDefault(_generalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bKyVv = function (_Component) {
  _inherits(bKyVv, _Component);

  function bKyVv() {
    _classCallCheck(this, bKyVv);

    return _possibleConstructorReturn(this, (bKyVv.__proto__ || Object.getPrototypeOf(bKyVv)).apply(this, arguments));
  }

  return bKyVv;
}(_metalComponent2.default);

;

_metalSoy2.default.register(bKyVv, _generalSoy2.default);

exports.default = bKyVv;

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.bKyVv = undefined;

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

  // This file was automatically generated from general.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace bKyVv.
   * @public
   */

  goog.module('bKyVv.incrementaldom');

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
    var param887 = function param887() {
      ie_open('h6');
      var dyn51 = opt_data.page.description;
      if (typeof dyn51 == 'function') dyn51();else if (dyn51 != null) itext(dyn51);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Do you want to create an ALIAS?');
      ie_close('h2');
      ie_open('ol');
      ie_open('li');
      itext('Access the terminal and type \'sublime .zshrc\'.');
      ie_close('li');
      ie_open('li');
      itext('Add the desired ALIAS in the file.');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('E.g.:');
      ie_close('strong');
      itext(' alias gw=/Users/UserName/YOUR_PATH/liferay-portal/gradlew.');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_close('ol');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Do you want to to kill the TomCat process?');
      ie_close('h2');
      ie_open('ol');
      ie_open('li');
      itext('In the terminal:');
      ie_close('li');
      ie_close('ol');
      $templateAlias2({ code: '\'ps aux | grep tomcat\'', mode: 'text' }, null, opt_ijData);
      ie_open('ol', null, null, 'start', '2');
      ie_open('li');
      itext('Then, run this command to kill the process.');
      ie_close('li');
      ie_close('ol');
      $templateAlias2({ code: '\'kill -9 XXX\'', mode: 'text' }, null, opt_ijData);
      ie_open('ul');
      ie_open('li');
      itext('Note the number returned after step 1 and enter in place of \'XXX\'.');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Update the Macos Sierra?');
      ie_close('h2');
      ie_open('ol');
      ie_open('li');
      itext('In the terminal:');
      ie_close('li');
      ie_close('ol');
      $templateAlias2({ code: '\'brew update\'.', mode: 'text' }, null, opt_ijData);
      ie_open('ol', null, null, 'start', '2');
      ie_open('li');
      itext('Then,');
      ie_close('li');
      ie_close('ol');
      $templateAlias2({ code: '\'Brew install telnet\'.', mode: 'text' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Syncing pull requests with Jira:');
      ie_close('h2');
      ie_open('ol');
      ie_open('li');
      itext('In the terminal:');
      ie_close('li');
      ie_close('ol');
      $templateAlias2({ code: '\'sudo npm install gh -g\'.', mode: 'text' }, null, opt_ijData);
      ie_open('ol', null, null, 'start', '2');
      ie_open('li');
      itext('Then,');
      ie_close('li');
      ie_close('ol');
      $templateAlias2({ code: '\'sudo npm install gh-jira -g\'.', mode: 'text' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param887 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'bKyVv.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var bKyVv = function (_Component) {
  _inherits(bKyVv, _Component);

  function bKyVv() {
    _classCallCheck(this, bKyVv);

    return _possibleConstructorReturn(this, (bKyVv.__proto__ || Object.getPrototypeOf(bKyVv)).apply(this, arguments));
  }

  return bKyVv;
}(_metalComponent2.default);

_metalSoy2.default.register(bKyVv, templates);
exports.bKyVv = bKyVv;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[330]);