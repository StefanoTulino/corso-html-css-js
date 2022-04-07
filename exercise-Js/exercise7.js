

let productArray1 = ()=> {
    let array= [];
        for(let i=0;i<4;i++) {
            array[i]= Math.floor((Math.random() * 10)+1);   
                    console.log(array[i]);
                    let p=document.getElementsByTagName('p');
                    for(let i=0;i<p.length;i++)
                    p[i].innerHTML=array[i];
        }
        return array;
  }



let operation= ()=> {
    let  a= prompt("Inserisci l'operazione che si vuole effetturare", "Operation");
    let array= productArray1();
    let final=0;
    switch(a){
        case 'addizione': {
                    for(let i=0;i<array.length;i++){
                         final+=array[i];
                        }
                        document.write("Addizione:  "+final+"</p>");
                } break;

        case 'sottrazione': {
            for(let i=0;i<array.length;i++){
                final-=array[i];
                }
               document.write("Sott:  "+final+"</p>");
            } break;

        case 'moltiplicazione': {
            for(let i=0;i<array.length;i++){
                final=array[0]*array[1]*array[2]*array[3];
                }
               document.write("Molt:  "+final+"</p>");
            } break;

        case 'divisione': {
            for(let i=0;i<array.length;i++){
                final=array[0]/array[1]/array[2]/array[3];
                }
               document.write("Div:  "+final+"</p>");
            } break;
        default: alert("Operatore errato"); break;

    }
}

