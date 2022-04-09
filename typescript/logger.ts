//definizione di enum
enum LEVEL {
    INFO,
    WARN,
    ERROR
}



class Logger {
    private name: string;
    private level: LEVEL;

    constructor(name: string, level: LEVEL){
        this.name=name;
        this.level=level;
    }

    getName(): string {
        return this.name;
    }

    //ritorna un tipo Level
    getLevel() : LEVEL{
        return this.level;
    }
    
    public setName(v : string) :void {
        this.name = v;
    }

    public setLevel(v : LEVEL) :void {
        this.level = v;
    }


    
}

