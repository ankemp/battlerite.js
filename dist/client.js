"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("./request");
var utils_1 = require("./utils");
var entityMapper_1 = require("./entityMapper");
var Match_1 = require("./entities/Match");
var Player_1 = require("./entities/Player");
var Client = /** @class */ (function () {
    function Client(token) {
        this.token = token;
    }
    Client.prototype.getPlayer = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, request_1.apiRequest(this.token, "GET", "players/" + id)];
                    case 1:
                        response = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        if (e_1 instanceof request_1.APIError && e_1.statusCode === 404)
                            return [2 /*return*/, null];
                        else
                            throw e_1;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, entityMapper_1.mapDataToEntity(response.data[0], response.included, Player_1.Player)];
                }
            });
        });
    };
    Client.prototype.getPlayersById = function (ids) {
        return __awaiter(this, void 0, void 0, function () {
            var idsArr, response, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        idsArr = utils_1.ensureArray(ids);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, request_1.apiRequest(this.token, "GET", "players", {
                                "filter[playerIds]": idsArr.join(",")
                            })];
                    case 2:
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        if (e_2 instanceof request_1.APIError && e_2.statusCode === 404)
                            return [2 /*return*/, []];
                        else
                            throw e_2;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, entityMapper_1.mapDataToEntity(response.data, response.included, Player_1.Player)];
                }
            });
        });
    };
    Client.prototype.getPlayersByName = function (names) {
        return __awaiter(this, void 0, void 0, function () {
            var namesArr, response, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        namesArr = utils_1.ensureArray(names);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, request_1.apiRequest(this.token, "GET", "players", {
                                "filter[playerNames]": namesArr.join(",")
                            })];
                    case 2:
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _a.sent();
                        if (e_3 instanceof request_1.APIError && e_3.statusCode === 404)
                            return [2 /*return*/, []];
                        else
                            throw e_3;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, entityMapper_1.mapDataToEntity(response.data, response.included, Player_1.Player)];
                }
            });
        });
    };
    Client.prototype.getMatch = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, request_1.apiRequest(this.token, "GET", "matches/" + id)];
                    case 1:
                        response = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_4 = _a.sent();
                        if (e_4 instanceof request_1.APIError && e_4.statusCode === 404)
                            return [2 /*return*/, null];
                        else
                            throw e_4;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, entityMapper_1.mapDataToEntity(response.data[0], response.included, Match_1.Match)];
                }
            });
        });
    };
    Client.prototype.searchMatches = function (filters, amount, sort) {
        if (filters === void 0) { filters = {}; }
        if (amount === void 0) { amount = 5; }
        if (sort === void 0) { sort = "createdAt"; }
        return __awaiter(this, void 0, void 0, function () {
            var params, response, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filters = filters || {};
                        params = {};
                        if (filters.playerIds) {
                            params["filter[playerIds]"] = utils_1.queryArray(filters.playerIds);
                        }
                        if (filters.playerNames) {
                            params["filter[playerNames]"] = utils_1.queryArray(filters.playerNames);
                        }
                        if (filters.teamNames) {
                            params["filter[teamNames]"] = utils_1.queryArray(filters.teamNames);
                        }
                        if (filters.gamemode) {
                            params["filter[gamemode]"] = utils_1.queryArray(filters.gamemode);
                        }
                        if (filters.fromDate) {
                            params["filter[createdAt-start]"] =
                                typeof filters.fromDate === "string"
                                    ? filters.fromDate
                                    : filters.fromDate.toISOString();
                        }
                        if (filters.toDate) {
                            params["filter[createdAt-end]"] =
                                typeof filters.toDate === "string"
                                    ? filters.toDate
                                    : filters.fromDate.toISOString();
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, request_1.apiRequestPaged(this.token, "GET", "matches", params, amount)];
                    case 2:
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_5 = _a.sent();
                        if (e_5 instanceof request_1.APIError && e_5.statusCode === 404)
                            return [2 /*return*/, []];
                        else
                            throw e_5;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, entityMapper_1.mapDataToEntity(response.data, response.included, Match_1.Match)];
                }
            });
        });
    };
    Client.prototype.getMatchTelemetry = function (match) {
        return __awaiter(this, void 0, void 0, function () {
            var telemetryAsset, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        telemetryAsset = match.assets.find(function (asset) {
                            return asset.name === "telemetry";
                        });
                        if (!telemetryAsset) {
                            throw new Error("Telemetry asset not found in Match!");
                        }
                        return [4 /*yield*/, request_1.rawRequest("GET", telemetryAsset.URL)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.body];
                }
            });
        });
    };
    return Client;
}());
exports.Client = Client;
