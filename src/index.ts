import express from 'express'
import { newLink } from './types'
import * as linksService from './service/linksService'
import apiRouter from './routes/api'

const PORT:string = process.env.PORT || '3000'

const app = express()
app.use(express.json())

app.use('/api', apiRouter)

app.get('/', (_req, res) =>{
    res.send('Hello world')    
})

app.get('*', (_req, res) => {
    res.send(404)
})
    
app.listen(PORT, () => {
    console.log(`Server started in port: ${PORT}`)
})