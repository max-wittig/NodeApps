'use strict'

module.exports = class Note
{
    constructor(title, content)
    {
        this._title = title;
        this._content = content;
    }

    get title()
    {
        return this._title;
    }

    set title(value)
    {
        this._title = value;
    }

    get content()
    {
        return this._content;
    }

    set content(value)
    {
        this._content = value;
    }
}