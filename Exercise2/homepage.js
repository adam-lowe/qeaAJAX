$(document).ready(function() {
  let currentUser;
  let currentUserId;
  if (localStorage.getItem("user")) {
    currentUser = localStorage.getItem("user");
    currentUserId = localStorage.getItem("userId");
  } else {
    window.location = "index.html";
  }
  $("span").text(currentUser);

  fetch(`https://jsonplaceholder.typicode.com/users/${currentUserId}/posts`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      data.forEach(function(item, index) {
        $("#posts").append(`
           <li id="post${index+1}">${item.title}</li>
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
           <li id="album${index+1}">${item.title}</li>
        `);
      });
    });
});

$("#logOut").click(function() {
  localStorage.removeItem("user");
  localStorage.removeItem("userId");
  location.reload();
});
