
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

var k =0;
var Register = 'Register';
function typeWriter2() {
if (k < Register.length) {
    document.getElementById("tutor").innerHTML += Register.charAt(k);
    k++;
    setTimeout(typeWriter2, speed);
}
}


function downlogin(){
    document.getElementById("container").style.top = "-200px";
    document.getElementById("TITLE").style.top = "10%"
    document.getElementById("upospite").style.top = "-100%"
    document.getElementById("downlogin").style.top = "100%"
    document.getElementById("rightregister").style.right = "0px"
    document.getElementById("accesso").style.top = "0%"
    window.setTimeout(document.getElementById("login").style.opacity = "1", 1000);
    typeWriter();
    document.getElementById("arrow2").style.top = "90%"
    setTimeout('document.getElementById("arrow3").style.left = "calc(100% - 5%)"', 700);

}
function upospite(){
    window.location.href='../pages/main'
}

var space=0;
function rightregister(){
    document.getElementById("accesso").style.right = "0%"
    document.getElementById("leftlogin").style.left = "0px"
    document.getElementById("rightregister").style.right = "-150px"
    document.getElementById("arrow4").style.left = "5%"
    document.getElementById("arrow3").style.left =   "calc(100% + 10%)";
    
    
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
    
}
function leftlogin(){
    document.getElementById("accesso").style.right = "-100%"
    document.getElementById("rightregister").style.right = "0px"
    document.getElementById("leftlogin").style.left = "-150px"
    document.getElementById("arrow3").style.left =   "calc(100% - 5%)";
    document.getElementById("arrow4").style.left = "-5%"
    
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
}

const dropdown = document.getElementById("my-dropdown");
const input = document.getElementById("hide");

dropdown.addEventListener("change", function() {
  const selectedOption = dropdown.options[dropdown.selectedIndex].value;
  input.value = selectedOption;
});

const dropdown2 = document.getElementById("my-dropdown2");
const input2 = document.getElementById("hide2");

dropdown2.addEventListener("change", function() {
  const selectedOption = dropdown2.options[dropdown2.selectedIndex].value;
  input2.value = selectedOption;
});



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