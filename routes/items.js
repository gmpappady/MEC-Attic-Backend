import express from "express"
import { addItem } from "../controllers/item.js"
const router=express.Router()

router.get("/test",addItem)

export default router