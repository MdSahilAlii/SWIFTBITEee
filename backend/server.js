import express from "express"
import cors from 'cors'
import { connectToDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import foodRouter from "./routes/foodRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import 'dotenv/config'

// app config
const app = express()
const port = process.env.PORT || 4000

// middleware
app.use(express.json())
app.use(cors())
app.use("/images", express.static('uploads'))

// database
connectToDB()

// routes
app.use("/api/user", userRouter)
app.use("/api/food", foodRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
  res.send("API Working")
})

app.listen(port, () => console.log(`🚀 Server started on http://localhost:${port}`))
