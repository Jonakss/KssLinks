import express from 'express'
import { newLink } from './types'
import * as linksService from './service/linksService'


const PORT:string = process.env.PORT || '3000'

const app = express()
app.use(express.json())

app.get('/', (_req, res) =>{
    res.send('Hello world')    
})

app.get('/new', (_req, res) =>{
    const newlink: newLink = {
        "text": "Prueba",
        "url": "prueba.p"
    }

    const link =linksService.addLink(newlink)

    res.send(`Se añadió el link ${link._id}.`)    
})

app.get('*', (_req, res) => {
    res.send(404)
})
    
app.listen(PORT, () => {
    console.log(`Server started in port: ${PORT}`)
})