const btn1 = $('#btn1')
const btn2 = $('#btn2')
const btn3 = $('#btn3')
const btn4 = $('#btn4')
const btn5 = $('#btn5')
const btn6 = $('#btn6')
const btn7 = $('#btn7')
const btn8 = $('#btn8')
const btn9 = $('#btn9')
const textbox = $('#textbox')

btn1.click(function () {
    $.get('https://jsonplaceholder.typicode.com/posts', function(response) {
        console.log(response)
    })
});

btn2.click(function () {
    $.get('https://jsonplaceholder.typicode.com/post/10', function(response) {
        console.log(response)
    })
});

btn3.click(function () {
    $.get('https://jsonplaceholder.typicode.com/post/12/comments', function(response) {
        console.log(response)
    })
});

btn4.click(function () {
    $.get('https://jsonplaceholder.typicode.com/user/2/posts', function(response) {
        console.log(response)
    })
});

btn5.click(function () {
    $.post('https://jsonplaceholder.typicode.com/posts',{
        userId: 1,
        title: "new post",
        body: "new body"
    }, function(response){
        console.log(response.id)
    })
});

btn6.click(function () {
    $.ajax({
        method: 'PUT',
        url: 'http://jsonplaceholder.typicode.com/posts/12',
        data: {
            userId: 1,
            title: "new post",
            body: "new body"
        },
        complete: function(response){
            console.log(response.responseJSON);
        }
    })
});

// btn7.click(function () {
//     $.get('https://jsonplaceholder.typicode.com/posts', function(response) {
//         console.log(response)
//     })
// });

// btn8.click(function () {
//     $.get('https://jsonplaceholder.typicode.com/posts', function(response) {
//         console.log(response)
//     })
// });

// btn9.click(function () {
//     $.get('https://jsonplaceholder.typicode.com/posts', function(response) {
//         console.log(response)
//     })
// });