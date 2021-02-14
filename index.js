const express = require("express")
const app = express()
const router = express.Router()
const port = 3000

const pug = require("pug")

app.set("view engine", "pug")
app.set("views", __dirname + "/views")

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res)=> {
  res.sendFile(__dirname + "/index.html")
})

// router version 1
app.route("/usr")
  .get((req,res)=> {
    console.log("usr readed")
  })
  .post((req,res)=> {
    console.log("usr created")
  })
  .put((req,res)=> {
    console.log("usr updated")
  })

/*
  this is for testing the API
*/
app.get("/API", (req, res)=> {
  res.sendFile(__dirname + "/public/API-TESTER.html")
})
app.get("/pars/:name/:job/:tech", (req, res)=> {
  res.send(req.params)
  console.log
})
app.post("/postme", (req, res)=> {
  res.send({res: "this has been sent by post"})
})



app.listen(port, ()=> {
  console.log("------ Linstening on port " + 3000 + " ------")
})