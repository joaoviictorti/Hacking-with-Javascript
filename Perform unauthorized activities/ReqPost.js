/*<form action="/" method="post">
    <input type="text" name="user" value="joao">
    <input type="text" name="pass" value="123" >
    <input type="hidden" name="csrf_token" value="123poepijfkj4340">
</form>
*/

<script>

    var xhr = new XMLHttpRequest();
    var user = document.forms[0].elements[0].value
    var pass = document.forms[0].elements[0].value
    var csrf = document.forms[0].elements[0].value
    xhr.open('POST','http://localhost:3030/',true);

    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

    xhr.send(`user=${user}&pass=${pass}&csrf=${csrf}`);

</script>