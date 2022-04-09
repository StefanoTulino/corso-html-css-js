//definizione di enum
var LEVEL;
(function (LEVEL) {
    LEVEL[LEVEL["INFO"] = 0] = "INFO";
    LEVEL[LEVEL["WARN"] = 1] = "WARN";
    LEVEL[LEVEL["ERROR"] = 2] = "ERROR";
})(LEVEL || (LEVEL = {}));
var Logger = /** @class */ (function () {
    function Logger(name, level) {
        this.name = name;
        this.level = level;
    }
    Logger.prototype.getName = function () {
        return this.name;
    };
    //ritorna un tipo Level
    Logger.prototype.getLevel = function () {
        return this.level;
    };
    Logger.prototype.setName = function (v) {
        this.name = v;
    };
    Logger.prototype.setLevel = function (v) {
        this.level = v;
    };
    return Logger;
}());
