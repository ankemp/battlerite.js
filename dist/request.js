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
var request = require("request-promise-native");
var root = "https://api.dc01.gamelockerapp.com/shards/global";
var APIError = /** @class */ (function (_super) {
    __extends(APIError, _super);
    function APIError(message, statusCode) {
        if (statusCode === void 0) { statusCode = null; }
        var _this = _super.call(this, message) || this;
        _this.statusCode = statusCode;
        return _this;
    }
    return APIError;
}(Error));
exports.APIError = APIError;
var resetTimeInMs = function (resetTime) {
    return Math.ceil(parseInt(resetTime, 10) / 1000);
};
var sleep = function (ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
};
var rateLimitWait = Promise.resolve();
function rawRequest(method, url, opts) {
    if (opts === void 0) { opts = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var defaultOpts, fullOpts;
        return __generator(this, function (_a) {
            defaultOpts = {
                uri: url,
                method: method,
                followRedirect: true,
                headers: {
                    Accept: "application/vnd.api+json"
                },
                json: true,
                resolveWithFullResponse: true
            };
            fullOpts = Object.assign({}, defaultOpts, opts);
            return [2 /*return*/, request(fullOpts)];
        });
    });
}
exports.rawRequest = rawRequest;
function apiRequest(token, method, endpoint, params) {
    if (params === void 0) { params = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var url, opts, response, e_1, resetInMs, parsed, errors, resetInMs;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, rateLimitWait];
                case 1:
                    _a.sent();
                    url = root + "/" + endpoint;
                    opts = {
                        headers: {
                            Authorization: "Bearer " + token,
                            Accept: "application/vnd.api+json"
                        }
                    };
                    if (method === "GET") {
                        opts.qs = params;
                    }
                    else if (method === "POST") {
                        opts.body = params;
                    }
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, rawRequest(method, url, opts)];
                case 3:
                    response = _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _a.sent();
                    if (e_1.statusCode && e_1.statusCode === 404) {
                        throw new APIError("404 Not Found: " + url, 404);
                    }
                    else if (e_1.statusCode && e_1.statusCode === 429) {
                        // If we were rate limited (despite efforts to avoid it later below),
                        // warn the user and wait until the rate limit has been reset
                        // tslint:disable-next-line
                        console.warn("[WARN] Rate limited, waiting");
                        resetInMs = resetTimeInMs(response.headers["x-ratelimit-reset"]);
                        rateLimitWait = sleep(resetInMs);
                        // Repeat the request after our rate limit has been reset
                        return [2 /*return*/, apiRequest(token, method, endpoint, params)];
                    }
                    else if (e_1.error && e_1.error[0] === "{") {
                        parsed = JSON.parse(e_1.error);
                        errors = parsed.errors
                            .map(function (e) {
                            if (e.description) {
                                return e.title + ": " + e.description;
                            }
                            else {
                                return e.title;
                            }
                        })
                            .join(", ");
                        throw new APIError(errors);
                    }
                    else {
                        // Re-throw other errors
                        throw e_1;
                    }
                    return [3 /*break*/, 5];
                case 5:
                    // Try to avoid hitting the API if we're going to be rate limited
                    if (response.headers["x-ratelimit-remaining"] === "0") {
                        resetInMs = resetTimeInMs(response.headers["x-ratelimit-reset"]);
                        rateLimitWait = sleep(resetInMs);
                    }
                    return [2 /*return*/, response.body];
            }
        });
    });
}
exports.apiRequest = apiRequest;
function apiRequestPaged(token, method, endpoint, params, amount) {
    return __awaiter(this, void 0, void 0, function () {
        var perPage, fetched, page, combined, thisParams, response, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    perPage = Math.min(5, amount);
                    fetched = 0;
                    page = 0;
                    combined = {
                        data: [],
                        included: []
                    };
                    _c.label = 1;
                case 1:
                    if (!(fetched < amount)) return [3 /*break*/, 3];
                    thisParams = Object.assign({}, params, {
                        "page[offset]": page,
                        "page[limit]": perPage
                    });
                    return [4 /*yield*/, apiRequest(token, method, endpoint, thisParams)];
                case 2:
                    response = _c.sent();
                    (_a = combined.data).push.apply(_a, response.data);
                    (_b = combined.included).push.apply(_b, response.included);
                    fetched += perPage;
                    page++;
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/, combined];
            }
        });
    });
}
exports.apiRequestPaged = apiRequestPaged;
