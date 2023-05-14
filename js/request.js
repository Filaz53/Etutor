var _username = "";
function usernamecreate() {
    const email = document.getElementById('emaillogin').value;
    const parts = email.split('@')[0].split('.');
    var nome = parts[0];
    var cognome = parts[1];
    var username = String(nome + cognome);
    return { username };
}
function requestlogin(_username){
    _username = usernamecreate()
    savepass = document.getElementById('Lpassword').value;
    var Param = "Username=" + _username + "&Password=" + savepass; 
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() { loginresponse(this); };
        xhttp.open("POST","https://localhost/pj/Login",true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send(Param);	
    }
function loginresponse(e)
{
	var x = JSON.parse(e.responseText);
	if (e.status == 200){
	var NOMEJson = x.Nome;
	var COGNOMEJson = x.Cognome;

	
	document.getElementById("Resp").innerHTML = NOMEJson +" "+  COGNOMEJson;
	}
}
