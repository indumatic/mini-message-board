const {Router} = require("express")

const indexRouter = Router()

indexRouter.get("/", (req,res) => res.send("index route"))

module.exports = indexRouter