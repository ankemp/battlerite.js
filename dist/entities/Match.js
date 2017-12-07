"use strict";var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _get2 = require("babel-runtime/helpers/get");var _get3 = _interopRequireDefault(_get2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Object.defineProperty(exports, "__esModule", { value: true });
var Entity_1 = require("./Entity");
var Roster_1 = require("./Roster");
var Round_1 = require("./Round");
var Asset_1 = require("./Asset");
var maps_1 = require("../data/maps");var
Match = function (_Entity_1$Entity) {(0, _inherits3.default)(Match, _Entity_1$Entity);function Match() {(0, _classCallCheck3.default)(this, Match);return (0, _possibleConstructorReturn3.default)(this, (Match.__proto__ || (0, _getPrototypeOf2.default)(Match)).apply(this, arguments));}(0, _createClass3.default)(Match, [{ key: "_set", value: function _set(
        key, value) {
            if (key === "createdAt") {
                // Convert createdAt to a proper date
                value = new Date(value);
            } else
            if (key === "rounds") {
                // Order rounds by their ordinal
                value.sort(function (a, b) {
                    if (a.ordinal > b.ordinal)
                    return 1;
                    if (a.ordinal < b.ordinal)
                    return -1;
                    return 0;
                });
            } else
            if (key === "stats") {
                // Match stats contain the map ID. Use this to find and set the match's map.
                (0, _get3.default)(Match.prototype.__proto__ || (0, _getPrototypeOf2.default)(Match.prototype), "_set", this).call(this, "map", maps_1.getMapById(value.mapID));
            }
            (0, _get3.default)(Match.prototype.__proto__ || (0, _getPrototypeOf2.default)(Match.prototype), "_set", this).call(this, key, value);
        } }, { key: "_getRelationships", value: function _getRelationships()
        {
            return {
                assets: Asset_1.Asset,
                rosters: Roster_1.Roster,
                rounds: Round_1.Round,
                spectators: null };

        } }]);return Match;}(Entity_1.Entity);

exports.Match = Match;