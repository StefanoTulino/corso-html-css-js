/* TRACCIA:
La tombola magica
  Scrivi un programma che dato:
  - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola
  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!" */


  let productArray = ()=> {
    let array= [];
        for(let i=0;i<10;i++) {
            let number= Math.floor(Math.random() * 90);
                if(number != array[i])
                    array[i]=number;
                        
                    console.log(array[i]);
        }
        return array;
  }



  function winOrLose(){
      let count=0;
      let a=[];
      let arrayFinal= productArray();

      for(let i=0;i<10;i++)
       a[i]= prompt("Inserisci un numero per verificare quante volte è presente", "Number");
      
      for(let i=0;i<arrayFinal.length;i++){
          for(let j=0;j<a.length;j++)
          if(arrayFinal[i]== a[j] )
            count++;
      }
      console.log("count "+ count);

      switch(count) {
          case 2: document.write("Hai fatto ambo");break;
          case 3: alert("Hai fatto terna");break;
          case 4: alert("Hai fatto ambo quaterna");break;
          case 5: alert("Hai fatto ambo cinquina");break;
          case 10: alert("Hai fatto tombola");break;
          default: alert("Mi dispiace, hai perso");break;
      }
  }
