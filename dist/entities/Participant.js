"use strict";var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _get2 = require("babel-runtime/helpers/get");var _get3 = _interopRequireDefault(_get2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Object.defineProperty(exports, "__esModule", { value: true });
var Entity_1 = require("./Entity");
var Player_1 = require("./Player");
var champions_1 = require("../data/champions");var
Participant = function (_Entity_1$Entity) {(0, _inherits3.default)(Participant, _Entity_1$Entity);function Participant() {(0, _classCallCheck3.default)(this, Participant);return (0, _possibleConstructorReturn3.default)(this, (Participant.__proto__ || Object.getPrototypeOf(Participant)).apply(this, arguments));}(0, _createClass3.default)(Participant, [{ key: "_set", value: function _set(
        key, value) {
            if (key === "actor") {
                // Actor = champion ID. Use this to find and set the champion object.
                (0, _get3.default)(Participant.prototype.__proto__ || Object.getPrototypeOf(Participant.prototype), "_set", this).call(this, "champion", champions_1.getChampionById(value));
            }
            (0, _get3.default)(Participant.prototype.__proto__ || Object.getPrototypeOf(Participant.prototype), "_set", this).call(this, key, value);
        } }, { key: "_getRelationships", value: function _getRelationships()
        {
            return {
                player: Player_1.Player };

        } }]);return Participant;}(Entity_1.Entity);

exports.Participant = Participant;