"use strict";
exports.__esModule = true;
exports.SimpleMath = exports.typeFigure = void 0;
//definizione di enum
var typeFigure;
(function (typeFigure) {
    typeFigure[typeFigure["quadrato"] = 0] = "quadrato";
    typeFigure[typeFigure["rettangolo"] = 1] = "rettangolo";
    typeFigure[typeFigure["triangolo"] = 2] = "triangolo";
})(typeFigure || (typeFigure = {}));
exports.typeFigure = typeFigure;
var SimpleMath = /** @class */ (function () {
    function SimpleMath(base, altezza, type) {
        this.area = 0;
        this.base = base;
        this.altezza = altezza;
        this.type = type;
    }
    SimpleMath.prototype.print = function (obj) {
        if (typeFigure.quadrato.toString() == obj.toString()) {
            this.area = this.figura1();
        }
        if (typeFigure.rettangolo.toString() == obj.toString()) {
            this.area = this.figura2();
        }
        if (typeFigure.triangolo.toString() == obj.toString()) {
            this.area = this.figura3();
        }
    };
    //getter e setter
    SimpleMath.prototype.getBase = function () {
        return this.base;
    };
    SimpleMath.prototype.getAltezza = function () {
        return this.altezza;
    };
    SimpleMath.prototype.getType = function () {
        return this.type;
    };
    SimpleMath.prototype.setBase = function (v) {
        this.base = v;
    };
    SimpleMath.prototype.setAltezza = function (v) {
        this.altezza = v;
    };
    SimpleMath.prototype.setType = function (v) {
        this.type = v;
    };
    SimpleMath.prototype.figura1 = function () {
        console.log("Figura di tipo quadrato");
        this.area = this.base * this.base;
        console.log("Area del quadrato: " + this.area);
        return this.area;
    };
    SimpleMath.prototype.figura2 = function () {
        console.log("Figura di tipo rettangolo");
        this.area = this.base * this.altezza;
        console.log("Area del quadrato: " + this.area);
        return this.area;
    };
    SimpleMath.prototype.figura3 = function () {
        console.log("Figura di tipo triangolo");
        this.area = (this.base * this.altezza) / 2;
        console.log("Area del quadrato: " + this.area);
        return this.area;
    };
    return SimpleMath;
}());
exports.SimpleMath = SimpleMath;
