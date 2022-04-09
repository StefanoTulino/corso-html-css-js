interface Runnable<T,U> {
    //metodo generico
    run<T>(runnable: T);

    //è un vincolo che chiarisce che si cerca un parametro solo ed esclusivamente di tipo Runnable
    runSafe<T extends Runnable<T,U> >();
}


interface Runnable2<T,U> {
}



let runnable: Runnable<string,string>;
//function parametrica
runnable.runSafe<Runnable<string, string> >();

