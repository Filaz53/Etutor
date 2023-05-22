function creaticketdiv(){
    document.getElementById('ticketadd').style.display = "block";
    document.getElementById('ticketadd').style.opacity = "1";
    document.getElementById('crea').style.right = "-2.5em";
    document.getElementById('tickettutor').style.right = "-2.5em";
    document.getElementById('ricercaticket').style.filter = "blur(0.2em)";     
}
function closeticketdiv(){
    document.getElementById('ticketadd').style.opacity = "0";
    document.getElementById('ticketadd').style.display = "none";
    document.getElementById('crea').style.right = "1em";
    document.getElementById('tickettutor').style.right = "1em";
    document.getElementById('ricercaticket').style.filter = "blur(0em)";
    }


