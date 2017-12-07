"use strict";var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Object.defineProperty(exports, "__esModule", { value: true });
var Entity_1 = require("./Entity");var
Player = function (_Entity_1$Entity) {(0, _inherits3.default)(Player, _Entity_1$Entity);function Player() {(0, _classCallCheck3.default)(this, Player);return (0, _possibleConstructorReturn3.default)(this, (Player.__proto__ || Object.getPrototypeOf(Player)).apply(this, arguments));}(0, _createClass3.default)(Player, [{ key: "_getRelationships", value: function _getRelationships()
        {
            return {
                assets: null };

        } }]);return Player;}(Entity_1.Entity);

exports.Player = Player;