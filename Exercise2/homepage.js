$(document).ready(function(){
    let currentUser
    let currentUserId
    if (localStorage.getItem("user")) {
       currentUser = localStorage.getItem("user")
       currentUserId = localStorage.getItem("userId")
    }
    else {
        window.location = 'index.html'
    }
    $("span").text(currentUser)
  });

  $("#logOut").click(function () { 
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    location.reload();
  });