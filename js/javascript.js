

var i = 0;
var Login = 'Login';
var speed = 80;

function typeWriter() {
    if (i < Login.length) {
      document.getElementById("tutor").innerHTML += Login.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

function downlogin(){
  document.getElementById('container').style.top = "calc(-100% + 5em)";
  document.getElementById('TITLE').style.top = "100%";
  document.getElementById('login-register').style.opacity = "0";
  document.getElementById('login-register').style.top = "100%";
  typeWriter();
}
function changetoregister(){
    setTimeout('document.getElementById("tutor").innerHTML = "Registe"', 160);
    setTimeout('document.getElementById("tutor").innerHTML = "Regist"', 240);
    setTimeout('document.getElementById("tutor").innerHTML = "Regis"', 320);
    setTimeout('document.getElementById("tutor").innerHTML = "Regi"', 400);
    setTimeout('document.getElementById("tutor").innerHTML = "Reg"', 480);
    setTimeout('document.getElementById("tutor").innerHTML = "Re"', 560);
    setTimeout('document.getElementById("tutor").innerHTML = "R"', 640);
    setTimeout('document.getElementById("tutor").innerHTML = ""', 720);
    setTimeout('document.getElementById("tutor").innerHTML = "L"', 800);
    setTimeout('document.getElementById("tutor").innerHTML = "Lo"', 880);
    setTimeout('document.getElementById("tutor").innerHTML = "Log"', 960);
    setTimeout('document.getElementById("tutor").innerHTML = "Logi"', 1040);
    setTimeout('document.getElementById("tutor").innerHTML = "Login"', 1120);
    return;
}


function changetologin(){
    setTimeout('document.getElementById("tutor").innerHTML = "Logi"', 160);
    setTimeout('document.getElementById("tutor").innerHTML = "Log"', 240);
    setTimeout('document.getElementById("tutor").innerHTML = "Lo"', 320);
    setTimeout('document.getElementById("tutor").innerHTML = "L"', 400);
    setTimeout('document.getElementById("tutor").innerHTML = ""', 480);
    setTimeout('document.getElementById("tutor").innerHTML = "R"', 560);
    setTimeout('document.getElementById("tutor").innerHTML = "Re"', 640);
    setTimeout('document.getElementById("tutor").innerHTML = "Reg"', 720);
    setTimeout('document.getElementById("tutor").innerHTML = "Regi"', 800);
    setTimeout('document.getElementById("tutor").innerHTML = "Regis"', 880);
    setTimeout('document.getElementById("tutor").innerHTML = "Regist"', 960);
    setTimeout('document.getElementById("tutor").innerHTML = "Registe"', 1040);
    setTimeout('document.getElementById("tutor").innerHTML = "Register"', 1120);
    return;
}



function Show()
{
  if(document.getElementById('password').type == 'password')
    {document.getElementById('password').type = 'text'}
  else
  document.getElementById('password').type = 'password'
  if(document.getElementById('Lucchetto').name == "lock-open-outline")
  {document.getElementById('Lucchetto').name = "lock-closed-outline"}
  else
  {document.getElementById('Lucchetto').name = "lock-open-outline"}
}
function REShow()
{
  if(document.getElementById('REpassword').type == 'password')
    {document.getElementById('REpassword').type = 'text'}
  else
  document.getElementById('REpassword').type = 'password'
  if(document.getElementById('RELucchetto').name == "lock-open-outline")
  {document.getElementById('RELucchetto').name = "lock-closed-outline"}
  else
  {document.getElementById('RELucchetto').name = "lock-open-outline"}
}
function LOGINShow()
{
  if(document.getElementById('Lpassword').type == 'password')
    {document.getElementById('Lpassword').type = 'text'}
  else
  document.getElementById('Lpassword').type = 'password'
  if(document.getElementById('LLucchetto').name == "lock-open-outline")
  {document.getElementById('LLucchetto').name = "lock-closed-outline"}
  else
  {document.getElementById('LLucchetto').name = "lock-open-outline"}

}




var varfocus = 0;

function funfocus(){
  varfocus++;
  //non in focus
  if( varfocus == 2){
    return varfocus = 0;
  }
  else return varfocus
}



function controllo(){
  var Email = document.getElementById('emaillogin').value;
  if(Email == 0 || varfocus == 0)
  {
    //sulla riga
    document.getElementById('login-email-label').style.top = "50%"
  }
  else{
    //in alto
    document.getElementById('login-email-label').style.top = "-5px"
  }
}
function controllo2(){
  var Email = document.getElementById('emailregister').value;
  if(Email == 0 || varfocus == 0)
  {
    //sulla riga
    document.getElementById('register-email-label').style.top = "50%"
  }
  else{
    //in alto
    document.getElementById('register-email-label').style.top = "-5px"
  }
}









var cont = 0;
function scroolhor(){
  cont++;
  if(cont == 2)
  {
    cont = 0;
    changetoregister();
    document.getElementById('left').style.width = "0%";
    document.getElementById('right').style.width = "10%";
    document.getElementById('left').style.opacity = "0";
    document.getElementById('right').style.opacity = "1";
    document.getElementById('accesso').style.left = "0%";
  }
  else{
    changetologin();
    document.getElementById('left').style.width = "10%";
    document.getElementById('right').style.width = "0%";
    document.getElementById('left').style.opacity = "1";
    document.getElementById('right').style.opacity = "0";
    document.getElementById('accesso').style.left = "-50%";
  }
}
var passinpfocus=0;
function focusinppass(){
  passinpfocus++;
  //non in focus
  if( passinpfocus == 2){
    return passinpfocus = 0;
  }
  else return passinpfocus

}

function controllopassword(passinpfocus){
    var lett = document.getElementById('Lpassword').value.length;
    if(!(lett > 0 && passinpfocus != 1))
    {
      //sulla riga
      console.log("true");
      document.getElementById('pass-login-email-label').style.top = "50%"
    }
    else{
      //in alto
      console.log("true");

      document.getElementById('pass-login-email-label').style.top = "-5px"
    }
}
var giorniliberi = 0;
var lunedi = 0;
var martedi = 0;
var mercoledi = 0;
var giovedi = 0;
var venerdi = 0;
var sabato = 0;
var domenica = 0;

function modificagiorni(giorno){

  if(giorno=="lun")
  {   
  lunedi++;
  if(lunedi!=1)
  lunedi=0;
  }
  else if(giorno=="mar")
  {
  martedi++;
  if(martedi!=1)
  martedi=0;
  }
  else if(giorno=="mer")
  {
  mercoledi++;
  if(mercoledi!=1)
  mercoledi=0;
  }
  else if(giorno=="gio")
  {
  giovedi++;
  if(giovedi!=1)
  giovedi=0;
  }
  else if(giorno=="ven")
  {
  venerdi++;
  if(venerdi!=1)
  venerdi=0;
  }
  else if(giorno=="sab")
  {
  sabato++;
  if(sabato!=1)
  sabato=0;
  }
  else if(giorno=="dom")
  {
  domenica++;
  if(domenica!=1)
  domenica=0;
  }

  }

  var giorniliberi= "";
function submitupginfo(){

  if(lunedi)
  {
    giorniliberi="lunedi";
  }
  if(martedi)
  {
    if(giorniliberi!="")
    giorniliberi=giorniliberi+",martedi";
    else
    giorniliberi="martedi";
    }
    if(mercoledi)
    {
      if(giorniliberi!="")
      giorniliberi=giorniliberi+",mercoledi";
      else
      giorniliberi="mercoledi";
      }
      if(giovedi)
      {
        if(giorniliberi!="")
        giorniliberi=giorniliberi+",giovedi";
        else
        giorniliberi="giovedi";
        }
        if(venerdi)
        {
          if(giorniliberi!="")
          giorniliberi=giorniliberi+",venerdi";
          else
          giorniliberi="venerdi";
          }
          if(sabato)
          {
            if(giorniliberi!="")
            giorniliberi=giorniliberi+",sabato";
            else
            giorniliberi="sabato";
            }
            if(domenica)
            {
              if(giorniliberi!="")
              giorniliberi=giorniliberi+",domenica";
              else
              giorniliberi="domenica";
              }
              return giorniliberi;
}









function validatePassword() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("REpassword").value;

  // Verifica la lunghezza della password
  if (password.length < 8 || password.length > 30) {
    alert("La password deve avere una lunghezza compresa tra 8 e 30 caratteri.");
    return false;
  }

  // Verifica la presenza di almeno una maiuscola, una minuscola e un numero
  if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/.test(password)) {
    alert("La password deve contenere almeno una maiuscola, una minuscola e un numero.");
    return false;
  }

  // Verifica che le password corrispondano
  if (password !== confirmPassword) {
    alert("Le password non corrispondono.");
    return false;
  }

  // La password è valida
  return true;
}


