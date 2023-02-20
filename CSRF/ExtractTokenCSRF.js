/*
<input type="text" name="csrf_token" id="csrf_token" value="1231231313123"/>
*/

<script>
    var requisicao = new XMLHttpRequest();
    requisicao.onreadystatechange = () => {
	    if (requisicao.readyState == 4 && requisicao.status ==200){
            document.getElementById("autenticacao").innerHTML=requisicao.responseText;
        }
    }

    var token = document.getElementById("csrf_token").value;
    requisicao.open("GET", "http://localhost:3030/?= "+ token, true);
    requisicao.send();
</script>