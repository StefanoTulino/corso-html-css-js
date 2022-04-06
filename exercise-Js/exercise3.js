/* TRACCIA:
Scrivi un programma che dato un numero N, generi un array di N numeri casuali
  e stampi sia l'array ottenuto che quello invertito.
  Esempio:
    Input: N = 5
    Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]
  Variante:
  Non utilizzare array/variabili di appoggio per l'inversione.

poi ordinarlo in maniera decrescente. */

let productArray = (n)=> {
    let array= [];
        for(let i=0;i<n;i++) {
              array[i]=Math.floor(Math.random() * n +10);;     
                    console.log(array[i]);
        }
        return array;
  }
  


function ordina(a,b){
    if(a<b)
    return +1;
        if(a>b)
            return -1;
                return 0;
}


function invertiArray(){
    let arrayInversion= productArray(5);
    arrayInversion.sort(ordina);
    
    for(let i=0;i<arrayInversion.length;i++)
       console.log("Array invertito "+ arrayInversion[i]+"</p>");
}
