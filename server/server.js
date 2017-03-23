'use strict'

let path = require("path")
let express =require("express")
let app = express()
let http = require("http").Server(app)
let io = require("socket.io")(http)
require("./routes/routes")(app)
require("./counter")(io)
require("./notes")(io)
app.use("/node_modules", express.static(path.resolve('node_modules')))
app.use("/counter", express.static(path.resolve('html/counter')))
app.use("/notes", express.static(path.resolve('html/notes')))

http.listen(3000)
