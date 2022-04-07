
//ADD elementi nel DOM

document.addEventListener('DOMContentLoaded', function() {
    //TIPOLOGIA 1--> document.getElementById
    let div= document.getElementById('div').classList.add('classAdded');

    //TIPOLOGIA 2--> document.getElementByClassName --> si ottiene una collection
    let p= document.getElementsByClassName('classP')[0].classList.add('Pclass');

    //TIPOLOGIA 3--> document.getElementByTagName --> si ottiene una collection
    let p1= document.getElementsByTagName('p');
    for(let i=0;i<p1.length;i++)
        p1[i].classList.add('allP');

    //TIPOLOGIA 4 --> document.queryselector con button
        let button= document.querySelector('.btn').innerHTML='Call Method'
        alert(button);

    //Tipologia 5--> queryselectorAll (vale per tutti i selettori)
        let p2= document.querySelectorAll('.a');
        for(let i=0;i<p2.length;i++)
            p2[i].classList.add('ole');
    })


//------------ FUNCTION




//function anonima con un parametro
let array=[1,2,3];
array.map( function(e) {
    console.log(e);
})


//array function with map
let array1=[1,2,3];
array1.map( (e)=> {
    console.log("Map: "+e);
})

//array function with foreach
const array2=[1,2,3];
array1.forEach( (e, _index)=> {
    console.log(e);
})

//array function with flatmap
const array3=[1,2,3];
array1.flatMap( (e, _index)=> {
    console.log("flatMap: "+ e);
})

