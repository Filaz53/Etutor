

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




function registervalidation(){
  var email= document.getElementById('emailregister').value;

  if(/@aldini\.istruzioneer\.it$/i.test(email))
  {
    if(validatePassword()){
      _PASSWORD = document.getElementById("password").value;
      _EMAIL = email;
      usernamecreateREGISTER();
      infoaggiuntive()
      //gestire le info
      
  }
  }

  else window.alert("email non va bene");

}


function verificadatiaggiutivi(){
  var comune = document.querySelector('#ind').value;
  var anno = document.querySelector('#ac').value;
  var sezione = document.querySelector('#sez').value;

  if(comune == "non selezionato")
  {
    window.alert("seleziona tutti i campi prima di provare a registrarti");
  }
  else if(anno == "non selezionato")
  {
    window.alert("seleziona tutti i campi prima di provare a registrarti");
  }else if(sezione == "non selezionato")
  {
    window.alert("seleziona tutti i campi prima di provare a registrarti");
    }
    else{
      _ZONA_GEOGRAFICA = comune;
      _CLASSE = anno;
      _SEZIONE = sezione;
      requestregister()
    }

}


function infoaggiuntive(){
  document.getElementById('tot').style.display = "block";
  document.getElementById('infoAggiunte').style.opacity = "1";
}
function registercancel()
{
  document.getElementById('tot').style.display = "none";
  document.getElementById('infoAggiunte').style.opacity = "0";

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
function sito_tel(){
  window.HTMLInputElement("inserisci");
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




var profilo = false;

function profilotutor(tutorId) {
  var tutorDiv = document.getElementById("tutor" + tutorId);

  // Ottieni le informazioni del tutor
  var nomeTutor = tutorDiv.querySelector(".nometutor").textContent;
  var materiaTutor = tutorDiv.querySelector(".materiatutor").textContent;

  // Ottieni i giorni liberi del tutor
  var giorniLiberi = Array.from(tutorDiv.classList).filter(className => className.startsWith("giorno"));

  // Sovrascrivi le informazioni nel div del menu
  var menuDiv = document.getElementById("menu");
  var userElement = menuDiv.querySelector("#user");
  var materaMasterElement = menuDiv.querySelector("#Matera_master");
  var checkboxDiv = menuDiv.querySelector(".checkbox");

  // Sovrascrivi il nome utente
  userElement.textContent = nomeTutor;

  // Sovrascrivi la materia master
  materaMasterElement.textContent = "Materia : " + materiaTutor;

  // Sovrascrivi i giorni liberi
  var giorniCheckboxes = checkboxDiv.querySelectorAll("input[type='checkbox']");
  giorniCheckboxes.forEach(checkbox => {
    var giornoValue = checkbox.value.toLowerCase();
    var isChecked = giorniLiberi.includes("giorno" + giornoValue);
    checkbox.checked = isChecked;
    checkbox.disabled = true; // Abilita tutte le checkbox

    // Controlla se il giorno libero è presente nelle classi del tutor
  });

  // Mostra il div del menu
  menuDiv.style.display = "block";
  menuDiv.style.opacity = "1";
}






function searchbaron(attivo){
  var filtro = document.getElementById('filtri').style;
  var barra = document.getElementById('barra').style;
  var ricercaticket = document.getElementById('ricercaticket').style;
  if (attivo==0){
  document.body.style.overflowY = "auto";
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

  var divs = document.getElementsByClassName("tutor");
  for (var i = 0; i < divs.length; i++) {
    var div = divs[i];
    var hasMatch = false;

    // Verifica corrispondenza per materia
    var hasSelectedSubject = selectedSubject !== "";
    var hasSubjectClass = div.classList.contains(selectedSubject);

    // Verifica corrispondenza per classi
    var hasSelectedClasses = selectedClasses.length > 0;
    var hasClass = selectedClasses.some(cls => div.classList.toString().includes(cls));

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









var _SOCIAL= new String;

var telegram = "";
var instagram = "";
var facebook = "";
var twitter = "";


function sito_tele(){
  var sito= prompt('nick del profilo telegram');
  if (!sito==null) {
    telegram=sito;
}
}

function sito_t(){
  var sito= prompt('nick del profilo twitter');
  if (!sito==null) {
    twitter=sito;
    }
    }

function sito_i(){
  var sito= prompt('nick del profilo instagram');
  if (!sito==null) {
    instagram=sito;
    }
    
}

function sito_f(){
  var sito=prompt('nick del profilo facebook');
  if(!sito==null){
    facebook=sito;
  }
}

function create_SOCIAL(){
  _SOCIAL= "descrizione=Instagram:"+instagram+",Telegram:"+telegram+",Facebook:"+facebook+",Twitter:"+twitter;
}



















function usepersonal()
{
  document.getElementById('username').innerHTML = localStorage.getItem("NOME") + " " + localStorage.getItem("COGNOME");
  document.getElementById('anno').innerHTML = localStorage.getItem("CLASSE")  + " " + localStorage.getItem("SEZIONE");
  document.getElementById('email').innerHTML = localStorage.getItem("EMAIL");
  document.getElementById('area_giografica').innerHTML = localStorage.getItem("ZONA_GEOGRAFICA");
}






// Funzione per salvare lo stato dei tutor accettati in localStorage
function salvaStatoTutor() {
  var tutorAccettati = document.getElementById("ticketaccettati").innerHTML;
  var tutorInLista = document.getElementById("ricercaticket").innerHTML;
  localStorage.setItem("statoTutorAccettati", tutorAccettati);
  localStorage.setItem("statoTutorInLista", tutorInLista);
}

// Funzione per ripristinare lo stato dei tutor da localStorage
function ripristinaStatoTutor() {
  var tutorAccettati = localStorage.getItem("statoTutorAccettati");
  var tutorInLista = localStorage.getItem("statoTutorInLista");
  if (tutorAccettati) {
    document.getElementById("ticketaccettati").innerHTML = tutorAccettati;
  }
  if (tutorInLista) {
    document.getElementById("ricercaticket").innerHTML = tutorInLista;
  }
}

// Esegui il ripristino dello stato dei tutor quando la pagina viene caricata
window.addEventListener("load", ripristinaStatoTutor);

// Funzione per verificare se un tutor è già presente in ticketaccettati
function isTutorPresenteInAccettati(tutorId) {
  var ticketaccettati = document.getElementById("ticketaccettati");
  var tutorPresenti = ticketaccettati.getElementsByClassName("tutor");
  for (var i = 0; i < tutorPresenti.length; i++) {
    if (tutorPresenti[i].id === tutorId) {
      return true;
    }
  }
  return false;
}

// Funzione per verificare se un tutor è già presente in ricercaticket
function isTutorPresenteInLista(tutorId) {
  var ricercaticket = document.getElementById("ricercaticket");
  var tutorPresenti = ricercaticket.getElementsByClassName("tutor");
  for (var i = 0; i < tutorPresenti.length; i++) {
    if (tutorPresenti[i].id === tutorId) {
      return true;
    }
  }
  return false;
}

// Funzione per gestire il click sul pulsante .accetta
function accetta(numeroTutor) {
  // Seleziona il tutor con l'ID corrispondente
  var tutor = document.getElementById("tutor" + numeroTutor);

  // Verifica se il tutor è già presente in ticketaccettati
  if (isTutorPresenteInAccettati(tutor.id)) {
    return;
  }

  // Rimuovi il pulsante .rifiuta
  var pulsanteRifiuta = document.getElementById("tutor" + numeroTutor + "rifiuta");
  pulsanteRifiuta.remove();

  // Rimuovi il tutor dall'elemento padre corrente
  var tutorParent = document.getElementById("ricercaticket");
  tutorParent.removeChild(tutor);

  // Aggiungi il tutor a #ticketaccettati
  var ticketaccettati = document.getElementById("ticketaccettati");
  ticketaccettati.appendChild(tutor);

  // Sostituisci il pulsante .accetta con il pulsante .rimuovi
  var pulsanteAccetta = document.getElementById("tutor" + numeroTutor + "accetta");
  pulsanteAccetta.textContent = "RIMUOVI";
  pulsanteAccetta.setAttribute("onclick", "rimuoviTutor(" + numeroTutor + ")");
  pulsanteAccetta.classList.add("rimuovi");
  pulsanteAccetta.classList.remove("rifiuta");
  pulsanteAccetta.classList.remove("accetta");

  // Salva lo stato dei tutor in localStorage
  salvaStatoTutor();
}

// Funzione per gestire il click sul pulsante .rimuovi
function rimuoviTutor(numeroTutor) {
  // Seleziona il tutor con l'ID corrispondente
  var tutor = document.getElementById("tutor" + numeroTutor);
  tutor.remove();

  // Salva lo stato dei tutor in localStorage
  salvaStatoTutor();
}



// Funzione per gestire il click sul pulsante .rimuovi
function rifiuta(numeroTutor) {
  // Seleziona il tutor con l'ID corrispondente
  var tutor = document.getElementById("tutor" + numeroTutor);
  tutor.remove();

  // Salva lo stato dei tutor in localStorage
  salvaStatoTutor();
}






// Salva la funzione remove() in localStorage
localStorage.setItem("removeFunction", remove.toString());



// Funzione per inizializzare lo stato dei tutor dal localStorage
function initTutor() {
  const ticketAccettati = document.getElementById("ticketaccettati");
  const ricercaticket = document.getElementById("ricercaticket");

  // Verifica se esiste uno stato salvato nel localStorage per i tutor accettati
  if (localStorage.getItem("statoTutorAccettati")) {
    ticketAccettati.innerHTML = localStorage.getItem("statoTutorAccettati");
  }

  // Verifica se esiste uno stato salvato nel localStorage per i tutor in lista
  if (localStorage.getItem("statoTutorInLista")) {
    ricercaticket.innerHTML = localStorage.getItem("statoTutorInLista");
  }

  // Rimuovi i tutor già presenti in ticketaccettati da ricercaticket
  var tutorAccettati = ticketAccettati.getElementsByClassName("tutor");
  for (var i = 0; i < tutorAccettati.length; i++) {
    var tutorId = tutorAccettati[i].id;
    if (isTutorPresenteInLista(tutorId)) {
      var tutorInLista = document.getElementById(tutorId);
      tutorInLista.remove();
    }
  }
}

// Richiama la funzione di inizializzazione quando la pagina è pronta
window.addEventListener("DOMContentLoaded", initTutor);














// Funzione per creare un nuovo ticket
function createticket() {
  var materia = document.getElementById("materia").value;
  var ticketNumber = document.getElementById("ticket").childElementCount + 1;

  var ticketHTML = `
    <div id="ticket${ticketNumber}" class="ticket">
      <div id="ticket${ticketNumber}info" class="infoticket">
        <div id="ticket${ticketNumber}personal" class="materiaticket">${materia}</div>
      </div>
      <div id="ticket${ticketNumber}personal" class="rimuovi" onclick="rimuoviticket(${ticketNumber})">RIMUOVI</div>
    </div>
  `;

  var ticketDiv = document.getElementById("ticket");
  ticketDiv.insertAdjacentHTML("beforeend", ticketHTML);

  // Salva lo stato dei ticket nel Local Storage dopo aver creato un nuovo ticket
  salvaStatoTicket();
}

// Funzione per ripristinare lo stato dei ticket da Local Storage
function ripristinaStatoTicket() {
  var ticketHTML = localStorage.getItem("statoTicket");
  if (ticketHTML) {
    var ticketDiv = document.getElementById("ticket");
    ticketDiv.innerHTML = ticketHTML;
  }
}

// Funzione per salvare lo stato dei ticket in Local Storage
function salvaStatoTicket() {
  var ticketDiv = document.getElementById("ticket");
  var ticketHTML = ticketDiv.innerHTML;
  localStorage.setItem("statoTicket", ticketHTML);
}

// Ripristina lo stato dei ticket all'avvio della pagina
window.addEventListener("DOMContentLoaded", function () {
  ripristinaStatoTicket();
});


function rimuoviticket(ticketId) {
  var ticketDiv = document.getElementById("ticket"+ticketId);
  if (ticketDiv) {
    ticketDiv.remove();
    
    // Salva lo stato dei ticket aggiornato nel Local Storage dopo la rimozione di un ticket
    salvaStatoTicket();
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





/*REGISTRAZIONE*/
var _USERNAME = new String;
var _NOME = new String;
var _COGNOME = new String;
var _PASSWORD = new String;
var _EMAIL = new String;
var _CLASSE = new String;
var _SEZIONE = new String;
var _ZONA_GEOGRAFICA = new String;
var _ID = new String;

function usernamecreateREGISTER() {
  const email = document.getElementById('emailregister').value;
  const parts = email.split('@')[0].split('.');
  _NOME = parts[0];
  _COGNOME = parts[1];
  _USERNAME= String(_NOME + _COGNOME);
}


function usernamecreate() {
    const email = document.getElementById('emaillogin').value;
    const parts = email.split('@')[0].split('.');
  _NOME = parts[0];
  _COGNOME = parts[1];
  _USERNAME= String(_NOME + _COGNOME);
  
localStorage.setItem("NOME",_NOME);
localStorage.setItem("COGNOME",_COGNOME);
localStorage.setItem("USERNAME",_USERNAME);

    
}
    

// REGISTER
function requestregister() {
  var Param = "username=" + _USERNAME + "&password="+ _PASSWORD +"&name=" + _NOME+ "&cognome=" + _COGNOME + "&email="+ _EMAIL  + "&anno_classe=" + _CLASSE + "&sezione=" +_SEZIONE+ "&zona_geografica="+_ZONA_GEOGRAFICA; 
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() { registerresponse(this); };
      xhttp.open("POST","http://localhost:8080/ProgettoNSI/RegistrationServlet",true);
      xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhttp.send(Param);	
  
    localStorage.setItem("NOME",_NOME);
    localStorage.setItem("COGNOME",_COGNOME);
    localStorage.setItem("USERNAME",_USERNAME);
    localStorage.setItem("PASSWORD",_PASSWORD);
    localStorage.setItem("EMAIL",_EMAIL);
    localStorage.setItem("CLASSE",_CLASSE);
    localStorage.setItem("SEZIONE",_SEZIONE);
    localStorage.setItem("ZONA_GEOGRAFICA",_ZONA_GEOGRAFICA);
    localStorage.setItem("ID",_ID);

}

function registerresponse(e){
var x = JSON.parse(e.responseText);
console.log(x);
  if (e.status == 200){
  var risultato = x.statusregistration;

  if (risultato == "success"){  
    window.alert("eureca");
  window.location.href= "pages/main.html";
  }


	
	console.log(risultato);
	}
}










//LOGIN
function responselogin(e){
	
	var x = JSON.parse(e.responseText);
  if(x.LoginStatus == "password errata"){
    alert("Password errata");
  }
	else if (e.status == 200){
		_NOME = x.Nome;
		_COGNOME = x.Cognome;
		_ID = x.ID;
		_USERNAME = x.Username;
		_EMAIL = x.email;
		_CLASSE = x.anno_classe;
		_ZONA_GEOGRAFICA = x.zona_geografica;
		_SEZIONE = x.Sezione;
    localStorage.setItem("NOME",x.Nome);
    localStorage.setItem("COGNOME",x.Cognome);
    localStorage.setItem("ID",x.ID);
    localStorage.setItem("USERNAME",x.Username);
    localStorage.setItem("EMAIL",x.email);
    localStorage.setItem("CLASSE",x.anno_classe);
    localStorage.setItem("ZONA_GEOGRAFICA",x.zona_geografica);
    localStorage.setItem("SEZIONE",x.Sezione);
    
    window.open("pages/main.html","_self");
  }
}



function requestlogin(){
  savepass = document.getElementById('Lpassword').value;
  usernamecreate();
  var Param = "Username=" + _USERNAME + "&Password=" + savepass; 
	console.log(Param);
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() { responselogin(this); };
	xhttp.open("POST","http://localhost:8080/ProgettoNSI/LoginServlet",true);
	xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhttp.send(Param);
	
	
}



































/*crea ticket*/

var _GIORNILIBERI =new String

const bottomDiv = document.querySelector('.bottom');

const checkboxes = bottomDiv.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateSelectedDays);
});

// Funzione per aggiornare la stringa in base alla selezione delle checkbox
function updateSelectedDays() {
  // Array per memorizzare i giorni selezionati
  const selectedDays = [];

  // Iterare attraverso tutte le checkbox
  checkboxes.forEach(checkbox => {
    // Se una checkbox è selezionata, aggiungere il suo valore all'array
    if (checkbox.checked) {
      selectedDays.push(checkbox.value);
    }
  });

  // Creare la stringa di giorni selezionati
   _GIORNILIBERI = "Giorni Liberi:" + selectedDays.join(",");

  // Stampare la stringa
  console.log(_GIORNILIBERI);
}
