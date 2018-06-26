var pageComponent =
webpackJsonppageComponent([36],{

/***/ 276:
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

var _indexSoy = __webpack_require__(277);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FdVbw = function (_Component) {
  _inherits(FdVbw, _Component);

  function FdVbw() {
    _classCallCheck(this, FdVbw);

    return _possibleConstructorReturn(this, (FdVbw.__proto__ || Object.getPrototypeOf(FdVbw)).apply(this, arguments));
  }

  return FdVbw;
}(_metalComponent2.default);

;

_metalSoy2.default.register(FdVbw, _indexSoy2.default);

exports.default = FdVbw;

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.FdVbw = undefined;

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
   * @fileoverview Templates in namespace FdVbw.
   * @public
   */

  goog.module('FdVbw.incrementaldom');

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
    var param584 = function param584() {
      ie_open('h6');
      var dyn38 = opt_data.page.description;
      if (typeof dyn38 == 'function') dyn38();else if (dyn38 != null) itext(dyn38);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('How to configure a Loop bundle ?');
      ie_close('h2');
      ie_open('ol');
      ie_open('li');
      ie_open('p');
      itext('Clone the repositories');
      ie_close('p');
      $templateAlias2({ code: 'git clone git@github.com:liferay/liferay-portal-ee.git\ngit clone git@github.com:liferay/liferay-plugins-ee.git', mode: 'text' }, null, opt_ijData);
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Actually the Loop server is using the portal 6.2 version that using ');
      ie_open('strong');
      itext('Java 1.7');
      ie_close('strong');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('You can download this version here (');
      ie_open('a', null, null, 'href', 'http://www.oracle.com/technetwork/java/javase/downloads/java-archive-downloads-javase7-521261.html#jdk-7u80-oth-JPR');
      itext('http://www.oracle.com/technetwork/java/javase/downloads/java-archive-downloads-javase7-521261.html#jdk-7u80-oth-JPR');
      ie_close('a');
      itext(')');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('It is strongly recommended to use the ');
      ie_open('code');
      itext('.bash_profile');
      ie_close('code');
      itext(' to switch the Java version. To help you, you can add these alias to switch easily in terminal');
      ie_close('p');
      $templateAlias2({ code: 'alias java7="export JAVA_HOME=(/usr/libexec/java_home -v 1.7)"\nalias java8="export JAVA_HOME=(/usr/libexec/java_home -v 1.8)"', mode: 'text' }, null, opt_ijData);
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('You need to install a compatible version of ');
      ie_open('code');
      itext('Ant');
      ie_close('code');
      itext(' with ');
      ie_open('code');
      itext('Java 7');
      ie_close('code');
      itext(', only version ');
      ie_open('code');
      itext('1.9.x');
      ie_close('code');
      itext(' is compatible');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('To install using brew, you can run this command');
      $templateAlias2({ code: 'brew install ant@1.9', mode: 'ruby' }, null, opt_ijData);
      ie_close('li');
      ie_open('li');
      itext('To link this old version, use the command');
      $templateAlias2({ code: 'brew link ant@1.9 --force', mode: 'ruby' }, null, opt_ijData);
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Add the file ');
      ie_open('code');
      itext('app.server.mac_username.properties');
      ie_close('code');
      itext(' in ');
      ie_open('strong');
      ie_open('em');
      itext('root directory of portal');
      ie_close('em');
      ie_close('strong');
      itext(' and in ');
      ie_open('strong');
      ie_open('em');
      itext('root directory of plugins');
      ie_close('em');
      ie_close('strong');
      ie_close('p');
      $templateAlias2({ code: 'app.server.type=tomcat\napp.server.tomcat.version=7.0.62\napp.server.parent.dir=${project.dir}/../bundles/loop-portal-ee-6.2.x', mode: 'text' }, null, opt_ijData);
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Now we are ready to deploy the ');
      ie_open('code');
      itext('portal');
      ie_close('code');
      itext(' and of ```loop portlet````');
      ie_close('p');
      $templateAlias2({ code: 'java7\ncd {portal.dir}\nant all\n\ncd {loop.portlet.dir}\nant all', mode: 'text' }, null, opt_ijData);
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Create the ');
      ie_open('code');
      itext('deploy.sh');
      ie_close('code');
      itext(' file on root folder');
      ie_close('p');
      $templateAlias2({ code: '#!/bin/sh\n#export JAVA_HOME=(/usr/libexec/java_home -v 1.7)\nexport JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.7.0_80.jdk/Contents/Home\n\nant -buildfile ./liferay-plugins-ee/hooks/portal-compat-hook/build.xml clean deploy\nant -buildfile ./liferay-plugins-ee/portlets/asset-entry-set-portlet/build.xml clean deploy\nant -buildfile ./liferay-plugins-ee/portlets/asset-sharing-portlet/build.xml clean deploy\nant -buildfile ./liferay-plugins-ee/portlets/loop-portlet/build.xml clean deploy\nant -buildfile ./liferay-plugins-ee/portlets/push-notifications-portlet/build.xml clean deploy\nant -buildfile ./liferay-plugins-ee/portlets/token-auth-portlet/build.xml clean deploy\nant -buildfile ./liferay-plugins-ee/themes/loop-theme/build.xml clean deploy\nant -buildfile ./liferay-plugins-ee/webs/url-metadata-scraper-web/build.xml clean deploy\n\necho "auth.token.ignore.portlets=82,1_WAR_loopportlet" > ./bundles/tomcat-7.0.62/webapps/ROOT/WEB-INF/classes/portal-ext.properties', mode: 'text' }, null, opt_ijData);
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Run ');
      ie_open('code');
      itext('deploy.sh');
      ie_close('code');
      itext(' in root folder from both ');
      ie_open('code');
      itext('portal.dir');
      ie_close('code');
      itext(' and ');
      ie_open('code');
      itext('loop.portlet.dir');
      ie_close('code');
      ie_close('p');
      $templateAlias2({ code: './deploy.sh run', mode: 'text' }, null, opt_ijData);
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Create a file ');
      ie_open('code');
      itext('portal-ext.properties');
      ie_close('code');
      itext(' in ');
      ie_open('strong');
      ie_open('em');
      itext('bundles/loop-portal-ee-6.2.x/tomcat-7.0.62/webapps/ROOT/WEB-INF/classes');
      ie_close('em');
      ie_close('strong');
      itext(' with the content');
      ie_close('p');
      $templateAlias2({ code: 'auth.token.ignore.portlets=82,1_WAR_loopportlet', mode: 'text' }, null, opt_ijData);
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Start the tomcat from ');
      ie_open('code');
      itext('bundle.tomcat.dir/bin');
      ie_close('code');
      ie_close('p');
      $templateAlias2({ code: './catalina.sh run', mode: 'text' }, null, opt_ijData);
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('After started the server, you need to configure the database in user interface');
      ie_close('p');
      ie_close('li');
      ie_close('ol');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Additional information');
      ie_close('h2');
      ie_open('ol');
      ie_open('li');
      itext('You need to put the token auth in ');
      ie_open('strong');
      ie_open('em');
      itext('/bundles/loop-portal-ee-6.2.x/tomcat-7.0.62/webapps/token-auth-portlet/WEB-INF/classes/portlet.properties');
      ie_close('em');
      ie_close('strong');
      itext(' (can be any value)');
      $templateAlias2({ code: 'token.secret = ANY_VALUE', mode: 'text' }, null, opt_ijData);
      ie_close('li');
      ie_open('li');
      itext('Create a file ');
      ie_open('code');
      itext('portal-ext.properties');
      ie_close('code');
      itext(' in ');
      ie_open('strong');
      ie_open('em');
      itext('loop/server/bundles/loop-portal-ee-6.2.x/tomcat-7.0.62/webapps/ROOT/WEB-INF/classes');
      ie_close('em');
      ie_close('strong');
      itext(' with the content');
      $templateAlias2({ code: 'auth.token.ignore.portlets=82,1_WAR_loopportlet', mode: 'text' }, null, opt_ijData);
      ie_close('li');
      ie_close('ol');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Configure Push Notifications');
      ie_close('h2');
      ie_open('ol');
      ie_open('li');
      ie_open('p');
      itext('Give permission to all users allow register their push token in ');
      ie_open('strong');
      ie_open('em');
      itext('portal');
      ie_close('em');
      ie_close('strong');
      itext(', in Roles > Define permission > configuration > push notification');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'src', '/images/role_loop_person.png');
      ie_close('img');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Configure Android API Key using our development key. Put this API Key ');
      ie_open('a', null, null, 'href', 'https://github.com/liferay-mobile/mobile-passwords/blob/master/README.markdown#loop-push-android-api-key-development');
      itext('Push Android API Key Development');
      ie_close('a');
      ie_open('img', null, null, 'src', '/images/push_apikey_android.png');
      ie_close('img');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Configure the iOS certificate, the development certificate can be found in ');
      ie_open('strong');
      ie_open('em');
      itext('loop/liferay-loop-ios/certificates/push/development/certificate_sandbox.p12');
      ie_close('em');
      ie_close('strong');
      itext(' and the password is ');
      ie_open('a', null, null, 'href', 'https://github.com/liferay-mobile/mobile-passwords/blob/master/README.markdown#loop-push-ios-certificate-password');
      itext('Push iOS Certificate password');
      ie_close('a');
      ie_open('img', null, null, 'src', '/images/push_certificate_ios.png');
      ie_close('img');
      ie_close('p');
      ie_close('li');
      ie_close('ol');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param584 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'FdVbw.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var FdVbw = function (_Component) {
  _inherits(FdVbw, _Component);

  function FdVbw() {
    _classCallCheck(this, FdVbw);

    return _possibleConstructorReturn(this, (FdVbw.__proto__ || Object.getPrototypeOf(FdVbw)).apply(this, arguments));
  }

  return FdVbw;
}(_metalComponent2.default);

_metalSoy2.default.register(FdVbw, templates);
exports.FdVbw = FdVbw;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[276]);