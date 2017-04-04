let socket = io()

$(document).ready(function ()
{
    let titleInput = document.getElementById("titleInput")
    let contentInput = document.getElementById("contentInput")
    let notesContainer = document.getElementById("notesContainer")

    socket.on('noteJSON', function (noteJSON)
    {
        notesContainer.innerHTML = ""
        let notesList = JSON.parse(noteJSON)
        for(let i=0; i < notesList.length; i++)
        {
            addClientNote(notesList[i])
        }
    })

    function addClientNote(note)
    {
        let container = document.createElement("div")
        container.classList.add("col-sm-2")
        container.classList.add("col-xs-6")
        container.style = "padding-top: 1%;"

        let panelGroup = document.createElement("div")
        panelGroup.classList.add("panel-group")
        let panel = document.createElement("div")
        panel.classList.add("panel-default")
        panel.classList.add("panel")
        panelGroup.appendChild(panel)

        let panelHeader = document.createElement("div")
        panelHeader.classList.add("panel-heading")
        if(note.color != undefined)
            panelHeader.classList.add("panel-" + note.color)
        panelHeader.textContent = note.title
        panel.appendChild(panelHeader)

        let panelBody = document.createElement("div")
        panelBody.classList.add("panel-body")
        panelBody.textContent = note.content
        panel.appendChild(panelBody)

        container.appendChild(panelGroup)
        notesContainer.appendChild(container)

    }

    function clearInputs()
    {
        titleInput.value = ""
        contentInput.value = ""
    }

    $('#addNoteButton').click(function ()
    {
        let note = new Note(titleInput.value, contentInput.value)
        if(note.title != "" && note.content != "")
        {
            clearInputs()
            socket.emit('note', JSON.stringify(note))
        }
    })
})
