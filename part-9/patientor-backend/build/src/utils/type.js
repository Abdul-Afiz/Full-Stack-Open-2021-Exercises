"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryType = exports.HealthCheckRating = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["male"] = "male";
    Gender["female"] = "female";
})(Gender = exports.Gender || (exports.Gender = {}));
var HealthCheckRating;
(function (HealthCheckRating) {
    HealthCheckRating[HealthCheckRating["Healthy"] = 0] = "Healthy";
    HealthCheckRating[HealthCheckRating["LowRisk"] = 1] = "LowRisk";
    HealthCheckRating[HealthCheckRating["HighRisk"] = 2] = "HighRisk";
    HealthCheckRating[HealthCheckRating["CriticalRisk"] = 3] = "CriticalRisk";
})(HealthCheckRating = exports.HealthCheckRating || (exports.HealthCheckRating = {}));
var EntryType;
(function (EntryType) {
    EntryType["HealthCheck"] = "HealthCheck";
    EntryType["OccupationalHealthcare"] = "OccupationalHealthcare";
    EntryType["Hospital"] = "Hospital";
})(EntryType = exports.EntryType || (exports.EntryType = {}));
