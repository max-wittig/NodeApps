'use strict'

let NoteManager = require('./NoteManager')
let Note = require('./Note')

module.exports = function (io)
{
    let noteManager = new NoteManager()
    function publishNotes()
    {

    }

    io.on('connection', function (socket)
    {

        publishNotes()
        socket.on('note', function (title, content)
        {
            let note = new Note(title, content)
            noteManager.addNote(note)
            console.log("Note added with title: " + title)
        })
    })


}