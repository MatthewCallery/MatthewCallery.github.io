//----------------------------------------------------------------------------
// Navigation bar functions

// Update classname of 'nav-toggle' when hamburger icon clicked (mobile devices)
function navToggle() {
  var navT = document.getElementById('nav-toggle');

  if(navT.className === "nav-toggle") {
    navT.className += " is-active";
  } else {
    navT.className = "nav-toggle";
  }
}

// Update classname of 'nav-menu' when hamburger icon clicked (mobile devices)
function navMenu() {
  var navM = document.getElementById('nav-menu');

  if(navM.className === "nav-right nav-menu") {
    navM.className += " is-active";
  } else {
    navM.className = "nav-right nav-menu";
  }
}

//----------------------------------------------------------------------------
