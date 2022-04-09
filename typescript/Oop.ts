
interface IRunnable extends IThread {
    run(): IUser;
}



interface IUser {
    username: string,
    password: string,
    email: string,
    enabled?: boolean
}

interface IThread {
    start(): void;
}


abstract class IRunner {
    name: string;

    constructor(name: string){
        this.name=name;

        this.print();
        this.set();
    }

    abstract print(): void;
    abstract set(): void;
}

class IRunnerImpl extends IRunner {
    name: string;

    constructor(name:string){
        super(name);
    }
    print(): void {
        throw new Error("Method not implemented.");
    }
    set(): void {
        throw new Error("Method not implemented.");
    }
}


interface IPrinterOut<U, V, T, S extends IRunnable> {
    print(param: U, para1: V): void;
    start(param1: U, param2:V, param3?: T):S;
}

class PrinterOut implements IPrinterOut<Object,{},number,IRunnable> {
    
    print(param: Object, para1: {}): void {
        throw new Error("Method not implemented.");
    }
    start(param1: Object, param2: {}, param3?: number): IRunnable {
        throw new Error("Method not implemented.");
    }

} 

//--------------------------OTHER ------------------


//Alias 
type Obj1= IUser;
const t: Obj1=null;

//variabili globali
declare const globalVar;

