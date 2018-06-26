var pageComponent =
webpackJsonppageComponent([17],{

/***/ 306:
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

var _indexSoy = __webpack_require__(307);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LvOjA = function (_Component) {
  _inherits(LvOjA, _Component);

  function LvOjA() {
    _classCallCheck(this, LvOjA);

    return _possibleConstructorReturn(this, (LvOjA.__proto__ || Object.getPrototypeOf(LvOjA)).apply(this, arguments));
  }

  return LvOjA;
}(_metalComponent2.default);

;

_metalSoy2.default.register(LvOjA, _indexSoy2.default);

exports.default = LvOjA;

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.LvOjA = undefined;

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
   * @fileoverview Templates in namespace LvOjA.
   * @public
   */

  goog.module('LvOjA.incrementaldom');

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
    var param500 = function param500() {
      ie_open('h6');
      var dyn34 = opt_data.page.description;
      if (typeof dyn34 == 'function') dyn34();else if (dyn34 != null) itext(dyn34);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Ticket Management');
      ie_close('h2');
      ie_open('p');
      itext('All the work in progress in engineering is monitored by a issue management (Jira). This system provides bug tracking, issue tracking, and project management functions. In other words, helps the team to keep an eye on all the activities day by day. Every team has its own kanban board with all your integrants as participants. In that way, Everyone knows which activity is aimed at who and their progress throughout the sprint. The image below shows a kanban board, which it can be noticed the participants and their issues.');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'src', '/images/kanbanBoard.png');
      ie_close('img');
      ie_close('p');
      ie_open('p');
      itext('This image below shows one created ticket:');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'src', '/images/bugIssue.png');
      ie_close('img');
      ie_close('p');
      ie_open('p');
      itext('There are 5 types of work:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('Story:');
      ie_close('strong');
      itext('  Small unit of work to deliver a particular value back to the customer.');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Bug:');
      ie_close('strong');
      itext(' An error in a system that causes it to produce an incorrect or unexpected result.');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Regression bug:');
      ie_close('strong');
      itext(' Regression is when something that used to work fine does not work properly anymore.');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Task:');
      ie_close('strong');
      itext(' Reflect work or initiatives that are very technical.');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Pull Request:');
      ie_close('strong');
      itext(' Reviews from different teams and components.');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Every work has a different workflow from the creation of the ticket until the delivery of the expected result. This example below shows the step by step and the workflow to a new user story:');
      ie_close('p');
      ie_open('ol');
      ie_open('li');
      ie_open('strong');
      itext('Open:');
      ie_close('strong');
      itext(' Product Manager or Technical Leader create the user story.');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Backlog:');
      ie_close('strong');
      itext(' Product Designer development.');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Ready for development:');
      ie_close('strong');
      itext(' List of stories ready to be developed.');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Selected for development:');
      ie_close('strong');
      itext(' List of stories committed to be developed in the next 2 weeks.');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('In Development:');
      ie_close('strong');
      itext(' Engineers start working on the story.');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('In Review:');
      ie_close('strong');
      itext(' Once development is completed, peer review, QA review and validation and, Brian\u2019s review.');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Documentation:');
      ie_close('strong');
      itext(' Does the story need documentation? Generate a draft!');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Design Review:');
      ie_close('strong');
      itext(' Product Designer make sure that the story requirements were developed according to the guidelines provided.');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('PM Review:');
      ie_close('strong');
      itext(' Product Manager validates the use cases.');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Closed.');
      ie_close('strong');
      ie_close('li');
      ie_close('ol');
      ie_open('p');
      ie_open('img', null, null, 'src', '/images/userStoryWF.png');
      ie_close('img');
      ie_close('p');
      ie_open('p');
      itext('Bugs are the type of work that needs to be under control, it means that should not exceed a certain limited number. To guide the team which bug they should resolve first, there is a classification based on the ');
      ie_open('a', null, null, 'href', 'https://docs.google.com/spreadsheets/d/1QQn7In1KPTaEe_gy95EoF-ELl0TvBHBaNWqwTV2SxNY/edit#gid=5');
      itext('portal risk matrix');
      ie_close('a');
      itext(' that classifies the bug on a scale of 1-5. The developers should resolved the bugs in the descending order of their fix priority.');
      ie_close('p');
      ie_open('p');
      itext('This image below shows the successful ticket management to the bugs and regressions bugs workflow:');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'src', '/images/bugWF.png');
      ie_close('img');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Meetings');
      ie_close('h2');
      ie_open('p');
      itext('The team meetings have the objective to verify the status of the work, but also to check if there is any need or trouble. For a meeting to be productive, it is necessary to list the different motives to be discussed and to mark different sessions to discuss each topic separately. In this way, the meeting does not become exhaustive or confusing.');
      ie_close('p');
      ie_open('p');
      itext('There are different types of meetings:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('Backlog Refinement:');
      ie_close('strong');
      itext(' An event to refine and update the backlog with initial effort for each ticket and an opportunity to alignment and re-evaluate tickets and priorities. This meeting will occur every two weeks, in the week before the Planning meeting. It must involve the product manager, technical leader, product designer.');
      ie_open('ul');
      ie_open('li');
      itext('every two weeks, in the week before planning meeting.');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Planning:');
      ie_close('strong');
      itext(' Understand the stories with the proper acceptance criteria. The Product Manager will present all the stories for the new cycle and the team will assess each story, commit/accepted it to the sprint and breakdown it into small subtasks.');
      ie_open('ul');
      ie_open('li');
      itext('every Monday, check the calendar to see the schedule.');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Stand Up:');
      ie_close('strong');
      itext(' An event for the development team to synchronize activities.');
      ie_open('ul');
      ie_open('li');
      itext('daily at 2pm.');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Product Sync-up:');
      ie_close('strong');
      itext(' An event to share and evolve the product collaboratively.');
      ie_open('ul');
      ie_open('li');
      itext('Whenever there is a need.');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Retrospective:');
      ie_close('strong');
      itext(' An opportunity for the team to inspect itself and create a plan for improvements to be done during the next iteration.');
      ie_open('ul');
      ie_open('li');
      itext('Every two weeks.');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Guild Reunion:');
      ie_close('strong');
      itext(' An event to talk about general topics of the backend as a team or to discuss about a new technology. It is a open space to share any interesting points of view and to suggest any kind of improvements.');
      ie_open('ul');
      ie_open('li');
      itext('Every tuesday at 10am.');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param500 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'LvOjA.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var LvOjA = function (_Component) {
  _inherits(LvOjA, _Component);

  function LvOjA() {
    _classCallCheck(this, LvOjA);

    return _possibleConstructorReturn(this, (LvOjA.__proto__ || Object.getPrototypeOf(LvOjA)).apply(this, arguments));
  }

  return LvOjA;
}(_metalComponent2.default);

_metalSoy2.default.register(LvOjA, templates);
exports.LvOjA = LvOjA;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[306]);