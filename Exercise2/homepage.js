$(document).ready(function(){
    if (localStorage.getItem("user")) {
       let currentUser = localStorage.getItem("user")
        localStorage.removeItem("user");
    }
    else {
        window.location = 'index.html'
    }
  });