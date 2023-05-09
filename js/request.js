function usernamecreate() {
    const email = document.getElementById('emaillogin').value;
    const parts = email.split('@')[0].split('.');
    var nome = parts[0];
    var cognome = parts[1];
    var username = string(nome + cognome);
    return { username };
    }



function requestlogin(){
    var username = usernamecreate()
    savepass = document.getElementById('Lpassword').value;
    var Param = "Username=" + username + "&Password=" + savepass; 
    console.log(Param);
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() { ManageResponse(this); };
        xhttp.open("POST","http://localhost:8080/ExampleProject/Service",true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send(Param);	
    }
function loginresponse(dati)
{

}