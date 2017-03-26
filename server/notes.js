'use strict'

let NoteManager = require('./../models/Notes/NoteManager')
let Note = require('./../models/Notes/Note')

module.exports = function (io)
{
    let noteManager = new NoteManager()
    function publishNotes()
    {
        noteManager.clearOldNotes()
        io.emit('noteJSON', JSON.stringify(noteManager.notes))
    }

    io.on('connection', function (socket)
    {
        publishNotes()
        socket.on('note', function (jsonNote)
        {
            let note = Note.fromJSON(jsonNote)
            noteManager.addNote(note)
            publishNotes()
        })
    })


}