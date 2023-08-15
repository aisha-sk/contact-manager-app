const express = require("express")
const dotenv = require("dotenv").config()
const app = express()
const port = process.env.PORT || 5000
const errorHandler = require("./middleware/errorHandler")
app.use(express.json())

app.use("/api/contacts", require("./routes/contactRoutes")) // middleware

//error handler middleware

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on ${port}`)
}) 

// to test api, we need an http client e.g. thunderclient

