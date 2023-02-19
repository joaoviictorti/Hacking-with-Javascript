/*
<form action="/" method="post">
    <input type="text" name="site">
</form>
*/

<script>
    var pagina = document.createElement("a");
    pagina.href = "http://localhost:3030"
    pagina.innerHTML = "Bem vindo, clique no site para verificar o seu reembolso"
    document.forms[0].parentNode.appendChild(pagina)
    document.forms[0].parentNode.removeChild(document.forms[0])
<script>