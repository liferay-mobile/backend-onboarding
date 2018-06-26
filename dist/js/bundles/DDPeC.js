var pageComponent =
webpackJsonppageComponent([3],{

/***/ 328:
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

var _eclipseSoy = __webpack_require__(329);

var _eclipseSoy2 = _interopRequireDefault(_eclipseSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DDPeC = function (_Component) {
  _inherits(DDPeC, _Component);

  function DDPeC() {
    _classCallCheck(this, DDPeC);

    return _possibleConstructorReturn(this, (DDPeC.__proto__ || Object.getPrototypeOf(DDPeC)).apply(this, arguments));
  }

  return DDPeC;
}(_metalComponent2.default);

;

_metalSoy2.default.register(DDPeC, _eclipseSoy2.default);

exports.default = DDPeC;

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.DDPeC = undefined;

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

  // This file was automatically generated from eclipse.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace DDPeC.
   * @public
   */

  goog.module('DDPeC.incrementaldom');

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
    var param871 = function param871() {
      ie_open('h6');
      var dyn50 = opt_data.page.description;
      if (typeof dyn50 == 'function') dyn50();else if (dyn50 != null) itext(dyn50);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Eclipse crashing?');
      ie_close('h2');
      ie_open('ol');
      ie_open('li');
      itext('Access \' Eclipse -> Content -> Eclipse -> eclipse.ini \'.');
      ie_close('li');
      ie_open('li');
      itext('Edit the file on the line that contains \'Xms\' and \' Xmx\' with the amount of space.');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('E.g.:');
      ie_close('strong');
      itext(' Xms4G.');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_close('ol');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Problems getting access to debug mode in eclipse?');
      ie_close('h2');
      ie_open('ol');
      ie_open('li');
      itext('Check your ');
      ie_open('strong');
      itext('setenv.sh');
      ie_close('strong');
      itext(' file located in the bin folder of the tomcat.');
      ie_close('li');
      ie_open('li');
      itext('Make sure the contents of the file match the text below:');
      ie_close('li');
      ie_close('ol');
      $templateAlias2({ code: 'CATALINA_OPTS="$CATALINA_OPTS -Dfile.encoding=UTF8 -Djava.net.preferIPv4Stack=true  -Dorg.apache.catalina.loader.WebappClassLoader.ENABLE_CLEAR_REFERENCES=false -Duser.timezone=GMT -Xdebug -Xrunjdwp:transport=dt_socket,address=8000,server=y,suspend=n"\nJMX_OPTS="-Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.port=8099 -Dcom.sun.management.jmxremote.ssl=false"\n\nCATALINA_OPTS="${CATALINA_OPTS} ${JMX_OPTS}"\n\nif [ "$1" = "jacoco" ]\nthen\n    JACOCO_OPTS="-javaagent:/YOUR_PATH/bundles/liferay-portal/tomcat-8.0.32/bin/jacocoagent.jar=destfile=/YOUR_PATH/liferay-portal/jacoco/liferay-jacoco.exec,excludes=,includes=*,output=file,append=true"\n    CATALINA_OPTS="${CATALINA_OPTS} ${JACOCO_OPTS}"\n    shift\nfi\n\nCATALINA_OPTS="${CATALINA_OPTS} -javaagent:/YOUR_PATH/liferay-portal/lib/portal/aspectj-weaver.jar -Dorg.aspectj.weaver.loadtime.configuration=com/liferay/aspectj/aop.xml"\n\nJPDA_ADDRESS="8000"', mode: 'text' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Indentation Help ?');
      ie_close('h2');
      ie_open('ol');
      ie_open('li');
      itext('Download plugin ');
      ie_open('strong');
      itext('Arbitrary Lines');
      ie_close('strong');
      itext(' .');
      ie_close('li');
      ie_open('li');
      itext('Help -> Eclipse Marketplace');
      ie_close('li');
      ie_open('li');
      itext('Access the advanced settings.');
      ie_open('ul');
      ie_open('li');
      itext('Eclipse -> Preferences -> General -> Editors -> Text Editors -> Arbitrary Lines -> Show Advanced Configuration');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_open('li');
      itext('Enable checkbox \'character size override\' .');
      ie_close('li');
      ie_open('li');
      itext('Edit \'Override character width\' field for 6.65.');
      ie_close('li');
      ie_close('ol');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param871 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'DDPeC.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var DDPeC = function (_Component) {
  _inherits(DDPeC, _Component);

  function DDPeC() {
    _classCallCheck(this, DDPeC);

    return _possibleConstructorReturn(this, (DDPeC.__proto__ || Object.getPrototypeOf(DDPeC)).apply(this, arguments));
  }

  return DDPeC;
}(_metalComponent2.default);

_metalSoy2.default.register(DDPeC, templates);
exports.DDPeC = DDPeC;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[328]);