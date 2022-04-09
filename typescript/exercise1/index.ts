import {typeFigure,SimpleMath} from "./SimpleMath";


export const fn: Function = ()=>  {
    let a= prompt("Inserisci la figura che vuoi");
    switch(a){
        case 'quadrato': {
            let quadrato= new SimpleMath(5,10,typeFigure.quadrato);
            quadrato.print(quadrato.getType());
        }break;
        case 'rettangolo': {
            let rett= new SimpleMath(5,10,typeFigure.rettangolo);
            rett.print(rett.getType());
        }break;
        case 'triangolo': {
            let triang= new SimpleMath(5,10,typeFigure.triangolo);
            triang.print(triang.getType());
        }break;
        default: alert("Figura inserita errata");break;
    }
}

