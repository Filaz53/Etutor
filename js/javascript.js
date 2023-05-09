
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
}
function REShow()
{
  if(document.getElementById('REpassword').type == 'password')
    {document.getElementById('REpassword').type = 'text'}
  else
  document.getElementById('REpassword').type = 'password'
}
function LOGINShow()
{
  if(document.getElementById('Lpassword').type == 'password')
    {document.getElementById('Lpassword').type = 'text'}
  else
  document.getElementById('Lpassword').type = 'password'
  if(document.getElementById('Lucchetto').name == "lock-open-outline")
  {document.getElementById('Lucchetto').name = "lock-closed-outline"}
  else
  {document.getElementById('Lucchetto').name = "lock-open-outline"}

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
    document.getElementById('email-label').style.top = "50%"
  }
  else{
    //in alto
    document.getElementById('email-label').style.top = "-5px"
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