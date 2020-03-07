$(document).ready(function(){
    let currentUser
    if (localStorage.getItem("user")) {
       currentUser = localStorage.getItem("user")
        localStorage.removeItem("user");
    }
    else {
        window.location = 'index.html'
    }
    $("span").text(currentUser)
  });