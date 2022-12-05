import express, { application } from "express"
import itemRoutes from "./routes/items.js"

const app=express()
app.use(express.json())
app.use("/api/items",itemRoutes)

app.get("/test",(req,res)=>{
    res.json("it works!")
})

app.listen(7700,()=>{
    console.log("connected to backend")
})

