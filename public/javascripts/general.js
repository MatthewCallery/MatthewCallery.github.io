//----------------------------------------------------------------------------
// Navigation bar functions

// Update classname of 'nav-toggle' when hamburger icon clicked (mobile devices)
function navToggle() {
  var navT = document.getElementById('nav-toggle');

  if(navT.className === "navbar-burger") {
    navT.className += " is-active";
  } else {
    navT.className = "navbar-burger";
  }
}

// Update classname of 'nav-menu' when hamburger icon clicked (mobile devices)
function navMenu() {
  var navM = document.getElementById('nav-menu');

  if(navM.className === "navbar-menu") {
    navM.className += " is-active";
  } else {
    navM.className = "navbar-menu";
  }
}

//----------------------------------------------------------------------------
