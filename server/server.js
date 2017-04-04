'use strict'

let path = require("path")
let express =require("express")
let app = express()
let http = require("http").Server(app)
let io = require("socket.io")(http)
require("./counter")(io)
require("./notes")(io)
app.use("/node_modules", express.static(path.resolve('node_modules')))
app.use("/", express.static(path.resolve('html/')))
app.use("/models", express.static(path.resolve('models/')))

http.listen(3000)
