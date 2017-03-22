let socket = io()


socket.on('number', function (number)
{
    $('#counter').text(number)
})

$(document).ready(function ()
{
    $('#counter').click(function ()
    {
        socket.emit('+')
    })
})




