'use strict'

let currentNumber = 0

module.exports = function (io)
{

    io.on('connection', function (socket)
    {
        socket.emit('number', currentNumber)
        socket.on("+", function ()
        {
            currentNumber++
            io.emit('number', currentNumber)
            console.log("CurrentNumber: " + currentNumber)
        })

        socket.on("-", function ()
        {
            currentNumber--
            io.emit('number', currentNumber)
            console.log("CurrentNumber: " + currentNumber)
        })
    })
}



