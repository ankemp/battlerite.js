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
var Roster_1 = require("./Roster");
var Round_1 = require("./Round");
var Asset_1 = require("./Asset");
var maps_1 = require("../data/maps");
var Match = /** @class */ (function (_super) {
    __extends(Match, _super);
    function Match() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Match.prototype._set = function (key, value) {
        if (key === "createdAt") {
            // Convert createdAt to a proper date
            value = new Date(value);
        }
        else if (key === "rounds") {
            // Order rounds by their ordinal
            value.sort(function (a, b) {
                if (a.ordinal > b.ordinal)
                    return 1;
                if (a.ordinal < b.ordinal)
                    return -1;
                return 0;
            });
        }
        else if (key === "stats") {
            // Match stats contain the map ID. Use this to find and set the match's map.
            _super.prototype._set.call(this, "map", maps_1.getMapById(value.mapID));
        }
        _super.prototype._set.call(this, key, value);
    };
    Match.prototype._getRelationships = function () {
        return {
            assets: Asset_1.Asset,
            rosters: Roster_1.Roster,
            rounds: Round_1.Round,
            spectators: null
        };
    };
    return Match;
}(Entity_1.Entity));
exports.Match = Match;
