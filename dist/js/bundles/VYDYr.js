var pageComponent =
webpackJsonppageComponent([0],{

/***/ 334:
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

var _sourceTreeSoy = __webpack_require__(335);

var _sourceTreeSoy2 = _interopRequireDefault(_sourceTreeSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VYDYr = function (_Component) {
  _inherits(VYDYr, _Component);

  function VYDYr() {
    _classCallCheck(this, VYDYr);

    return _possibleConstructorReturn(this, (VYDYr.__proto__ || Object.getPrototypeOf(VYDYr)).apply(this, arguments));
  }

  return VYDYr;
}(_metalComponent2.default);

;

_metalSoy2.default.register(VYDYr, _sourceTreeSoy2.default);

exports.default = VYDYr;

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.VYDYr = undefined;

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

  // This file was automatically generated from source-tree.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace VYDYr.
   * @public
   */

  goog.module('VYDYr.incrementaldom');

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
    var param939 = function param939() {
      ie_open('h6');
      var dyn53 = opt_data.page.description;
      if (typeof dyn53 == 'function') dyn53();else if (dyn53 != null) itext(dyn53);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('New Bug?');
      ie_close('h2');
      ie_open('ol');
      ie_open('li');
      itext('Access the SourceTree.');
      ie_close('li');
      ie_open('li');
      itext('Update main branch (pull).');
      ie_close('li');
      ie_open('li');
      itext('Create a local branch only to work on the bug fixes.');
      ie_open('ul');
      ie_open('li');
      itext('Remotes -> Upstream -> Master -> Checkout');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_open('li');
      itext('Nomeie a nova branch pelo c\xF3digo do bug.');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('E.g.:');
      ie_close('strong');
      itext(' LPS - 1234.');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_close('ol');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Do you want to commit?');
      ie_close('h2');
      ie_open('ol');
      ie_open('li');
      itext('Check for inconsistencies in the changed code.');
      ie_close('li');
      ie_open('li');
      itext('Run testes.');
      ie_close('li');
      ie_open('li');
      itext('Save the work.');
      ie_open('ul');
      ie_open('li');
      itext('Save as Stache.');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_open('li');
      itext('Update master branch (pull).');
      ie_close('li');
      ie_open('li');
      itext('Commit');
      ie_open('ul');
      ie_open('li');
      itext('Your changed code will be in \'File status\'');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_open('li');
      itext('Perform push (enable \'force push\').');
      ie_open('ul');
      ie_open('li');
      itext('If the checkbox is not showing, enable it via: SourceTree -> Preferences -> Advanced -> Allow force push.');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_open('li');
      itext('Run the pull request through the terminal.');
      $templateAlias2({ code: '\'gh pr -s liferay\'', mode: 'text' }, null, opt_ijData);
      ie_close('li');
      ie_close('ol');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Confusion after committing?');
      ie_close('h2');
      ie_open('h6');
      itext('Did you commit any separate commit that should have gone next to another or missed the message of a commit? You can solve the problem by:');
      ie_close('h6');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('Interactive Rebase');
      ie_close('strong');
      ie_close('li');
      ie_close('ul');
      ie_open('ol');
      ie_open('li');
      itext('Identify the commit that generated the problem.');
      ie_close('li');
      ie_open('li');
      itext('Select the commit just below it and choose the \'Rebase children of XXX interactively\' option.');
      ie_close('li');
      ie_open('li');
      itext('Pop-up will open and a list of commits will be displayed. Identify the one you want.');
      ie_close('li');
      ie_open('li');
      itext('To edit the message of a commit, select it and click \'Edit message\'.');
      ie_close('li');
      ie_open('li');
      itext('To join two separate commits, drag the desired commit one position above the other desired one and click \'Squash with previous\'.');
      ie_close('li');
      ie_close('ol');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('Reset Master');
      ie_close('strong');
      ie_close('li');
      ie_close('ul');
      ie_open('ol');
      ie_open('li');
      itext('Identify the commit that generated the problem.');
      ie_close('li');
      ie_open('li');
      itext('Select the commit just below it and choose the option \'Reset master to this branch\'.');
      ie_close('li');
      ie_open('li');
      itext('Any modifications made by you before this commit will return to the file status.');
      ie_close('li');
      ie_open('li');
      itext('Reorganize your commits.');
      ie_close('li');
      ie_close('ol');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param939 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'VYDYr.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var VYDYr = function (_Component) {
  _inherits(VYDYr, _Component);

  function VYDYr() {
    _classCallCheck(this, VYDYr);

    return _possibleConstructorReturn(this, (VYDYr.__proto__ || Object.getPrototypeOf(VYDYr)).apply(this, arguments));
  }

  return VYDYr;
}(_metalComponent2.default);

_metalSoy2.default.register(VYDYr, templates);
exports.VYDYr = VYDYr;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[334]);