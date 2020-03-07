const userField = $("#userField");
const submit = $("#submit")

$(document).ready(function(){
  if (localStorage.getItem("user")) {
    window.location = 'homepage.html'
  }
});


submit.click(function (e) { 
    e.preventDefault();
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(function(response) {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            console.log(userField.val());
            for (var i=0; i < data.length; i++) {
                if (data[i].username === userField.val()) {
                    console.log("Match!")
                    localStorage.setItem("userId", i);
                    localStorage.setItem("user", userField.val());
                    window.location = 'homepage.html'
                    return data[i];
                }
            }
          });
    });