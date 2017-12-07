"use strict";var _entries = require("babel-runtime/core-js/object/entries");var _entries2 = _interopRequireDefault(_entries);var _getIterator2 = require("babel-runtime/core-js/get-iterator");var _getIterator3 = _interopRequireDefault(_getIterator2);var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Object.defineProperty(exports, "__esModule", { value: true });
function mapDataToEntity(data, included, targetClass) {
    // If the included items are an array, turn it into an object for fast lookups
    if (Array.isArray(included)) {
        included = included.reduce(function (map, item) {
            map[item.type + "-" + item.id] = item;
            return map;
        }, {});
    }
    if (Array.isArray(data)) {
        return data.map(function (d) {return mapDataToEntity(d, included, targetClass);});
    }
    var target = new targetClass();
    target.id = data.id;
    if (data.attributes) {var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
            for (var _iterator = (0, _getIterator3.default)((0, _entries2.default)(data.attributes)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var _ref = _step.value;var _ref2 = (0, _slicedToArray3.default)(_ref, 2);var key = _ref2[0];var value = _ref2[1];
                target._set(key, value);
            }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
    }
    if (data.relationships) {(function () {
            var relationshipClasses = target._getRelationships();var _loop = function _loop(
            name, relData) {
                if (relationshipClasses[name] === null) {
                    return "continue";
                }
                if (!relationshipClasses[name]) {
                    throw new Error("Unknown relationship: " + name + " (in " + targetClass.name + ")");
                }
                if (Array.isArray(relData.data)) {
                    target._set(name, relData.data.map(function (d) {
                        var key = d.type + "-" + d.id;
                        return mapDataToEntity(included[key], included, relationshipClasses[name]);
                    }));
                } else
                {
                    var _key = relData.data.type + "-" + relData.data.id;
                    target._set(name, mapDataToEntity(included[_key], included, relationshipClasses[name]));
                }};var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {for (var _iterator2 = (0, _getIterator3.default)((0, _entries2.default)(data.relationships)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var _ref3 = _step2.value;var _ref4 = (0, _slicedToArray3.default)(_ref3, 2);var name = _ref4[0];var relData = _ref4[1];var _ret2 = _loop(name, relData);if (_ret2 === "continue") continue;
                }} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2.return) {_iterator2.return();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}})();
    }
    return target;
}
exports.mapDataToEntity = mapDataToEntity;