alert("Questo è un messaggio");
document.write('Hello World2\n');
alert("Questo è un altro messaggio");

//richiamata direttamente nel file html
function test(a,b){
    document.write(a);
    document.write(b);
}


function printArray(){
    let array= [1,2,3,4];
    array.forEach(function(n) {
        console.log(n);
    })
}

printArray();



function test2(){
    let input= prompt("in che anno siamo","Anno corrente" );
    if(input!= 2022)
        console.log("Risposta sbagliata");
        else if(input == 2022)
            console.log("risposta giusta");
}

function test3(){
    let anni= prompt("Quanti anni ho");
    //Operatore Ternario
    let status= anni>=18 ? "Maggiorenne" : "Minorenne" ;
    console.log(status);
}

function test4() {
    let array= [1,2,3,4];
    for(let i=0;i<array.length;i++)
        console.log(array[i]);
}

function multi(x,y){
    return console.log(x*y);
}