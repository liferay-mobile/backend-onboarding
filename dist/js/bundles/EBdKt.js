var pageComponent =
webpackJsonppageComponent([30],{

/***/ 288:
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

var _indexSoy = __webpack_require__(289);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EBdKt = function (_Component) {
  _inherits(EBdKt, _Component);

  function EBdKt() {
    _classCallCheck(this, EBdKt);

    return _possibleConstructorReturn(this, (EBdKt.__proto__ || Object.getPrototypeOf(EBdKt)).apply(this, arguments));
  }

  return EBdKt;
}(_metalComponent2.default);

;

_metalSoy2.default.register(EBdKt, _indexSoy2.default);

exports.default = EBdKt;

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.EBdKt = undefined;

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
   * @fileoverview Templates in namespace EBdKt.
   * @public
   */

  goog.module('EBdKt.incrementaldom');

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

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

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
    var param710 = function param710() {
      ie_open('h6');
      var dyn44 = opt_data.page.description;
      if (typeof dyn44 == 'function') dyn44();else if (dyn44 != null) itext(dyn44);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Development');
      ie_close('h2');
      ie_open('p');
      itext('The Liferay Mobile SDK is a framework for building native mobile apps that integrate with your different Liferay Portal instances and their portlets. The SDK provides the means for your mobile apps to easily consume Liferay Portal\'s core web services and the web services of your custom portlets. It wraps Liferay JSON web services, takes care of authentication, makes HTTP requests (synchronously or asynchronously), parses JSON results and handles server side exceptions.');
      ie_close('p');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://dev.liferay.com/develop/tutorials/-/knowledge_base/7-0/mobile-sdk');
      itext('Learn how to use');
      ie_close('a');
      ie_close('p');
      ie_open('h3');
      itext('Repository');
      ie_close('h3');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://github.com/liferay/liferay-mobile-sdk/');
      itext('https://github.com/liferay/liferay-mobile-sdk/');
      ie_close('a');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('How to publish a new version ?');
      ie_close('h2');
      ie_open('p');
      itext('We use the bintray to send versions to JCenter and to Maven Central. You need to request an account on Bintray to allan.melo@liferay.com or victor.oliveira@liferay.com.');
      ie_close('p');
      ie_open('p');
      itext('After this, you need to create a ');
      ie_open('code');
      itext('local.properties');
      ie_close('code');
      itext(' file on root of project, using your bintray user and your API key.');
      ie_close('p');
      $templateAlias2({ code: 'bintray.user=your_bintray_user\nbintray.apiKey=xxxxxxxxxxxxxxxxxxxxxxxxxxx', mode: 'text' }, null, opt_ijData);
      ie_open('p');
      itext('Your API Key can be found here.');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'src', '/images/bintray_apikey.png');
      ie_close('img');
      ie_close('p');
      ie_open('p');
      itext('You need to increase the version, found in ');
      ie_open('code');
      itext('/android/build.gradle');
      ie_close('code');
      itext(' file, in ');
      ie_open('code');
      itext('android/defaultConfig/versionName');
      ie_close('code');
      itext(' property.');
      ie_close('p');
      ie_open('p');
      itext('In terminal, from ');
      ie_open('code');
      itext('/android');
      ie_close('code');
      itext(', you need run ');
      ie_open('code');
      itext('../gradlew build');
      ie_close('code');
      itext(' and ');
      ie_open('code');
      itext('../gradlew bintrayUpload');
      ie_close('code');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param710 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'EBdKt.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var EBdKt = function (_Component) {
  _inherits(EBdKt, _Component);

  function EBdKt() {
    _classCallCheck(this, EBdKt);

    return _possibleConstructorReturn(this, (EBdKt.__proto__ || Object.getPrototypeOf(EBdKt)).apply(this, arguments));
  }

  return EBdKt;
}(_metalComponent2.default);

_metalSoy2.default.register(EBdKt, templates);
exports.EBdKt = EBdKt;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[288]);