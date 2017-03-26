'use strict'

class NoteManager
{
    constructor()
    {
        this._notes = []
    }

    getRandomColor()
    {
        let random = Math.floor(Math.random()*11)
        switch(random)
        {
            case 0:
                return undefined
            case 1:
                return "red"
            case 2:
                return "pink"
            case 3:
                return "purple"
            case 4:
                return "lime"
            case 5:
                return "indigo"
            case 6:
                return "blue"
            case 7:
                return "teal"
            case 8:
                return "orange"
            case 9:
                return "grey"
            case 10:
                return "light-green"
            default: return undefined
        }
    }

    addNote(noteObject)
    {
        //add random color
        noteObject.color = this.getRandomColor()
        this.notes.push(noteObject)
    }

    //if lifeTime is too long. Remove note
    clearOldNotes()
    {
        let timeInMs = new Date().getTime()
        for(let i=0; i < this.notes.length; i++)
        {
            if(this.notes[i].lifeTime < timeInMs)
            {
                this.notes.splice(i, 1)
            }
        }
    }

    get notes()
    {
        return this._notes;
    }
}

if(typeof module !== 'undefined')
    module.exports = NoteManager