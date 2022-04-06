
function test(){
    let s=new String();
    let s2=new Object();
    let array=new Array();
    let data=new Date();

    document.write(s.concat("Ciao").concat("</p>"));
    document.write(s2.toString("Object").concat("</p>"));
    document.write(data.toLocaleDateString());
}

test();