const express = require("express")
const app = express()

//const

app.get("/", (req, res)=> {
  res.sendFile(__dirname + "/index.html")
})
app.get("/getthis", (req, res)=> {
  res.send({"res": {obj: "this is my app 2", foo: "bar"}})
})

app.post("/postme", (req, res)=> {
  res.send({res: "this has been sent by post"})
})

app.all((req,res)=> {
  res.send({
    error: "404, request not found"
  })
})

app.listen(3000)