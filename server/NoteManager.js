'use strict'

module.exports = class NoteManager
{
    constructor()
    {
        this.notes = []
    }

    addNote(noteObject)
    {
        this.notes.push(noteObject)
    }
}