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
            let postIndex = (event.target.id).replace('post','');
            
             fetch(`https://jsonplaceholder.typicode.com/users/${currentUserId}/posts`)
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                let post = data[postIndex]
                $("#pTitle").text(post.title)
                $("#pBody").text(post.body)
                console.log(post);
                $("#postModal").modal()
                return fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
              })
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                data.forEach(function(item, index) {
                  $("#pComments").append(`
                     <li id="comment${index}">${item.body}</li>
                  `);
                });
                console.log(data)
              })
        }
    });
    $("#albums").click(function (event) {
      if (event.target.id !== "album") {
        let albumIndex = (event.target.id).replace('album','');
        fetch(`https://jsonplaceholder.typicode.com/users/${currentUserId}/albums`)
      }
    });
});

