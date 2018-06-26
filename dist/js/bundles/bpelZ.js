var pageComponent =
webpackJsonppageComponent([4],{

/***/ 326:
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

var _codeSoy = __webpack_require__(327);

var _codeSoy2 = _interopRequireDefault(_codeSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bpelZ = function (_Component) {
  _inherits(bpelZ, _Component);

  function bpelZ() {
    _classCallCheck(this, bpelZ);

    return _possibleConstructorReturn(this, (bpelZ.__proto__ || Object.getPrototypeOf(bpelZ)).apply(this, arguments));
  }

  return bpelZ;
}(_metalComponent2.default);

;

_metalSoy2.default.register(bpelZ, _codeSoy2.default);

exports.default = bpelZ;

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.bpelZ = undefined;

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

  // This file was automatically generated from code.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace bpelZ.
   * @public
   */

  goog.module('bpelZ.incrementaldom');

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
    var param810 = function param810() {
      ie_open('h6');
      var dyn49 = opt_data.page.description;
      if (typeof dyn49 == 'function') dyn49();else if (dyn49 != null) itext(dyn49);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('New Code?');
      ie_close('h2');
      ie_open('ol');
      ie_open('li');
      itext('On the terminal, access the modified code folder and run the command:');
      ie_close('li');
      ie_close('ol');
      $templateAlias2({ code: '\'gw clean deploy\'', mode: 'text' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Do you want to organize your code before Pull Request?');
      ie_close('h2');
      ie_open('ol');
      ie_open('li');
      itext('In the terminal, run the following commands:');
      ie_open('ul');
      ie_open('li');
      itext('Check for inconsistencies.:');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: '\'gw formatSource\'', mode: 'text' }, null, opt_ijData);
      ie_open('ul');
      ie_open('li');
      itext('Check for inconsistencies in the .jsp file:');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: '\'check_sf **/*.jsp\'', mode: 'text' }, null, opt_ijData);
      ie_open('ul');
      ie_open('li');
      itext('check for inconsistencies in the .soy file:');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: '\'mcritic XXX.soy\'', mode: 'text' }, null, opt_ijData);
      ie_close('li');
      ie_close('ol');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      itext('To run the command \'mcritic XXX.soy\' command, you must perform the following:');
      ie_close('p');
      ie_open('ol');
      ie_open('li');
      itext('In the terminal:');
      ie_close('li');
      ie_close('ol');
      $templateAlias2({ code: '\'npm install -g metal-soy-critic\'', mode: 'text' }, null, opt_ijData);
      ie_open('ol', null, null, 'start', '2');
      ie_open('li');
      itext('Any questions, access ');
      ie_open('a', null, null, 'href', 'github.com/metal/metal-soy-critic');
      itext('metal-soy-critic');
      ie_close('a');
      itext('.');
      ie_close('li');
      ie_close('ol');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('To run the command  \'check_sf *');
      ie_open('em');
      itext('/');
      ie_close('em');
      itext('.jsp\', you must perform the following:');
      ie_close('p');
      ie_open('ol');
      ie_open('li');
      itext('In the terminal:');
      ie_close('li');
      ie_close('ol');
      $templateAlias2({ code: '\'sudo npm install -g check-source-formatting\'', mode: 'text' }, null, opt_ijData);
      ie_open('ol', null, null, 'start', '2');
      ie_open('li');
      itext('Any questions, access github.com/natecavanaugh.');
      ie_close('li');
      ie_close('ol');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Do you want to run tests?');
      ie_close('h2');
      ie_open('ol');
      ie_open('li');
      ie_open('p');
      itext('In the terminal, access the test file of the folder containing the modified code.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Unit tests:');
      ie_close('p');
      $templateAlias2({ code: '\'gw test\'', mode: 'text' }, null, opt_ijData);
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Integration Tests:');
      ie_close('p');
      $templateAlias2({ code: '\'gw testIntegration\'', mode: 'text' }, null, opt_ijData);
      ie_open('ul');
      ie_open('li');
      itext('Something\'s Wrong ?');
      ie_open('ol');
      ie_open('li');
      itext('In the terminal, run the command:');
      $templateAlias2({ code: '\'telnet localhost 11311\'', mode: 'text' }, null, opt_ijData);
      ie_close('li');
      ie_open('li');
      itext('Check to see if the test file has been installed and uninstalled.');
      $templateAlias2({ code: '\'uninstall _NUMBER_FILE\'', mode: 'text' }, null, opt_ijData);
      ie_open('ul');
      ie_open('li');
      itext('Observe the test file number and replace in \'XXX\'');
      ie_close('li');
      ie_open('li');
      itext('To quit telnet: control + \']\' .');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Repeat the tests!');
      ie_close('strong');
      ie_close('li');
      ie_close('ol');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_close('ol');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Run the command \'Ant all\'');
      ie_close('h2');
      ie_open('ol');
      ie_open('li');
      itext('Drop the server.');
      ie_close('li');
      ie_open('li');
      itext('Access the life-portal.');
      ie_close('li');
      ie_open('li');
      itext('Git clean -fdx.');
      ie_close('li');
      ie_open('li');
      itext('Git pull upstream master.');
      ie_close('li');
      ie_open('li');
      itext('Git push origin master.');
      ie_close('li');
      ie_open('li');
      itext('Run the command: \'Ant all\'.');
      ie_close('li');
      ie_close('ol');
      ie_close('article');
      ie_void('article', null, null, 'id', '5');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param810 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'bpelZ.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var bpelZ = function (_Component) {
  _inherits(bpelZ, _Component);

  function bpelZ() {
    _classCallCheck(this, bpelZ);

    return _possibleConstructorReturn(this, (bpelZ.__proto__ || Object.getPrototypeOf(bpelZ)).apply(this, arguments));
  }

  return bpelZ;
}(_metalComponent2.default);

_metalSoy2.default.register(bpelZ, templates);
exports.bpelZ = bpelZ;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[326]);