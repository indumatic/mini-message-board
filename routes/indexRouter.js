const {Router} = require("express")

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: 1
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(), 
    id: 2
  }
];

const indexRouter = Router()

indexRouter.get("/", (req,res) => res.render("index", {messages: messages}))
indexRouter.post("/new", (req, res) => {
    messages.push({
        text: req.body.messageText,
        user: req.body.messageUser,
        added: new Date(),
        id:  messages.length + 1
    })
    res.redirect("/")
})
indexRouter.get("/messages/:messageId", (req,res) => {
    const {messageId} = req.params
    const message = messages.find(message => message.id === Number(messageId))
    res.render("messages/messageDetail", {message: message})
})

module.exports = indexRouter