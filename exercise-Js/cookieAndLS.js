
const cookie= ()=>{
    let dato= prompt("Inserisci il tuo nome","Nome");
    document.cookie= `NomeUtente= ${dato}; ` ;
}

cookie();

const localStorage = ()=> {
   window.localStorage.setItem("Username","Stefano");
   alert(window.localStorage.getItem("Username"));
}

localStorage();
