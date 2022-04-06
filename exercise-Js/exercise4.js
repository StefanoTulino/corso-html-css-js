
function calcola(){
    document.write('<table id="txt" border="1">');
    for(i=1;i<=10;i++){
        document.write('<tr>');
            for(j=1;j<=10;j++){
                document.write('<td align="center">');
                document.write(i*j);
                document.write('</td>');
            }
            document.write('</tr>');
    }
    document.write('</table>');
    
}