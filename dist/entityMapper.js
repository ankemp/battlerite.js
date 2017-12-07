"use strict";
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
        return data.map(function (d) { return mapDataToEntity(d, included, targetClass); });
    }
    var target = new targetClass();
    target.id = data.id;
    if (data.attributes) {
        for (var _i = 0, _a = Object.entries(data.attributes); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            target._set(key, value);
        }
    }
    if (data.relationships) {
        var relationshipClasses_1 = target._getRelationships();
        var _loop_1 = function (name, relData) {
            if (relationshipClasses_1[name] === null) {
                return "continue";
            }
            if (!relationshipClasses_1[name]) {
                throw new Error("Unknown relationship: " + name + " (in " + targetClass.name + ")");
            }
            if (Array.isArray(relData.data)) {
                target._set(name, relData.data.map(function (d) {
                    var key = d.type + "-" + d.id;
                    return mapDataToEntity(included[key], included, relationshipClasses_1[name]);
                }));
            }
            else {
                var key = relData.data.type + "-" + relData.data.id;
                target._set(name, mapDataToEntity(included[key], included, relationshipClasses_1[name]));
            }
        };
        for (var _c = 0, _d = Object.entries(data.relationships); _c < _d.length; _c++) {
            var _e = _d[_c], name = _e[0], relData = _e[1];
            _loop_1(name, relData);
        }
    }
    return target;
}
exports.mapDataToEntity = mapDataToEntity;
