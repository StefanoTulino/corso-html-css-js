interface records{
    id: string;
    name: string;
    age?:number;
    description: string;
    //le interfacce si possono utilizzare come tipologia di data
}

interface RecordsOperation<Z> {
    loadRecord(param: Z): Z;
    //metodo generico
    printData<Z>(): void;
}

abstract class RecordsImp implements RecordsOperation<records> {
    
    //variabile d'istanza
    record: records;

    // id,name,age
    constructor({id,name,age, description}: records ){
        this.record.id= id;
        this.record.name= name;
        this.record.age= age;
        this.record.description= description;
    }
   
        //anche il ritorno puo essere biforcato in piu possibili tipi di dati
     loadRecord(record: records): records | null {
        record.id="1";
        record.age=12;
        record.name="Californication";
        record.description="Red Hot Chili Peppers";

        //ritorna l'intero oggetto
        return record;
    }


    printData<Z>(): void {
        this.record= this.loadRecord(null);
    }

}

export {records,RecordsOperation,RecordsImp};