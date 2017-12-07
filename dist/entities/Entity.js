"use strict";var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Object.defineProperty(exports, "__esModule", { value: true });var
Entity = function () {function Entity() {(0, _classCallCheck3.default)(this, Entity);}(0, _createClass3.default)(Entity, [{ key: "_set", value: function _set(
        key, value) {
            this[key] = value;
        } }, { key: "_getRelationships", value: function _getRelationships()
        {
            return {};
        } }]);return Entity;}();

exports.Entity = Entity;