var _PASSWORD = new String;
var _EMAIL = new String;
var _CLASSE = new String;
var _
var _




function registervalidation(){
  var email= document.getElementById('emailregister').value;

  if(/@aldini\.istruzioneer\.it$/i.test(email))
  {
    if(validatePassword()){
      _PASSWORD = document.getElementById("password").value;
      _EMAIL = email;
      infoaggiuntive()
      //gestire le info
      
  }
  }

  else window.alert("email non va bene");

}



function sito_f(){
  window.open("https://www.facebook.com/login.php/", "_blank")
}
function sito_t(){
  window.open("https://twitter.com/i/flow/login", "_blank");
}
function sito_i(){
  window.open("https://www.instagram.com/", "_blank");
}
function sito_tik(){
  window.open("https://www.tiktok.com/login", "_blank");
}



function resettotale(){


  var filtersDiv = document.getElementById("filtri");
  var checkboxes = filtersDiv.querySelectorAll('input[type="checkbox"]');
  var radios = filtersDiv.querySelectorAll('input[type="radio"]');
  
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });
  
  radios.forEach(function (radio) {
    radio.checked = false;
  });


}



function resetFilters() {
  searchAndHide(true);
  resettotale();
  setTimeout(resettotale, 1000);
}




var profilo=false;

