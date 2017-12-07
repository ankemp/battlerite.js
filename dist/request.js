"use strict";var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);var _regenerator = require("babel-runtime/regenerator");var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);var rawRequest = function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(



















    function _callee(method, url) {var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var defaultOpts, fullOpts;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                        defaultOpts = {
                            uri: url,
                            method: method,
                            followRedirect: true,
                            headers: {
                                Accept: "application/vnd.api+json" },

                            json: true,
                            resolveWithFullResponse: true };

                        fullOpts = Object.assign({}, defaultOpts, opts);return _context.abrupt("return",
                        request(fullOpts));case 3:case "end":return _context.stop();}}}, _callee, this);}));return function rawRequest(_x3, _x4) {return _ref.apply(this, arguments);};}();var apiRequest = function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(


    function _callee2(token, method, endpoint) {var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var url, opts, response, resetInMs, parsed, errors, _resetInMs;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                            rateLimitWait);case 2:
                        url = root + "/" + endpoint;
                        opts = {
                            headers: {
                                Authorization: "Bearer " + token,
                                Accept: "application/vnd.api+json" } };


                        if (method === "GET") {
                            opts.qs = params;
                        } else
                        if (method === "POST") {
                            opts.body = params;
                        }
                        response = void 0;_context2.prev = 6;_context2.next = 9;return (

                            rawRequest(method, url, opts));case 9:response = _context2.sent;_context2.next = 32;break;case 12:_context2.prev = 12;_context2.t0 = _context2["catch"](6);if (!(


                        _context2.t0.statusCode && _context2.t0.statusCode === 404)) {_context2.next = 18;break;}throw (
                            new APIError("404 Not Found: " + url, 404));case 18:if (!(

                        _context2.t0.statusCode && _context2.t0.statusCode === 429)) {_context2.next = 25;break;}
                        // If we were rate limited (despite efforts to avoid it later below),
                        // warn the user and wait until the rate limit has been reset
                        // tslint:disable-next-line
                        console.warn("[WARN] Rate limited, waiting");
                        resetInMs = resetTimeInMs(response.headers["x-ratelimit-reset"]);
                        rateLimitWait = sleep(resetInMs);
                        // Repeat the request after our rate limit has been reset
                        return _context2.abrupt("return", apiRequest(token, method, endpoint, params));case 25:if (!(

                        _context2.t0.error && _context2.t0.error[0] === "{")) {_context2.next = 31;break;}
                        // Specific API error, pass to user
                        parsed = JSON.parse(_context2.t0.error);
                        errors = parsed.errors.
                        map(function (e) {
                            if (e.description) {
                                return e.title + ": " + e.description;
                            } else
                            {
                                return e.title;
                            }
                        }).
                        join(", ");throw (
                            new APIError(errors));case 31:throw _context2.t0;case 32:






                        // Try to avoid hitting the API if we're going to be rate limited
                        if (response.headers["x-ratelimit-remaining"] === "0") {
                            _resetInMs = resetTimeInMs(response.headers["x-ratelimit-reset"]);
                            rateLimitWait = sleep(_resetInMs);
                        }return _context2.abrupt("return",
                        response.body);case 34:case "end":return _context2.stop();}}}, _callee2, this, [[6, 12]]);}));return function apiRequest(_x6, _x7, _x8) {return _ref2.apply(this, arguments);};}();var apiRequestPaged = function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(


    function _callee3(token, method, endpoint, params, amount) {var perPage, fetched, page, combined, _combined$data, _combined$included, thisParams, response;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                        perPage = Math.min(5, amount);
                        fetched = 0;
                        page = 0;
                        combined = {
                            data: [],
                            included: [] };case 4:if (!(

                        fetched < amount)) {_context3.next = 15;break;}
                        thisParams = Object.assign({}, params, {
                            "page[offset]": page,
                            "page[limit]": perPage });_context3.next = 8;return (

                            apiRequest(token, method, endpoint, thisParams));case 8:response = _context3.sent;
                        (_combined$data = combined.data).push.apply(_combined$data, (0, _toConsumableArray3.default)(response.data));
                        (_combined$included = combined.included).push.apply(_combined$included, (0, _toConsumableArray3.default)(response.included));
                        fetched += perPage;
                        page++;_context3.next = 4;break;case 15:return _context3.abrupt("return",

                        combined);case 16:case "end":return _context3.stop();}}}, _callee3, this);}));return function apiRequestPaged(_x9, _x10, _x11, _x12, _x13) {return _ref3.apply(this, arguments);};}();function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}Object.defineProperty(exports, "__esModule", { value: true });var request = require("request-promise-native");var root = "https://api.dc01.gamelockerapp.com/shards/global";var APIError = function (_Error) {(0, _inherits3.default)(APIError, _Error);function APIError(message) {var statusCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;(0, _classCallCheck3.default)(this, APIError);var _this = (0, _possibleConstructorReturn3.default)(this, (APIError.__proto__ || Object.getPrototypeOf(APIError)).call(this, message));_this.statusCode = statusCode;return _this;}return APIError;}(Error);exports.APIError = APIError;var resetTimeInMs = function resetTimeInMs(resetTime) {return Math.ceil(parseInt(resetTime, 10) / 1000);};var sleep = function sleep(ms) {return new Promise(function (resolve) {setTimeout(resolve, ms);});};var rateLimitWait = Promise.resolve();exports.rawRequest = rawRequest;exports.apiRequest = apiRequest;

exports.apiRequestPaged = apiRequestPaged;