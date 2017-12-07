"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ensureArray(val) {
    return Array.isArray(val) ? val : [val];
}
exports.ensureArray = ensureArray;
function queryArray(val) {
    var arr = ensureArray(val);
    return arr.join(',');
}
exports.queryArray = queryArray;
