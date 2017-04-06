let socket = io()
let counter = $('#counter');

socket.on('number', function (number)
{
    counter.text(number)
    if(number > 0) {counter.css("color", "green")}
    if(number == 0) {counter.css("color", "black")}
    if(number < 0) {counter.css("color", "red")}
})

$(document).ready(function ()
{
    counter.click(function ()
    {
        socket.emit('+')
        return false
    })

    //right click
    counter.contextmenu(function ()
    {
        socket.emit('-')
        return false
    })
})




