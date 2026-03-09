const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(bodyParser.json())

const routes = require("./routes")

app.use("/", routes)

app.listen(5000, ()=>{
console.log("Server running on port 5000")
})
npm init -y
npm install express cors body-parser mysql