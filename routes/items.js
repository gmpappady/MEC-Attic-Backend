import express from "express"
import { addItem, deleteItem, getItem, getItems, updateItem } from "../controllers/item.js"
const router=express.Router()

router.get("/items",getItems)
router.get("/:id",getItem)
router.post("/",addItem)
router.delete("/:id ",deleteItem)
router.put("/:id",updateItem)


export default router