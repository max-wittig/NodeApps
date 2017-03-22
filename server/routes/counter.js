'use strict'

let path = require("path")

module.exports = function(express)
{
    express.get("/counter", function (req, res)
    {
        res.sendFile(path.resolve("html/counter/index.html"))
    })

    express.get("/counter/index.js", function (req, res)
    {
        res.sendFile(path.resolve("html/counter/index.js"))
    })
}