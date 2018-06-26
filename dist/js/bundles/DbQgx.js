var pageComponent =
webpackJsonppageComponent([37],{

/***/ 274:
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

var _indexSoy = __webpack_require__(275);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DbQgx = function (_Component) {
  _inherits(DbQgx, _Component);

  function DbQgx() {
    _classCallCheck(this, DbQgx);

    return _possibleConstructorReturn(this, (DbQgx.__proto__ || Object.getPrototypeOf(DbQgx)).apply(this, arguments));
  }

  return DbQgx;
}(_metalComponent2.default);

;

_metalSoy2.default.register(DbQgx, _indexSoy2.default);

exports.default = DbQgx;

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.DbQgx = undefined;

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
   * @fileoverview Templates in namespace DbQgx.
   * @public
   */

  goog.module('DbQgx.incrementaldom');

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
    var param538 = function param538() {
      ie_open('h6');
      var dyn37 = opt_data.page.description;
      if (typeof dyn37 == 'function') dyn37();else if (dyn37 != null) itext(dyn37);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Development');
      ie_close('h2');
      ie_open('p');
      itext('This library was developed in Swift, it is just a SDK to make a backpressure of Analytics events to send to Analytics Cloud. Actually we support only custom events and some forms events. More informations can be found in our repository.');
      ie_close('p');
      ie_open('h3');
      itext('Repository');
      ie_close('h3');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://github.com/liferay-mobile/liferay-analytics-ios');
      itext('https://github.com/liferay-mobile/liferay-analytics-ios');
      ie_close('a');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Continuous Integration');
      ie_close('h2');
      ie_open('p');
      itext('We used the ');
      ie_open('strong');
      itext('Travis');
      ie_close('strong');
      itext(' to run our unit tests and generate the ');
      ie_open('strong');
      itext('test coverage');
      ie_close('strong');
      itext('. We send all informations to ');
      ie_open('strong');
      itext('Codacy');
      ie_close('strong');
      itext(', to generate a history of our code quality, using analisys static, code style and code coverage.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
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
      ie_open('h4');
      itext('Core');
      ie_close('h4');
      ie_open('p');
      itext('To release a new version of core of Analytics, it is necessary from root folder, increase the version on ');
      ie_open('code');
      itext('liferay-analytics-ios.podspec');
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
      ie_open('h4');
      itext('Forms plugin');
      ie_close('h4');
      ie_open('p');
      itext('From ');
      ie_open('code');
      itext('/Plugins/liferay-analytics-forms');
      ie_close('code');
      itext(' folder, it is necessary to increase the version on ');
      ie_open('code');
      itext('liferay-analytics-forms-ios.podspec');
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
      $templateAlias2({ code: 'liferay-analytics-forms-ios.podspec', mode: 'ruby' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param538 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'DbQgx.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var DbQgx = function (_Component) {
  _inherits(DbQgx, _Component);

  function DbQgx() {
    _classCallCheck(this, DbQgx);

    return _possibleConstructorReturn(this, (DbQgx.__proto__ || Object.getPrototypeOf(DbQgx)).apply(this, arguments));
  }

  return DbQgx;
}(_metalComponent2.default);

_metalSoy2.default.register(DbQgx, templates);
exports.DbQgx = DbQgx;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[274]);