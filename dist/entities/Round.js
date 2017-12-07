"use strict";var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Object.defineProperty(exports, "__esModule", { value: true });
var Entity_1 = require("./Entity");
var Participant_1 = require("./Participant");var
Round = function (_Entity_1$Entity) {(0, _inherits3.default)(Round, _Entity_1$Entity);function Round() {(0, _classCallCheck3.default)(this, Round);return (0, _possibleConstructorReturn3.default)(this, (Round.__proto__ || Object.getPrototypeOf(Round)).apply(this, arguments));}(0, _createClass3.default)(Round, [{ key: "_getRelationships", value: function _getRelationships()
        {
            return {
                participants: Participant_1.Participant };

        } }]);return Round;}(Entity_1.Entity);

exports.Round = Round;