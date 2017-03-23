let socket = io()

$(document).ready(function ()
{

    socket.on('connection', function ()
    {
        socket.on('noteStructure', function (noteJSON)
        {
            //Todo
            addClientNote();
        })
    })

    function addClientNote()
    {

    }
    
    $('#addNoteButton').click(function ()
    {
        socket.emit('note', "title", "content")
        console.log("Note emited")
        //todo client side stuff
    })
})
