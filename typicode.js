const btn1 = $('#btn1')
const btn2 = $('#btn2')
const btn3 = $('#btn3')
const btn4 = $('#btn4')
const btn5 = $('#btn5')
const btn6 = $('#btn6')
const btn7 = $('#btn7')
const btn8 = $('#btn8')
const btn9 = $('#btn9')

btn1.click(function () {
    $.get('https://jsonplaceholder.typicode.com/posts', function(response) {
        console.log(response)
    })
});