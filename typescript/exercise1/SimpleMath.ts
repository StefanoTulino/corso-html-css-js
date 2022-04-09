import Print from './Print';

//definizione di enum
enum typeFigure {
    quadrato,
    rettangolo,
    triangolo
}


 class SimpleMath implements Print<typeFigure> {

     base: number;
     altezza: number;
     type: typeFigure; 
     area:number=0;

    constructor(base:number, altezza:number, type: typeFigure ){
        this.base=base;
        this.altezza=altezza;
        this.type= type;
    }


     print(obj: typeFigure): void {
        if(typeFigure.quadrato.toString() == obj.toString()){
            this.area=this.figura1();
        }
        if(typeFigure.rettangolo.toString() == obj.toString()){
            this.area=this.figura2();
        }
        if(typeFigure.triangolo.toString() == obj.toString()){
            this.area=this.figura3();
        }
        
     }



    //getter e setter
    getBase(){
        return this.base;
    }

    getAltezza(){
        return this.altezza;
    }

    getType(){
        return this.type;
    }

    setBase(v: number){
        this.base=v;
    }

    setAltezza(v: number){
        this.altezza=v;
    }

    setType(v: typeFigure){
        this.type=v;
    }


     figura1() : number{
        console.log("Figura di tipo quadrato");
           this.area = this.base * this.base;
           console.log("Area del quadrato: "+this.area);
           return this.area;
    }

    figura2() :number {
        console.log("Figura di tipo rettangolo");
           this.area = this.base * this.altezza;
           console.log("Area del quadrato: "+this.area);
           return this.area;
    }

    figura3(): number {
        console.log("Figura di tipo triangolo");
           this.area = (this.base * this.altezza)/2;
           console.log("Area del quadrato: "+this.area);
           return this.area;
    }

}

export {typeFigure,SimpleMath};