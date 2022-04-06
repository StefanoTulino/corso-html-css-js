
//da decimale a binario
function convertToBinary1 (number) {
    let num = number;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }
    console.log(binary);
}

//da binario a decimale
function convertToBinary2(number){
    document.write( (parseInt(number,2) ));
    document.write("<\p>");
}

convertToBinary2("0110");
convertToBinary2("010");
