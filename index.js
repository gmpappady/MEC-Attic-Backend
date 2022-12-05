import express, { application } from "express"
import itemRoutes from "./routes/items.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"

const app=express()


app.use(express.json())
app.use("/api/items",itemRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)


app.get("/test",(req,res)=>{
    res.json("it works!")
})

app.listen(7700,()=>{
    console.log("connected to backend")
})

