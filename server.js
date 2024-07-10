const express = require('express')
app = express()

port = 3000
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("<h1>Hello Node!!!!</h1>\n")
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})

