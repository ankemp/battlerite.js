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
var Round = /** @class */ (function (_super) {
    __extends(Round, _super);
    function Round() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Round.prototype._getRelationships = function () {
        return {
            participants: Participant_1.Participant
        };
    };
    return Round;
}(Entity_1.Entity));
exports.Round = Round;
