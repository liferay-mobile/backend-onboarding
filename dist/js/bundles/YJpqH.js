var pageComponent =
webpackJsonppageComponent([28],{

/***/ 292:
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

var _indexSoy = __webpack_require__(293);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YJpqH = function (_Component) {
  _inherits(YJpqH, _Component);

  function YJpqH() {
    _classCallCheck(this, YJpqH);

    return _possibleConstructorReturn(this, (YJpqH.__proto__ || Object.getPrototypeOf(YJpqH)).apply(this, arguments));
  }

  return YJpqH;
}(_metalComponent2.default);

;

_metalSoy2.default.register(YJpqH, _indexSoy2.default);

exports.default = YJpqH;

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.YJpqH = undefined;

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
   * @fileoverview Templates in namespace YJpqH.
   * @public
   */

  goog.module('YJpqH.incrementaldom');

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
    var param757 = function param757() {
      ie_open('h6');
      var dyn46 = opt_data.page.description;
      if (typeof dyn46 == 'function') dyn46();else if (dyn46 != null) itext(dyn46);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Development');
      ie_close('h2');
      ie_open('p');
      itext('It\'s a SDK to use the WeDeploy easily in your mobile. You can use a cool feature like DATA in realtime to create reactive APPs.');
      ie_close('p');
      ie_open('h2');
      itext('Repository');
      ie_close('h2');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://github.com/wedeploy/wedeploy-sdk-android');
      itext('https://github.com/wedeploy/wedeploy-sdk-android');
      ie_close('a');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Release Process for the WeDeploy SDKs');
      ie_close('h2');
      ie_open('p');
      itext('This document describes the release process of our public SDKs. It exists to improve visibility among team members and it should be used by project maintainers to know what needs to be updated on every new release.');
      ie_close('p');
      ie_open('h3');
      itext('WeDeploy Java projects can be released in the following repositories:');
      ie_close('h3');
      ie_open('ol');
      ie_open('li');
      itext('Public ');
      ie_open('strong');
      ie_open('em');
      itext('Maven Central');
      ie_close('em');
      ie_close('strong');
      itext(' (https://search.maven.org), for all the artifacts that have to be publically available. The releasing is done in two steps: first publishing artifacts to ');
      ie_open('strong');
      ie_open('em');
      itext('Sonatype');
      ie_close('em');
      ie_close('strong');
      itext(' (https://oss.sonatype.org) and then releasing them to Maven Central.');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      ie_open('em');
      itext('Wedeploy Nexus');
      ie_close('em');
      ie_close('strong');
      itext(' repo, for private artifacts needed by the infrastructure and/or for snapshots of public artifacts.');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      ie_open('em');
      itext('Bintray');
      ie_close('em');
      ie_close('strong');
      itext(' (https://bintray.com) - another public repo, used just for the Android artifacts.');
      ie_close('li');
      ie_close('ol');
      ie_open('p');
      itext('Note: for the purpose of local development, all artifacts can be published locally.');
      ie_close('p');
      ie_open('p');
      itext('Public Java repos (on Maven central)  are:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('common');
      ie_close('li');
      ie_open('li');
      itext('api-java');
      ie_close('li');
      ie_open('li');
      itext('api-java.api-client');
      ie_close('li');
      ie_open('li');
      itext('wedeploy-android-sdk');
      ie_close('li');
      ie_close('ul');
      ie_open('h3');
      itext('Step 0 : Configuration');
      ie_close('h3');
      ie_open('h3');
      itext('WeDeploy Nexus');
      ie_close('h3');
      ie_open('p');
      itext('For the Wedeploy Nexus, you need these in ');
      ie_open('code');
      itext('~/.gradle/gradle.properties');
      ie_close('code');
      itext(':');
      ie_close('p');
      $templateAlias2({ code: 'wedeployRepo=https://repository.liferay.com/nexus/content/repositories/xanadu/\nwedeployRepoUsername=...\nwedeployRepoPassword=...', mode: 'text' }, null, opt_ijData);
      ie_open('h3');
      itext('Sonatype & Maven Central');
      ie_close('h3');
      ie_open('p');
      itext('For the Sonatype, you need these in ');
      ie_open('code');
      itext('~/.gradle/gradle.properties');
      ie_close('code');
      itext(':');
      ie_close('p');
      $templateAlias2({ code: 'sonatypeUsername=...\nsonatypePassword=...', mode: 'text' }, null, opt_ijData);
      ie_open('p');
      itext('To get Sonatype credentials, you have to:');
      ie_close('p');
      ie_open('ol');
      ie_open('li');
      itext('Sign up for a Sonatype Jira account: https://issues.sonatype.org/secure/Signup!default.jspa');
      ie_close('li');
      ie_open('li');
      itext('Ask for user rights to publish to ');
      ie_open('code');
      itext('wedeloy');
      ie_close('code');
      itext(', refering this issue: https://issues.sonatype.org/browse/OSSRH-30085');
      ie_close('li');
      ie_close('ol');
      ie_open('p');
      itext('Now use your Sonatype jira credentials above.');
      ie_close('p');
      ie_open('h3');
      itext('Bintray');
      ie_close('h3');
      ie_open('p');
      itext('Bintray requires the following environments to be set:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('BINTRAY_USER');
      ie_close('li');
      ie_open('li');
      itext('BINTRAY_KEY');
      ie_close('li');
      ie_close('ul');
      ie_open('h3');
      itext('GPG Keys');
      ie_close('h3');
      ie_open('p');
      itext('Next thing to configure is your GPG keys. Create one and set it in ');
      ie_open('code');
      itext('~/.gradle/gradle.properties');
      ie_close('code');
      itext(':');
      ie_close('p');
      $templateAlias2({ code: 'signing.keyId=...\nsigning.password=...\nsigning.secretKeyRingFile=...', mode: 'text' }, null, opt_ijData);
      ie_open('p');
      itext('Publishing to Maven Central requires all artifacts to be signed.');
      ie_close('p');
      ie_open('h3');
      itext('Step 1 : Publishing');
      ie_close('h3');
      ie_open('ol');
      ie_open('li');
      itext('To publish to Wedeploy Nexus:');
      ie_open('code');
      itext('./gradlew publishJarPublicationToMavenRepository');
      ie_close('code');
      ie_close('li');
      ie_open('li');
      itext('To publish a release to Sonatype:');
      ie_open('strong');
      ie_open('em');
      itext('WEDEPLOY_RELEASE=true ./gradlew publishJarPublicationToSonatypeRepository');
      ie_close('em');
      ie_close('strong');
      ie_close('li');
      ie_open('li');
      itext('To publish a release to Bintray:');
      ie_open('strong');
      ie_open('em');
      itext('WEDEPLOY_RELEASE=true ./gradlew bintray');
      ie_close('em');
      ie_close('strong');
      ie_close('li');
      ie_close('ol');
      ie_open('p');
      itext('Artifacts are now published. Wedeploy Nexus and Bintray artifacts are immediately available. Sonatype artifacts needs to be \u2018released\u2019 to Maven central.');
      ie_close('p');
      ie_open('h3');
      itext('Step 2 : Releasing');
      ie_close('h3');
      ie_open('p');
      itext('Releasing is only needed for Sonatype artifacts - to be released in the Maven central.');
      ie_close('p');
      ie_open('p');
      itext('Just run:');
      ie_open('code');
      itext('./gradlew closeAndReleaseRepository');
      ie_close('code');
      ie_close('p');
      ie_open('p');
      itext('Give it some time for artifact to be available on Maven Central.');
      ie_close('p');
      ie_open('p');
      itext('Optionally, you can do this step in the UI - you can get more information about the issues.');
      ie_close('p');
      ie_open('p');
      itext('For the Bintray - you have to confirm the upload on: https://bintray.com/liferay/liferay-mobile');
      ie_close('p');
      ie_open('h3');
      itext('Step 3 : Update docs and changelog');
      ie_close('h3');
      ie_open('ol');
      ie_open('li');
      itext('Update documentation: Edit ');
      ie_open('a', null, null, 'href', 'https://github.com/wedeploy/wedeploy.com/blob/4403c4becf56f5416bf8c4bdf4f2eaa2f7da8aa4/node/electric/src/site.json#L8');
      itext('site.json');
      ie_close('a');
      itext(' file');
      ie_close('li');
      ie_open('li');
      itext('Update changelog Edit ');
      ie_open('a', null, null, 'href', 'https://github.com/wedeploy/wedeploy.com/blob/master/node/electric/src/pages/updates/apis/android/index.md');
      itext('index.md');
      ie_close('a');
      itext(' file');
      ie_close('li');
      ie_close('ol');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param757 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'YJpqH.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var YJpqH = function (_Component) {
  _inherits(YJpqH, _Component);

  function YJpqH() {
    _classCallCheck(this, YJpqH);

    return _possibleConstructorReturn(this, (YJpqH.__proto__ || Object.getPrototypeOf(YJpqH)).apply(this, arguments));
  }

  return YJpqH;
}(_metalComponent2.default);

_metalSoy2.default.register(YJpqH, templates);
exports.YJpqH = YJpqH;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[292]);