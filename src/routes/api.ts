import express from "express"

const router = express.Router()

router.get('/', (_, res)=>{
    res.send("Hola desde api")
})

export default router
