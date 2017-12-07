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
var Player_1 = require("./Player");
var champions_1 = require("../data/champions");
var Participant = /** @class */ (function (_super) {
    __extends(Participant, _super);
    function Participant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Participant.prototype._set = function (key, value) {
        if (key === "actor") {
            // Actor = champion ID. Use this to find and set the champion object.
            _super.prototype._set.call(this, "champion", champions_1.getChampionById(value));
        }
        _super.prototype._set.call(this, key, value);
    };
    Participant.prototype._getRelationships = function () {
        return {
            player: Player_1.Player
        };
    };
    return Participant;
}(Entity_1.Entity));
exports.Participant = Participant;
