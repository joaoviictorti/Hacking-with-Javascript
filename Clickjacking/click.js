/*<input type="button" value="Enviar">*/
<script>
    function redirecionar(){
        alert("Clique")
        location.href = "http://localhost:3030"
    }
    document.body.addEventListener('click',redirecionar, true)
</script>