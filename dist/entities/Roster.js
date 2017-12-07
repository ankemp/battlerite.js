"use strict";var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _get2 = require("babel-runtime/helpers/get");var _get3 = _interopRequireDefault(_get2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Object.defineProperty(exports, "__esModule", { value: true });
var Entity_1 = require("./Entity");
var Participant_1 = require("./Participant");var
Roster = function (_Entity_1$Entity) {(0, _inherits3.default)(Roster, _Entity_1$Entity);function Roster() {(0, _classCallCheck3.default)(this, Roster);return (0, _possibleConstructorReturn3.default)(this, (Roster.__proto__ || (0, _getPrototypeOf2.default)(Roster)).apply(this, arguments));}(0, _createClass3.default)(Roster, [{ key: "_set", value: function _set(
        key, value) {
            if (key === 'won') {
                value = value === 'true' ? true : false;
            }
            (0, _get3.default)(Roster.prototype.__proto__ || (0, _getPrototypeOf2.default)(Roster.prototype), "_set", this).call(this, key, value);
        } }, { key: "_getRelationships", value: function _getRelationships()
        {
            return {
                participants: Participant_1.Participant,
                team: null };

        } }]);return Roster;}(Entity_1.Entity);

exports.Roster = Roster;