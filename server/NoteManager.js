'use strict'

module.exports = class NoteManager
{
    constructor()
    {
        this._notes = []
    }

    addNote(noteObject)
    {
        this._notes.push(noteObject)
    }

    get notes()
    {
        return this._notes;
    }
}