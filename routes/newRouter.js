const {Router} = require("express")

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const newRouter = Router()

newRouter.get("/", (req,res) => res.send("new message route"))

module.exports = newRouter