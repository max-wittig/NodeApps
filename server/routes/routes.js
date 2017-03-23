

module.exports = function (app)
{
    app.get("/", function (req, res)
    {
        res.sendFile("html/index.html")
    })
}