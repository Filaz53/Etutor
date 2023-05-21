


function handleClickOutsideMenu(event) {
    var menuDiv = document.getElementById("menu");
    
    if (!menuDiv.contains(event.target) && !event.target.classList.contains("profile")) {
      menuDiv.style.display = "none";
    }
  }
  
  document.addEventListener("click", handleClickOutsideMenu);
  
  
  
  
  
  