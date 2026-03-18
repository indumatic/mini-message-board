const express = require("express")
const path = require("node:path")
const newRouter = require("./routes/newRouter.js")
const indexRouter = require("./routes/indexRouter.js")

const app = express()

//set views path and views engine
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

//set path for static elements
const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))

//parse form data
app.use(express.urlencoded({ extended: true }))

app.use("/", indexRouter)
app.use("/new", newRouter)

const PORT = 3000
app.listen(PORT, err => {
    if(err) {
        throw err
    }
    console.log(`listening on port ${PORT}`)
})