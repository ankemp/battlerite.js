"use strict";var _regenerator = require("babel-runtime/regenerator");var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("./request");
var utils_1 = require("./utils");
var entityMapper_1 = require("./entityMapper");
var Match_1 = require("./entities/Match");
var Player_1 = require("./entities/Player");var
Client = function () {
    function Client(token) {(0, _classCallCheck3.default)(this, Client);
        this.token = token;
    }(0, _createClass3.default)(Client, [{ key: "getPlayer", value: function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(
            id) {var response;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                                response = void 0;_context.prev = 1;_context.next = 4;return (

                                    request_1.apiRequest(this.token, "GET", "players/" + id));case 4:response = _context.sent;_context.next = 14;break;case 7:_context.prev = 7;_context.t0 = _context["catch"](1);if (!(


                                _context.t0 instanceof request_1.APIError && _context.t0.statusCode === 404)) {_context.next = 13;break;}return _context.abrupt("return",
                                null);case 13:throw _context.t0;case 14:return _context.abrupt("return",



                                entityMapper_1.mapDataToEntity(response.data[0], response.included, Player_1.Player));case 15:case "end":return _context.stop();}}}, _callee, this, [[1, 7]]);}));function getPlayer(_x) {return _ref.apply(this, arguments);}return getPlayer;}() }, { key: "getPlayersById", value: function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(

            ids) {var idsArr, response;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                                idsArr = utils_1.ensureArray(ids);
                                response = void 0;_context2.prev = 2;_context2.next = 5;return (

                                    request_1.apiRequest(this.token, "GET", "players", {
                                        "filter[playerIds]": idsArr.join(",") }));case 5:response = _context2.sent;_context2.next = 15;break;case 8:_context2.prev = 8;_context2.t0 = _context2["catch"](2);if (!(



                                _context2.t0 instanceof request_1.APIError && _context2.t0.statusCode === 404)) {_context2.next = 14;break;}return _context2.abrupt("return",
                                []);case 14:throw _context2.t0;case 15:return _context2.abrupt("return",



                                entityMapper_1.mapDataToEntity(response.data, response.included, Player_1.Player));case 16:case "end":return _context2.stop();}}}, _callee2, this, [[2, 8]]);}));function getPlayersById(_x2) {return _ref2.apply(this, arguments);}return getPlayersById;}() }, { key: "getPlayersByName", value: function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(

            names) {var namesArr, response;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                                namesArr = utils_1.ensureArray(names);
                                response = void 0;_context3.prev = 2;_context3.next = 5;return (

                                    request_1.apiRequest(this.token, "GET", "players", {
                                        "filter[playerNames]": namesArr.join(",") }));case 5:response = _context3.sent;_context3.next = 15;break;case 8:_context3.prev = 8;_context3.t0 = _context3["catch"](2);if (!(



                                _context3.t0 instanceof request_1.APIError && _context3.t0.statusCode === 404)) {_context3.next = 14;break;}return _context3.abrupt("return",
                                []);case 14:throw _context3.t0;case 15:return _context3.abrupt("return",



                                entityMapper_1.mapDataToEntity(response.data, response.included, Player_1.Player));case 16:case "end":return _context3.stop();}}}, _callee3, this, [[2, 8]]);}));function getPlayersByName(_x3) {return _ref3.apply(this, arguments);}return getPlayersByName;}() }, { key: "getMatch", value: function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(

            id) {var response;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                                response = void 0;_context4.prev = 1;_context4.next = 4;return (

                                    request_1.apiRequest(this.token, "GET", "matches/" + id));case 4:response = _context4.sent;_context4.next = 14;break;case 7:_context4.prev = 7;_context4.t0 = _context4["catch"](1);if (!(


                                _context4.t0 instanceof request_1.APIError && _context4.t0.statusCode === 404)) {_context4.next = 13;break;}return _context4.abrupt("return",
                                null);case 13:throw _context4.t0;case 14:return _context4.abrupt("return",



                                entityMapper_1.mapDataToEntity(response.data[0], response.included, Match_1.Match));case 15:case "end":return _context4.stop();}}}, _callee4, this, [[1, 7]]);}));function getMatch(_x4) {return _ref4.apply(this, arguments);}return getMatch;}() }, { key: "searchMatches", value: function () {var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {var

                filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;var sort = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "createdAt";var params, response;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                                filters = filters || {};
                                params = {};
                                if (filters.playerIds) {
                                    params["filter[playerIds]"] = utils_1.queryArray(filters.playerIds);
                                }
                                if (filters.playerNames) {
                                    params["filter[playerNames]"] = utils_1.queryArray(filters.playerNames);
                                }
                                if (filters.teamNames) {
                                    params["filter[teamNames]"] = utils_1.queryArray(filters.teamNames);
                                }
                                if (filters.gamemode) {
                                    params["filter[gamemode]"] = utils_1.queryArray(filters.gamemode);
                                }
                                if (filters.fromDate) {
                                    params["filter[createdAt-start]"] =
                                    typeof filters.fromDate === "string" ?
                                    filters.fromDate :
                                    filters.fromDate.toISOString();
                                }
                                if (filters.toDate) {
                                    params["filter[createdAt-end]"] =
                                    typeof filters.toDate === "string" ?
                                    filters.toDate :
                                    filters.fromDate.toISOString();
                                }
                                response = void 0;_context5.prev = 9;_context5.next = 12;return (

                                    request_1.apiRequestPaged(this.token, "GET", "matches", params, amount));case 12:response = _context5.sent;_context5.next = 22;break;case 15:_context5.prev = 15;_context5.t0 = _context5["catch"](9);if (!(


                                _context5.t0 instanceof request_1.APIError && _context5.t0.statusCode === 404)) {_context5.next = 21;break;}return _context5.abrupt("return",
                                []);case 21:throw _context5.t0;case 22:return _context5.abrupt("return",



                                entityMapper_1.mapDataToEntity(response.data, response.included, Match_1.Match));case 23:case "end":return _context5.stop();}}}, _callee5, this, [[9, 15]]);}));function searchMatches() {return _ref5.apply(this, arguments);}return searchMatches;}() }, { key: "getMatchTelemetry", value: function () {var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(

            match) {var telemetryAsset, response;return _regenerator2.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
                                telemetryAsset = match.assets.find(function (asset) {
                                    return asset.name === "telemetry";
                                });if (
                                telemetryAsset) {_context6.next = 3;break;}throw (
                                    new Error("Telemetry asset not found in Match!"));case 3:_context6.next = 5;return (

                                    request_1.rawRequest("GET", telemetryAsset.URL));case 5:response = _context6.sent;return _context6.abrupt("return",
                                response.body);case 7:case "end":return _context6.stop();}}}, _callee6, this);}));function getMatchTelemetry(_x8) {return _ref6.apply(this, arguments);}return getMatchTelemetry;}() }]);return Client;}();


exports.Client = Client;