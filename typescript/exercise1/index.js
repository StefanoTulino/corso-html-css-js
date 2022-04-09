"use strict";
exports.__esModule = true;
exports.fn = void 0;
var SimpleMath_1 = require("./SimpleMath");
var fn = function () {
    var a = prompt("Inserisci la figura che vuoi");
    switch (a) {
        case 'quadrato':
            {
                var quadrato = new SimpleMath_1.SimpleMath(5, 10, SimpleMath_1.typeFigure.quadrato);
                quadrato.print(quadrato.getType());
            }
            break;
        case 'rettangolo':
            {
                var rett = new SimpleMath_1.SimpleMath(5, 10, SimpleMath_1.typeFigure.rettangolo);
                rett.print(rett.getType());
            }
            break;
        case 'triangolo':
            {
                var triang = new SimpleMath_1.SimpleMath(5, 10, SimpleMath_1.typeFigure.triangolo);
                triang.print(triang.getType());
            }
            break;
        default:
            alert("Figura inserita errata");
            break;
    }
};
exports.fn = fn;