function profilotutor(tutorid){
  profilo=true;
  document.getElementById("menu").style.display = "block";
  document.getElementById("menu").style.opacity = "1";
}

function searchbaron(attivo){
  var users = document.getElementById('users').style;
  var filtro = document.getElementById('filtri').style;
  var content = document.getElementById('content').style;
  var barra = document.getElementById('barra').style;
  var ricercaticket = document.getElementById('ricercaticket').style;
  if (attivo==0){
  document.body.style.overflowY = "auto";
  users.left = "100%";
  users.width = "0%";
  users.opacity = "0";
  users.height = "0%";
  users.margin = "0px";
  filtro.width = "20%";
  filtro.opacity = "1";
  ricercaticket.marginLeft = "0px";
  ricercaticket.opacity = "1";
  }
}








function searchAndHide(reset) {

  var inputText = document.getElementById("inputbar-input").value.toLowerCase().trim();
  var materiaRadio = document.querySelector('input[name="materia"]:checked');
  var selectedSubject = materiaRadio ? materiaRadio.value : "";
  var classeCheckboxes = document.querySelectorAll('input[name="classe"]:checked');
  var selectedClasses = Array.from(classeCheckboxes).map(checkbox => checkbox.value);
  var giornoCheckboxes = document.querySelectorAll('input[name="giorniliberi_inp"]:checked');
  var selectedGiorni = Array.from(giornoCheckboxes).map(checkbox => checkbox.value);

  if(reset){
    document.getElementById("inputbar-input").value = "";
    document.getElementById("inputbar-input").focus();
    document.getElementById("inputbar-input").blur();
  }

  var divs = document.getElementsByClassName("tutor");
  for (var i = 0; i < divs.length; i++) {
    var div = divs[i];
    var hasMatch = false;

    // Verifica corrispondenza per materia
    var hasSelectedSubject = selectedSubject !== "";
    var hasSubjectClass = div.classList.contains(selectedSubject);

    // Verifica corrispondenza per classi
    var hasSelectedClasses = selectedClasses.length > 0;
    var hasClass = selectedClasses.every(cls => div.classList.toString().includes(cls));

    // Verifica corrispondenza per giorni liberi
    var hasSelectedGiorni = selectedGiorni.length > 0;
    var hasGiorno = selectedGiorni.every(giorno => div.classList.contains(giorno));

    // Verifica corrispondenza per classi del tutor
    var hasNameMatch = true;
    var inputTerms = inputText.split(" ");
    for (var j = 0; j < inputTerms.length; j++) {
      var term = inputTerms[j].trim();
      if (!div.classList.toString().includes(term)) {
        hasNameMatch = false;
        break;
      }
    }

    if (
      (!hasSelectedSubject || (hasSelectedSubject && hasSubjectClass)) &&
      (!hasSelectedClasses || (hasSelectedClasses && hasClass)) &&
      (!hasSelectedGiorni || (hasSelectedGiorni && hasGiorno)) &&
      (!inputText || hasNameMatch)
    ) {
      hasMatch = true;
    }

    if (!hasMatch) {
      div.style.display = "none";
    } else {
      div.style.display = "flex";
    }
  }
}












function toggleRadio(element) {
  if (element.checked) {
    // Deseleziona tutti gli altri input radio con lo stesso nome
    var radios = document.getElementsByName(element.name);
    for (var i = 0; i < radios.length; i++) {
      if (radios[i] !== element) {
        radios[i].checked = false;
      }
    }
  } else {
    // Deseleziona l'input radio se viene cliccato di nuovo
    element.checked = false;
  }
}















/*    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *\ 
 *                                                                                                                                           *
 *                                                                                                                                           *
 *                                                                                                                                           *
 *                                                                                                                                           *
 *                                                                                                                                           *
 *                                                                                                                                           *
 *                                                            REQUEST                                                                        *
 *                                                                                                                                           *
 *                                                                                                                                           *
 *                                                                                                                                           *
 *                                                                                                                                           *
 *                                                                                                                                           *
 *                                                                                                                                           *
\*    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    */




































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
        xhttp.open("POST","http://localhost:8080/ProgettoNSI/LoginServlet",true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send(Param);	
    }
    
function loginresponse(e){
	console.log(e.responseText);
}

