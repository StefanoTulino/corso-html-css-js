
const ajaxMethod= ()=> {
//è un oggetto per fare request asincrone
const call= new XMLHttpRequest();

    //METODO,URL ed il true per la modalità asincrona sono obbligatori, gli altri sono opzionali
    call.open("GET","https://jsonplaceholder.typicode.com/posts",true);
    
    call.onreadystatechange= ()=> {
        if(call.readyState ==4 && call.status == 200) {
            let obj= eval(call.responseText);
            let res= document.getElementById("res");
            obj.forEach(e => {
                res.innerHTML += '<hr><p>userId: </p>' + e.userId + '</p>';
            })
        }
    }
    call.send(null);

    //FINIRE DOPOOOO
}


const objectJson= ()=> {

    const oggetto= [
        {
            "id":"1",
            "title": "t1"
        },
        {
            "id":"2",
            "title": "t2"
        },
    ]

    oggetto.forEach( e => {
        document.write(e.id+"  "+ e.title);
        })

        //destructuring object
        const {title}= oggetto[0];
        alert("Oggetto destruct"+ title);
    }


const ajaxFetch= ()=> {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then( (response) =>  response.json() )  //--> ottengo la risposta
    .then( (response) => {
        console.log(response); } ) //--> gestisco la fase di successo
    .catch( ()=> alert("error"));  //--> gestisco la fase di errore
}

//---------------------------------------------------------
// es6/es7 -- nuove funzionalità

/*
....
*/

//senza utilizzare l'html
const addEvventListenerDiv= ()=> {
    document.getElementById('div1').addEventListener(
        'mouseenter', ()=> {
            alert("sei sopra il div");
        }
    )
}

//addEvventListenerDiv();

const namee='Stefano';
const templateString= `Io mi chiamo ${namee}`


//Cicli for-of loop
const a= [1,2,4];
//iterare --> vabbe vedere
for(const v of [1,2,4]){
    console.log(v);
}


//ARROW FUNCTION CON ASYNC
async function fn() {
    const result= await fetch("https://jsonplaceholder.typicode.com/posts")
    console.log(result);
}



