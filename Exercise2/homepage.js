$(document).ready(function(){
    let currentUser
    if (localStorage.getItem("user")) {
       currentUser = localStorage.getItem("user")
    }
    else {
        window.location = 'index.html'
    }
    $("span").text(currentUser)
  });

  $("#logOut").click(function () { 
    localStorage.removeItem("user");
    location.reload();
  });