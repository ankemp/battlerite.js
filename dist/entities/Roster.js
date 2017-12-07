"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Entity_1 = require("./Entity");
var Participant_1 = require("./Participant");
var Roster = /** @class */ (function (_super) {
    __extends(Roster, _super);
    function Roster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Roster.prototype._set = function (key, value) {
        if (key === 'won') {
            value = (value === 'true' ? true : false);
        }
        _super.prototype._set.call(this, key, value);
    };
    Roster.prototype._getRelationships = function () {
        return {
            participants: Participant_1.Participant,
            team: null
        };
    };
    return Roster;
}(Entity_1.Entity));
exports.Roster = Roster;
