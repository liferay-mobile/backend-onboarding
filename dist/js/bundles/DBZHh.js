var pageComponent =
webpackJsonppageComponent([29],{

/***/ 290:
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

var _indexSoy = __webpack_require__(291);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DBZHh = function (_Component) {
  _inherits(DBZHh, _Component);

  function DBZHh() {
    _classCallCheck(this, DBZHh);

    return _possibleConstructorReturn(this, (DBZHh.__proto__ || Object.getPrototypeOf(DBZHh)).apply(this, arguments));
  }

  return DBZHh;
}(_metalComponent2.default);

;

_metalSoy2.default.register(DBZHh, _indexSoy2.default);

exports.default = DBZHh;

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.DBZHh = undefined;

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
   * @fileoverview Templates in namespace DBZHh.
   * @public
   */

  goog.module('DBZHh.incrementaldom');

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
    var param726 = function param726() {
      ie_open('h6');
      var dyn45 = opt_data.page.description;
      if (typeof dyn45 == 'function') dyn45();else if (dyn45 != null) itext(dyn45);
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
      ie_open('h3');
      itext('Cocoapods');
      ie_close('h3');
      ie_open('p');
      itext('To publish any pod, you need to create a session using ');
      ie_open('code');
      itext('liferay.mobile@gmail.com');
      ie_close('code');
      ie_close('p');
      $templateAlias2({ code: 'pod trunk register liferay.mobile@liferay.com', mode: 'text' }, null, opt_ijData);
      ie_open('p');
      itext('After this, you need to open the link sent to ');
      ie_open('code');
      itext('liferay.mobile@gmail.com');
      ie_close('code');
      itext('. Now you are logged and able to publish our libraries.');
      ie_close('p');
      ie_open('p');
      itext('To release a new version of core of Analytics, it is necessary from root folder, increase the version on ');
      ie_open('code');
      itext('Liferay-iOS-SDK.podspec');
      ie_close('code');
      itext(' in ');
      ie_open('code');
      itext('s.version');
      ie_close('code');
      itext(' property, commit everything.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Create a tag with the version name');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: 'git tag "X.X.X"', mode: 'text' }, null, opt_ijData);
      ie_open('ul');
      ie_open('li');
      itext('Push the tag to remote');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: 'git push --tags', mode: 'text' }, null, opt_ijData);
      ie_open('ul');
      ie_open('li');
      itext('Upload the new version to Cocoapods');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: 'pod trunk liferay-analytics-ios.podspec', mode: 'ruby' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param726 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'DBZHh.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var DBZHh = function (_Component) {
  _inherits(DBZHh, _Component);

  function DBZHh() {
    _classCallCheck(this, DBZHh);

    return _possibleConstructorReturn(this, (DBZHh.__proto__ || Object.getPrototypeOf(DBZHh)).apply(this, arguments));
  }

  return DBZHh;
}(_metalComponent2.default);

_metalSoy2.default.register(DBZHh, templates);
exports.DBZHh = DBZHh;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[290]);