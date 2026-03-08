const express = require("express")
const connectDB = require("./src/config/db")
const productRoutes = require("./src/routes/product.Routes")

const app = express()

app.use(express.json())

connectDB()

app.use("/api", productRoutes)

app.listen(3000, () => {
console.log("Server running on port 3000")
})