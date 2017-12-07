"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Entity = /** @class */ (function () {
    function Entity() {
    }
    Entity.prototype._set = function (key, value) {
        this[key] = value;
    };
    Entity.prototype._getRelationships = function () {
        return {};
    };
    return Entity;
}());
exports.Entity = Entity;
