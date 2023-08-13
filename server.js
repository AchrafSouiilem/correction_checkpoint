const express =require("express")
const logger = require("./logger")
const app = express()
app.use(logger)
app.use(express.static(__dirname + "/assets"))
app.use(express.static(__dirname + "/public"))

const PORT = 5000

app.listen(PORT, (err)=>{
    err ? console.log(err)
        : console.log(` server running on port ${PORT}`)
}
)