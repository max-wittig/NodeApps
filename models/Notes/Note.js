'use strict'

class Note
{
    constructor(title, content, color)
    {
        this.title = title
        this.content = content
        this.color = color
        this.aliveForMs = 300000
        this.lifeTime = new Date().getTime() + this.aliveForMs
    }

    static fromJSON(jsonContent)
    {
        let noteObject = JSON.parse(jsonContent);
        return new Note(noteObject.title, noteObject.content, noteObject.color)
    }
}

//use class on the server and client side
if(typeof module !== 'undefined')
    module.exports = Note