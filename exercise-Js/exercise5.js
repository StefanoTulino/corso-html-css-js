/* TRACCIA: Scrivi un programma che dati:
  - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
  - il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.
  Esempio:
    Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15, 7, 7
    Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]      */

    let productArray1 = ()=> {
        let array= [];
            for(let i=0;i<3;i++) {
                array[i]= Math.floor((Math.random() * 10)+1);   
                        console.log("Array1: "+array[i]);
            }
            return array;
      }


      let productArray2 = ()=> {
        let array2= [];
            for(let i=0;i<3;i++) {
                array2[i]= Math.floor((Math.random() * 10)+1);   
                        console.log("Array2: "+array2[i]);
            }
            return array2;
      }


    let Operation = ()=> {
        let array1= productArray1();
        let array2= productArray2();
        let arrayFinal=[];

        let a=prompt("Inserisci il nome dell'operazione da effettuare", "Operazione");
        switch(a){
            case 'addizione': {
                document.write('<p>Addizione: </p>');
                    for(let i=0,j=0,z=0;z<3;i++,j++,z++){
                        arrayFinal[z]=array1[i]+array2[j];                        
                        document.write(arrayFinal[z]+"<br>");
                    }       
                }break;

            case 'sottrazione': {
                document.write('<p>Sottrazione: </p>');
                for(let i=0,j=0,z=0;z<3;i++,j++,z++){
                    arrayFinal[z]=array1[i]-array2[j];
                    document.write(arrayFinal[z]+"<br>");
                }break;
            }

            case 'moltiplicazione': {
                document.write('<p>Moltiplicazione: </p>');
                for(let i=0,j=0,z=0;z<3;i++,j++,z++){
                    arrayFinal[z]=array1[i]*array2[j];
                    document.write(arrayFinal[z]+"<br>");
                }break;
            }

            case 'divisione': {
                document.write('<p>Divisione: </p>');
                for(let i=0,j=0,z=0;z<3;i++,j++,z++){
                    arrayFinal[z]=array1[i]/array2[j];
                    document.write(arrayFinal[z]+"<br>");
                }break;
            }
            default: alert("Operatore errato"); break;

        }
    }
