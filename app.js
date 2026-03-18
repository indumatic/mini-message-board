const express = require("express")
const path = require("node:path")

const app = express()

//set views path and views engine
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

//set path for static elements
const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))

app.get("/",(req, res) => {
    res.send("minimal express app")
})

const PORT = 3000
app.listen(PORT, err => {
    if(err) {
        throw err
    }
    console.log(`listening on port ${PORT}`)
})