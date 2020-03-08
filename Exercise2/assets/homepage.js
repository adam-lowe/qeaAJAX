$(document).ready(function() {
  let currentUser;
  let currentUserId;
  if (localStorage.getItem("user") && localStorage.getItem("userId")) {
    currentUser = localStorage.getItem("user");
    currentUserId = localStorage.getItem("userId");
  } else {
    window.location = "index.html";
  }
  $(".currentUser").text(currentUser);

  fetch(`https://jsonplaceholder.typicode.com/users/${currentUserId}/posts`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      data.forEach(function(item, index) {
        $("#posts").append(`
           <li id="post${index}">${item.title}</li>
        `);
      });
    });
  fetch(`https://jsonplaceholder.typicode.com/users/${currentUserId}/albums`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      data.forEach(function(item, index) {
        $("#albums").append(`
           <li id="album${index}">${item.title}</li>
        `);
      });
    });
    $("#logOut").click(function() {
      localStorage.removeItem("user");
      localStorage.removeItem("userId");
      location.reload();
    });
    
    $("#posts").click(function (event) {
        if (event.target.id !== "posts") {
            let postId = (event.target.id).replace('post','');
            
             fetch(`https://jsonplaceholder.typicode.com/users/${currentUserId}/posts`)
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                $("#postModal").modal()
                console.log(data[postId]);
              });
        }
    });
    $("#albums").click(function (event) {
        alert(event.target.id)
    });
});

