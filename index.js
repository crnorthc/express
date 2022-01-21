const express = require("express")
const path = require("path")
const logger = require('./middleware/logger')

const app = express()


// Init Middleware
app.use(logger)

// Body Parser Middleware
app.use(express.json)
app.use(express.urlencoded({extended: false}))

// Set static folder
app.use(express.static(path.join(__dirname, "public")))

// Bring in router
app.use("/api/members", require("./routes/api/members"))

// Sometimes in cofig file
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`Server Started on port: ${PORT}`)
})
